const reducer = (state, action) => {
  switch(action.type) {
    case 'update': {
      return {
        ...state,
        [action.payload.type]: action.payload.value,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer