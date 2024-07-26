<!-- Firestore -->
<template>
    <div class="bg-pageBackground text-white pt-10 flex flex-col justify-start items-center h-screen w-full">
        <table border="1" class="w-full text-base font-normal border-collapse">
            <thead class="sticky top-10">
                <tr class="font-bold">
                    <th scope="col" class="px-6 py-3">NAME</th>
                    <th scope="col" class="px-6 py-3">DESCRIPTION</th>
                    <th scope="col" class="px-6 py-3 w-18 flex justify-end items-center">
                        <router-link :to="{ name: 'Add', params: {} }">
                            <div class="tooltip">
                                <font-awesome-icon class="text-xl text-blue" icon="fa-solid fa-plus" />
                                <span class="tooltipleft">Add notes</span>
                            </div>
                        </router-link>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="docData in docDatas" :key="docData.id">
                    <td class="px-6 py-3 w-1/3">{{ docData.name }}</td>
                    <td class="px-6 py-3 w-2/3">{{ docData.desc }}</td>
                    <td class="px-6 py-3 w-18 flex justify-center items-center">
                        <div class="tooltip">
                            <font-awesome-icon class="text-red-500 cursor-pointer text-xl" @click="deleteRow(docData.id)" icon="fa-solid fa-trash-can"/>
                            <span class="tooltipbot">Delete</span>
                        </div>
                        
                        <router-link :to="{ name: 'Edit', params: { docId: docData.id } }">
                            <div class="tooltip">
                                <font-awesome-icon class="text-yellow-300 text-lg ml-2" icon="fa-solid fa-pen" />
                                <span class="tooltipbot">Edit</span>
                            </div>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>

        
    </div>
</template>


<style scoped lang="css">
table td,
table th {
    /* border: 1px solid #dddddd; */
    text-align: left;
    padding: 8px;
}

table thead {
    background-color: #374151;
}

table tbody tr:nth-child(odd) {
    background-color: #111827;
}

table tbody tr:nth-child(even) {
    background-color: #1f2937;
}
</style>


<script>
import useGetRow from '@/composables/useGetRow';
import useDeleteRow from '@/composables/useDeleteRow';
import { onMounted, ref } from 'vue';
import { useUser } from "@/composables/useUser";

export default {
    setup() {
        const { getuser } = useUser()
        const { user } = getuser()

        const { getAllRow } = useGetRow(user.value.email)
        const docDatas = ref([])
        const { deleteRow } = useDeleteRow(user.value.email, docDatas)

        onMounted(async () => {
            docDatas.value = await getAllRow();
        });

        return { docDatas, deleteRow }
    }
}
</script>

<!-- Vuex version-->
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
            const confirmDelete = confirm("Are you sure you want to delete this row?")
            if (!confirmDelete) return
            store.commit('deleteRow', rowID)
        }
        
        return { store, callDeleteRow }
    }
}
</script>
-->