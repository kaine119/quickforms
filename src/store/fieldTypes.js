import uuidV4 from 'uuid/v4';

const LIST_NAMES = {
  type: 'LIST_NAMES',
  val: [],
};

export function newListNames(title) {
  return Object.create(LIST_NAMES, { title, id: uuidV4() });
}

const COUNTER = {
  type: 'COUNTER',
  val: {
    yes: 0,
    no: 0,
  },
};

export function newCounter(title) {
  return Object.create(COUNTER, { title, id: uuidV4() });
}
