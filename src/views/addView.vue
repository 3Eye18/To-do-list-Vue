<!-- Firestore version -->
<template>
    <div class="bg-pageBackground text-white flex flex-col justify-center items-center h-screen w-screen">
        <form action="" @submit.prevent="onSubmit">
            <div>
                <label class="text-base font-normal" for="name">Name:</label><br>
                <input v-model="name"
                    class="text-black h-6 w-52 p-3 border border-solid border-gray-300 mb-1 mt-1.5 text-base font-normal rounded resize-y box-border"
                    type="text" placeholder="Note's name..">
                <p class="text-red-500 text-base font-normal -mt-1 mb-3 pt-1">{{ name_message }}</p>
            </div>

            <div>
                <label class="text-base font-normal" for="desc">Description:</label><br>
                <input v-model="desc"
                    class="text-black h-6 w-52 p-3 border border-solid border-gray-300 mb-1 mt-1.5 text-base font-normal rounded resize-y box-border"
                    type="text" placeholder="Note's desc..">
                <p class="text-red-500 text-base font-normal -mt-1 mb-3 pt-1">{{ desc_message }}</p>
            </div>

            <div class="flex justify-center items-center">
                <button class="button px-5 py-4 mt-2 bg-green add-button" type="submit">Add</button>
            </div>
        </form>

        <router-link :to="{ name: 'Table', params: {} }">
            <button class="button px-5 py-4 mt-3 bg-blue">Back</button>
        </router-link>

    </div>
</template>

<script>
import useAddRow from '@/composables/useAddRow';
import useValidate from '@/composables/useValidate';
import { ref, watch } from 'vue'
import { useUser } from "@/composables/useUser";
import { useRouter } from 'vue-router';

export default {
    setup() {
        const name = ref("")
        const desc = ref("")
        const router = useRouter()
        const name_message = ref("")
        const desc_message = ref("")
        const fields = {
            name: name,
            desc: desc,
        }

        const { getuser } = useUser()
        const { user } = getuser()

        const { error, addRow } = useAddRow(user.value.email)
        const { validate, isRequired, notNumber, maxLength } = useValidate()

        watch(name, (newName) => {
            const nameRules = [isRequired(newName), notNumber(newName), maxLength(newName, 250)]
            name_message.value = validate(nameRules)
        })

        watch(desc, (newDesc) => {
            const descRules = [isRequired(newDesc), maxLength(newDesc, 250)]
            desc_message.value = validate(descRules)
        })

        async function onSubmit() {
            if (!name_message.value && !desc_message.value) {
                await addRow(fields);
                if (!error.value) router.push({ name: "Table", params: {} })
            }
        }

        return { name, desc, name_message, desc_message, onSubmit }
    }
}
</script>


<!-- Vuex version -->
<!-- <template>
    <div class="flex flex-col justify-center items-center h-screen w-screen">
        <form action="" @submit.prevent="onSubmit">
            <div>
                <label class="text-base font-normal" for="name">Name:</label><br>
                <input v-model="name" class="h-6 w-52 p-3 border border-solid border-gray-300 mb-1 mt-1.5 text-base font-normal rounded resize-y box-border" type="text" placeholder="Note's name..">
                <p class="text-red-500 text-base font-normal -mt-1 mb-3 pt-1">{{ name_message }}</p>
            </div>
            
            <div>
                <label class="text-base font-normal" for="desc">Description:</label><br>
                <input v-model="desc" class="h-6 w-52 p-3 border border-solid border-gray-300 mb-1 mt-1.5 text-base font-normal rounded resize-y box-border" type="text" placeholder="Note's desc..">
                <p class="text-red-500 text-base font-normal -mt-1 mb-3 pt-1">{{ desc_message }}</p>
            </div>
            
            <div class="flex justify-center items-center">
                <button class="button px-5 py-4 mt-2 bg-green add-button" type="submit">Add</button>
            </div>
        </form>

        <router-link :to="{ name: 'Table', params: {} }">
            <button class="button px-5 py-4 mt-3 bg-blue">Back</button>
        </router-link>
        
    </div>
</template>

<script>
import store from '@/store';
import useValidate from '@/composables/useValidate';
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router';

export default {
    setup() {
        const name = ref("")
        const desc = ref("")
        const name_message = ref("")
        const desc_message = ref("")
        const router = useRouter()

        const { validate, isRequired, notNumber, maxLength } = useValidate()     

        watch(name, (newName) => {
            const nameRules = [isRequired(newName), notNumber(newName), maxLength(newName, 250)]
            name_message.value = validate(nameRules)
        })

        watch(desc, (newDesc) => {
            const descRules = [isRequired(newDesc), maxLength(newDesc, 250)]
            desc_message.value = validate(descRules)
        })

        function callAddRow() {
            const arr = store.state.tableData
            const arrLength = store.state.tableData.length
            const rowID = arrLength > 0 ? (arr[arrLength - 1].id + 1) : 0
            store.commit('addRow', {id: rowID, name: name.value, desc: desc.value})
        }

        const onSubmit = () => {
            if (name.value === '' || desc.value === '') {
                name_message.value = validate([isRequired(name.value)])
                desc_message.value = validate([isRequired(desc.value)])
                return;
            }
            if (!name_message.value && !desc_message.value) {
                callAddRow();
                router.push('/')
            }
        };

        return { name, desc, name_message, desc_message, onSubmit }
    }
}
</script> -->