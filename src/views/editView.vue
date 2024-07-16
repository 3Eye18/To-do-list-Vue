<!-- Firestore version -->
<!-- 
<template>
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
                <button class="button px-5 py-4 mt-2 bg-green edit-button">Save changes</button>
            </div>
        </form>
        
        <router-link :to="{ name: 'Table', params: {} }">
            <button class="button px-5 py-4 mt-3 bg-blue">Back</button>
        </router-link>
    </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import useGetRow from '@/composables/useGetRow';
import useEditRow from '@/composables/useEditRow';
import useValidate from '@/composables/useValidate';

export default {
    setup() {
        const name = ref('');
        const desc = ref('');
        const route = useRoute();
        const name_message = ref("")
        const desc_message = ref("")
        const fields = {
            name: name,
            desc: desc,
        }

        const { docId } = route.params;
        const { getOneRow } = useGetRow("notes")
        const { editRow } = useEditRow("notes")


        onMounted(async () => {
            if (docId) {
                const docSnap = await getOneRow(docId)

                if (docSnap) {
                    name.value = docSnap.name;
                    desc.value = docSnap.desc;
                }
            }
        });

        const { validate, isRequired, notNumber, maxLength } = useValidate()     

        watch(name, (newName) => {
            const nameRules = [isRequired(newName), notNumber(newName), maxLength(newName, 250)]
            name_message.value = validate(nameRules)
        })

        watch(desc, (newDesc) => {
            const descRules = [isRequired(newDesc), maxLength(newDesc, 250)]
            desc_message.value = validate(descRules)
        })

        const onSubmit = () => {
            if (!name_message.value && !desc_message.value) {
                editRow(docId, fields);
            }
        };

        return { name, desc, name_message, desc_message, onSubmit }
    }
}
</script>
-->

<!-- Vuex version -->
<template>
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
                <button class="button px-5 py-4 mt-2 bg-green edit-button">Save changes</button>
            </div>
        </form>
        
        <router-link :to="{ name: 'Table', params: {} }">
            <button class="button px-5 py-4 mt-3 bg-blue">Back</button>
        </router-link>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import useValidate from '@/composables/useValidate';
import store from '@/store';

export default {
    setup() {
        const name = ref('');
        const desc = ref('');
        const name_message = ref("")
        const desc_message = ref("")
        const route = useRoute();
        

        const { docId } = route.params;
        const rowID = parseInt(docId)
        const data = store.state.tableData.find(data => data.id == rowID)
        name.value = data.name
        desc.value = data.desc

        const { validate, isRequired, notNumber, maxLength } = useValidate()     

        watch(name, (newName) => {
            const nameRules = [isRequired(newName), notNumber(newName), maxLength(newName, 250)]
            name_message.value = validate(nameRules)
        })

        watch(desc, (newDesc) => {
            const descRules = [isRequired(newDesc), maxLength(newDesc, 250)]
            desc_message.value = validate(descRules)
        })

        function callEditRow() {
            store.commit('editRow', { rowID: rowID, dataObject: { name: name.value, desc: desc.value } })
        }

        const onSubmit = () => {
            if (!name_message.value && !desc_message.value) {
                callEditRow()
            }
        };

        return { name, desc, name_message, desc_message, onSubmit }
    }
}
</script>