import axios from "axios"

const state = {
  mbMenuData: []
};
const actions = {
  // menu.json 호출
  fetchMenu({commit}){
    axios.get('./data/menu.json')
    .then(response =>{
      commit('UPDATE_MENU', response.data);
    })
    .catch(err => console.log(err));
  }
};
const mutations = {
  UPDATE_MENU(state, payload){
    state.mbMenuData = payload
  }
};
const getters = {
  getMbMenuData(state) {
    return state.mbMenuData
  }
};

export {state, actions, mutations, getters}