const initialState = {
  favorites: [],
  currentFave: false,
  currentFaveId: null


}

const favoriteReducer = (state = initialState,  action)=>{
  switch(action.type){
    case "ADD_FAVE":
    console.log("Adding Fave:", action)

    return{
      ...state,
      favorites: [...state.favorites, action.favorited_content]
    }

    case "DELETE_FAVE":

      console.log("Deleting from State", action.faveId)


      return {favorites: state.favorites.filter(fave=> fave.id !== action.faveId.id)}

    case "FETCH_FAVES":
    console.log(action.faves)

    return{
      ...state,
      favorites: action.faves,
    }
    case "SET_CURRENT_FAVE":
    console.log("CURRENT FAVE", action)
    return{
      ...state,
      currentFave: true,
      currentFaveId: action.currentFaveId
    }
    case "CLEAR_CURRENT_FAVE":
    return{
      ...state,
      currentFave:false,
      currentFaveId: null
    }
    default:
    return state

  }
}
export default favoriteReducer
