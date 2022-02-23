const favoriteReducer = (state = {faves:[]},  action)=>{
  switch(action.type){
    case "ADD_FAVE":
    console.log("Adding Fave:", action)
    return{
      ...state,
      faves: [...state.faves, action.fave]
    }
    case "DELETE_FAVE":{
      console.log(action.fav)
      const faveId = action.fav
      return state.filter(fave=> fave.id !== faveId)
    }
    case "FETCH_FAVES":
    console.log(action.faves)
    return{
      ...state,
      faves: action.faves,
    }
    default:
    return state

  }
}
export default favoriteReducer
