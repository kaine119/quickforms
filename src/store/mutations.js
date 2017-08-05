import * as mutationTypes from './mutationTypes';

/* eslint-disable no-param-reassign */
export default {
  [mutationTypes.ADD_NAME_TO_LIST_NAMES](state, { field, name }) {
    const index = state.fields.indexOf(field);
    state.fields[index].res = name;
  },

  [mutationTypes.RESPOND_COUNTER](state, { field, response }) {
    const index = state.fields.indexOf(field);
    state.fields[index].res = response;
  },
};
/* eslint-enable no-param-reassign */
