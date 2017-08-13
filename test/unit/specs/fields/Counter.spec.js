import Vue from 'vue';
import Counter from '@/components/fields/Counter';

function getRenderedElements(Component, propsData) {
  const Ctor = Vue.extend(Component);
  const vm = new Ctor({ propsData }).$mount();
  return vm.$el;
}

const field = { title: 'Test1', type: 'COUNTER', val: { yes: 32, no: 2 } };

describe('Counter', () => {
  it('renders title correctly given a field', () => {
    const el = getRenderedElements(Counter, {
      field,
    });
    expect(el.querySelector('.title').textContent).to.equal('Test1');
  });
  it('only renders increment buttons when responding', () => {
    const el = getRenderedElements(Counter, {
      field,
      responding: true,
    });
    expect(el.querySelector('.submit').children.length).to.equal(2);
    // eslint-disable-next-line no-unused-expressions
    expect(el.querySelector('.value')).to.not.exist;
  });
  it('only renders value when not responding', () => {
    const el = getRenderedElements(Counter, {
      field,
      responding: false,
    });
    expect(el.querySelector('#yes-value').textContent).to.equal('32');
    expect(el.querySelector('#no-value').textContent).to.equal('2');
    // eslint-disable-next-line
    expect(el.querySelector('.submit')).to.not.exist;
  });
});
