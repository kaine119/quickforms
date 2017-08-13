import { fetchFormById, putFormById } from '@/api';
import { SET_FROM_OBJECT } from './mutationTypes';

export default {
  getFormById({ commit }, { id }) {
    return fetchFormById(id)
    .then((form) => {
      commit(SET_FROM_OBJECT, form);
    });
  },
  respondToForm({ commit }, { id, response }) {
    return putFormById(id, response)
    .then((newForm) => {
      commit(SET_FROM_OBJECT, newForm);
    });
  },
};
