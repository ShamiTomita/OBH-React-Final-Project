const accountReducer = (state = {accounts:[]}, action)=>{
  switch(action.type){

    case "ADD_ACCOUNT":
      return{
        ...state,
        accounts: action.account
      }
    default:
    return state

  }
}
export default accountReducer
