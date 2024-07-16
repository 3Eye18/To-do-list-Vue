import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      tableData: []
    }
  },
  mutations: {
    addRow(state, dataObject) {
      state.tableData.push(dataObject)
      alert("Adding new row successfully!")
    },
    deleteRow(state, rowID) {
      const confirmDelete = confirm("Are you sure you want to delete this row?")
      if (!confirmDelete) return
      state.tableData = state.tableData.filter(data => data.id !== rowID)
      console.log("Row deleted successfully!");
    },
    editRow(state, { rowID, dataObject }) {
      console.log(dataObject)
      const index = state.tableData.findIndex(data => data.id === rowID)
      if (index !== -1) {
        state.tableData[index] = {...state.tableData[index], ...dataObject}
        alert("Editing row successfully!")
      }
    }
  },
  actions: {
    // Your actions
  },
  getters: {

  },
  modules: {
    // Your modules
  }
});