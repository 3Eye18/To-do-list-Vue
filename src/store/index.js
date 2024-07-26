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
      state.tableData = state.tableData.filter(data => data.id !== rowID)
      console.log("Row deleted successfully!")
    },
    editRow(state, { rowID, dataObject }) {
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