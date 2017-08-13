import * as mutationTypes from './mutationTypes';
import * as fieldTypes from './fieldTypes';

/* eslint-disable no-param-reassign, no-unused-vars */
export default {
  [mutationTypes.ADD_NAME_TO_LIST_NAMES](state, { field, name }) {
    const index = state.fields.indexOf(field);
    state.fields[index].res = name;
  },

  [mutationTypes.RESET_FOR_CREATING](state) {
    state.title = '';
    state.id = '';
    state.fields = [];
  },

  [mutationTypes.SET_FROM_OBJECT](state, formObject) {
    state.title = formObject.title;
    state.id = formObject.id;
    state.fields = formObject.fields;
  },

  [mutationTypes.RESPOND_COUNTER](state, { field, response }) {
    const index = state.fields.indexOf(field);
    state.fields[index].res = response;
  },

  [mutationTypes.ADD_LIST_OF_NAMES](state, { title }) {
    const newField = fieldTypes.newListNames(title);
    state.fields.push(newField);
  },
};
/* eslint-enable no-param-reassign */
