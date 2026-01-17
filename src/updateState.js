
const updateState = (dispatch, payload) => {
    dispatch({
      type: 'update',
      payload
    })
  }

export default updateState