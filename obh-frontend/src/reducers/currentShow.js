const currentShow = (state = "", action) => {
  switch (action.type) {
    case "SET_CURRENT_SHOW":
    console.log("set current show", action.show)
      return action.show
    case "CLEAR_CURRENT_SHOW":
    console.log("CLEARING NOW")
      return null
    default:
      return state
  }
}
export default currentShow
