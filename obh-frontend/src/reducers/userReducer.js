const userReducer = (state = {users:[], current_user: null},  action)=>{
  switch(action.type){
    case "ADD_USER":
    console.log(action)
    return{
      ...state,
      users: action.user
    }

    case "FETCH_USERS":
    console.log(action.users)
    return{
      ...state,
      users: action.users,
    }

    case "SET_CURRENT_USER":
    console.log("Setting Current User:", action)
      return{
        current_user: action.user
      }
    default:
    return state
  }
}

export default userReducer
