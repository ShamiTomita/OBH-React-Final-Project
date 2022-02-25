const userReducer = (state = {users:[], current_user: null, loaded:false},  action)=>{
  switch(action.type){
    case "ADD_USER":
    
    console.log("Adding User:", action)
    return{
      ...state,
      users: [...state.users, action.user.data]
    }
    case "LOADING_USERS":
    return{
      ...state,
      users:[...state.users],
      loaded: false,
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
        ...state,
        current_user: action.user
      }
    case "CLEAR_CURRENT_USER":
    console.log("CLEARING USER NOW")
      return{
        ...state,
        current_user: null
      }
    default:
    return state
  }
}

export default userReducer
