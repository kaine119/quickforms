import Vue from 'vue';
import Counter from '@/components/fields/Counter';

function getRenderedElements(Component, propsData) {
  const Ctor = Vue.extend(Component);
  const vm = new Ctor({ propsData }).$mount();
  return vm.$el;
}

const field = { title: 'Test1', type: 'COUNTER', val: 32 };

describe('Counter', () => {
  it('renders title correctly given a field', () => {
    const el = getRenderedElements(Counter, {
      field,
    });
    expect(el.querySelector('.title').textContent).to.equal('Test1');
  });
  it('only renders increment button when responding', () => {
    const el = getRenderedElements(Counter, {
      field,
      responding: true,
    });
    expect(el.querySelector('.submit').textContent).to.equal('32');
    // eslint-disable-next-line
    expect(el.querySelector('.value')).to.not.exist;
  });
  it('only renders value when not responding', () => {
    const el = getRenderedElements(Counter, {
      field,
      responding: false,
    });
    expect(el.querySelector('.value').textContent).to.equal('32');
    // eslint-disable-next-line
    expect(el.querySelector('.submit')).to.not.exist;
  });
});
