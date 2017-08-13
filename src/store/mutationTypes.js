// Form creation
// Will RESET the whole state.
export const RESET_FOR_CREATING = 'RESET_FOR_CREATING';
// Will affect state.formToCreate.fields[]
export const ADD_LIST_OF_NAMES = 'ADD_LIST_OF_NAMES';
export const ADD_COUNTER = 'ADD_COUNTER';

// Responding
// Should SET the whole state from a form object from the API.
// TODO: currently sets the state from a placeholder object.
export const SET_FROM_OBJECT = 'SET_FROM_OBJECT';
// Will affect state.formToRespond.fields[]
export const ADD_NAME_TO_LIST_NAMES = 'ADD_NAME_TO_LIST_NAMES';
export const RESPOND_COUNTER = 'RESPOND_COUNTER';
