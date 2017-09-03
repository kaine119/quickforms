import { fetchFormById, putFormById, postNewForm } from '@/api';
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
  submitNewForm({ commit }, { newForm }) {
    return postNewForm(newForm)
    .then((res) => {
      // pretending that response has a form property containing new form.
      commit(SET_FROM_OBJECT, res);
      return new Promise(resolve => resolve(res));
    });
  },
};
