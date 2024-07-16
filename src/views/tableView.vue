<!-- Firestore -->
<!-- 
<template>
    <div class="flex flex-col justify-center items-center h-screen w-screen">
        <table border="1" class="w-1/2 text-base font-normal border-collapse">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th >Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="docData in docDatas" :key="docData.id">
                    <td>{{ docData.name }}</td>
                    <td >{{ docData.desc }}</td>
                    <td>
                        <button @click="deleteRow(docData.id)" class="button bg-red-600 px-2 py-2 mr-2">Delete</button>
                        <router-link :to="{ name: 'Edit', params: { docId: docData.id } }">
                            <button class="button bg-yellow-600 px-2 py-2">Edit</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>

        <router-link :to="{ name: 'Add', params: {} }">
            <button class="button bg-blue px-5 py-4 mt-4" type="submit">Add</button>
        </router-link>
    </div>
</template>


<style scoped lang="css">
table td,
table th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

table tbody tr:nth-child(odd) {
    background-color: #dddddd;
}
</style>


<script>
import useGetRow from '@/composables/useGetRow';
import useDeleteRow from '@/composables/useDeleteRow';
import { onMounted, ref } from 'vue';

export default {
    setup() {
        const { getAllRow } = useGetRow("notes")
        const docDatas = ref([])
        const { deleteRow } = useDeleteRow("notes", docDatas)
        
        onMounted(async () => {
            docDatas.value = await getAllRow();
        });
        
        return { docDatas, deleteRow }
    }
}
</script>
-->

<!-- Vuex version-->
<template>
    <div class="flex flex-col justify-center items-center h-screen w-screen">
        <table border="1" class="w-1/2 text-base font-normal border-collapse">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th >Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="docData in store.state.tableData" :key="docData.id">
                    <td>{{ docData.name }}</td>
                    <td >{{ docData.desc }}</td>
                    <td>
                        <button @click="callDeleteRow(docData.id)" class="button bg-red-600 px-2 py-2 mr-2">Delete</button>
                        <router-link :to="{ name: 'Edit', params: { docId: docData.id } }">
                            <button class="button bg-yellow-600 px-2 py-2">Edit</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>

        <router-link :to="{ name: 'Add', params: {} }">
            <button class="button bg-blue px-5 py-4 mt-4" type="submit">Add</button>
        </router-link>
    </div>
</template>


<style scoped lang="css">
table td,
table th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

table tbody tr:nth-child(odd) {
    background-color: #dddddd;
}
</style>

<script>
import store from '@/store';

export default {
    setup() {
        function callDeleteRow(rowID) {
            store.commit('deleteRow', rowID)
        }
        
        return { store, callDeleteRow }
    }
}
</script>