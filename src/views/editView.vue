<template>
    <div class="flex flex-col justify-center items-center h-screen w-screen">
        <form action="" id="info" @submit.prevent="onSubmit">
            <div class="form-group">
                <label class="text-base font-normal" for="name">Name:</label><br>
                <input v-model="name" class="form-input form-input-name h-6 w-52 p-3 border border-solid border-gray-300 mb-1 mt-1.5 text-base font-normal rounded resize-y box-border" type="text" id="name" name="name" value="" placeholder="Note's name..">
                <p class="text-base font-normal -mt-1 mb-3 pt-1"></p>
            </div>
            
            <div class="form-group">
                <label class="text-base font-normal" for="desc">Description:</label><br>
                <input v-model="desc" class="form-input form-input-desc h-6 w-52 p-3 border border-solid border-gray-300 mb-1 mt-1.5 text-base font-normal rounded resize-y box-border" type="text" id="desc" name="desc" value="" placeholder="Note's desc..">
                <p class="form-message text-base font-normal -mt-1 mb-3 pt-1"></p>
            </div>
            
            <div class="flex justify-center items-center">
                <button @click="editRow(docId, fields)" class="button px-5 py-4 mt-2 bg-green edit-button">Save changes</button>
            </div>
        </form>
        
        <router-link :to="{ name: 'Table', params: {} }">
            <button class="button px-5 py-4 mt-3 bg-blue">Back</button>
        </router-link>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import useGetRow from '@/composables/useGetRow';
import useEditRow from '@/composables/useEditRow';

export default {
    setup() {
        const name = ref('');
        const desc = ref('');
        const route = useRoute();
        const { docId } = route.params;
        const { getOneRow } = useGetRow("notes")
        const { editRow } = useEditRow("notes")
        const fields = {
            name: name,
            desc: desc,
        }

        onMounted(async () => {
            if (docId) {
                const docSnap = await getOneRow(docId)

                if (docSnap) {
                    name.value = docSnap.name;
                    desc.value = docSnap.desc;
                }
            }
        });

        return { name, desc, fields, docId, editRow }
    }
}
</script>