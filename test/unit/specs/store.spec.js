// import Vue from 'vue';
// import mutationTypes from '@/store/mutationTypes';
import mutations from '@/store/mutations';

describe('Vuex store', () => {
  it('should increment COUNTERs correctly', () => {
    const counter = { title: 'Test', type: 'COUNTER', val: 0 };
    const initialState = { fields: [counter] };
    mutations.INCREMENT_COUNTER(initialState, { field: counter });
  });
});
