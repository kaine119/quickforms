import Vue from 'vue';
import Vuex from 'vuex';
// TODO: remove
import uuidV4 from 'uuid/v4';
import mutations from './mutations';

Vue.use(Vuex);

// initial state
// TODO: CURRENTLY A PLACEHOLDER
// shape: { title, fields: [{ title, type, value }] }
const initialState = {
  // current form being previewed. matches :id in /:id/preview and /:id/respond.
  // When responding, 'res' will be set to something other than null.
  title: 'Class Chalet',
  id: '3234',
  fields: [
    { title: 'Participants', type: 'LIST_NAMES', val: ['Bob', 'Ben'], res: null, id: uuidV4() },
    { title: 'Are you coming?', type: 'COUNTER', val: { yes: 0, no: 0 }, res: null, id: uuidV4() },
    { title: 'Are you bringing food?', type: 'COUNTER', val: { yes: 0, no: 0 }, res: null, id: uuidV4() },
  ],
};

const getters = {
  getAllFields: state => state.fields,
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
  state: initialState,
});
