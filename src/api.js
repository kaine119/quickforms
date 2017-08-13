import uuidV4 from 'uuid/v4';

// TODO: after the API is done, remove placeholders!
const toReturn = {
  title: 'Class Chalet',
  id: '',
  fields: [
    { title: 'Participants', type: 'LIST_NAMES', val: ['Bob', 'Ben'], res: null, id: uuidV4() },
    { title: 'Are you bringing food?', type: 'COUNTER', val: { yes: 6, no: 3 }, res: null, id: uuidV4() },
  ],
};

export function fetchFormById(id) {
  toReturn.id = id;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(toReturn);
    }, 1000);
  });
}

export function putFormById(id, response) {
  // TODO: similar logic could be used on server side.
  toReturn.id = id;
  toReturn.fields = toReturn.fields.reduce((acc, cur) => {
    if (cur.type === 'LIST_NAMES' && response[cur.id]) {
      cur.val.push(response[cur.id]);
    } else if (cur.type === 'COUNTER' && response[cur.id]) {
      // eslint-disable-next-line
      cur.val[response[cur.id] ? 'yes' : 'no'] += 1;
    }
    acc.push(cur);
    return acc;
  }, []);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(toReturn);
    }, 1000);
  });
}
