const userReducer = (state = {users:[], current_user: null, loaded:false},  action)=>{
  switch(action.type){
    case "ADD_USER":
    console.log("Adding User:", action.user)
    return{
      ...state,
      users: action.user
    }
    case "LOADING_USERS":
    return{
      ...state,
      users:[...state.users],
      loading: false,
    }
    case "FETCH_USERS":
    console.log(action.users)
    return{
      ...state,
      users: action.users,
      loaded:true
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
