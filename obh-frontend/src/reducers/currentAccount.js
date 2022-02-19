export default (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_ACCOUNT":
    console.log(action.account)
      return action.account
    case "CLEAR_CURRENT_ACCOUNT":
      return null
    default:
      return state
  }
}
