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
    },
    deleteRow(state, rowID) {
      state.tableData = state.tableData.filter(data => data.id !== rowID)
    },
    editRow(state, rowID, newData) {
      const index = state.tableData.findIndex(data => data.id === rowID)
      if (index !== -1) {
        state.tableData[index] = {...state.tableData[index], ...newData}
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