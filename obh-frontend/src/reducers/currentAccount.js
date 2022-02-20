export default (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_ACCOUNT":
    console.log("set current account", action.account)
      return action.account
    case "CLEAR_CURRENT_ACCOUNT":
    console.log("CLEARING NOW")
      return null
    default:
      return state
  }
}
