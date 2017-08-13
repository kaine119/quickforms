import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

// initial state
// TODO: CURRENTLY A PLACEHOLDER
// shape: { title, fields: [{ title, type, value }] }
const initialState = {
  // // current form being previewed. matches :id in /:id/preview and /:id/respond.
  // // When responding, 'res' will be set to something other than null.
  title: '',
  id: '3234',
  fields: [],
};

const getters = {
  getAllFields: state => state.fields,
  getFormTitle: state => state.title,
  getValueOf: state => (field) => {
    const index = state.fields.indexOf(field);
    return state.fields[index].val;
  },
  getResponse: state => state.fields.reduce((acc, curr) => {
    acc[curr.id] = curr.res;
    return acc;
  }, {}),
};

export default new Vuex.Store({
  getters,
  mutations,
  actions,
  state: initialState,
});
