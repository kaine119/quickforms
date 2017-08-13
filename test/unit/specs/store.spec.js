// import Vue from 'vue';
// import mutationTypes from '@/store/mutationTypes';
import mutations from '@/store/mutations';

describe('Vuex store -- mutations', () => {
  it('should set response for COUNTER correctly', () => {
    const counter = { title: 'Test', type: 'COUNTER', res: null };
    const initialState = { fields: [counter] };
    mutations.RESPOND_COUNTER(initialState, { field: counter, res: true });
    expect(initialState.fields[0].res).to.be(true);
    mutations.RESPOND_COUNTER(initialState, { field: counter, res: false });
    expect(initialState.fields[0].res).to.be(false);
  });

  // it('should add names to LIST_NAMES correctly', () => {
  //   const list = { title: 'Test', type: }
  // })
});
