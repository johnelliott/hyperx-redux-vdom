module.exports = function (state, action) {
  if (typeof state === 'undefined') state = {value: [0]}

  console.log(state)
  console.log(action)

  switch (action.type) {
    case 'INCREMENT':
      return Object.assign(state, {value: state.value.concat([new Date().toISOString()])})

    default:
      return state
  }
}
