const contentReducer = (state={content: [], loading: false},action) =>{
  switch (action.type){

    case "LOADING_CONTENT":
      return{
        ...state,
        content:[...state.content],
        loading: true,
      }
    case "ADDING_CONTENT":
    return{
      ...state,
      content: action.content,
      loading:false
    };
    default:
    return state
  }
}
export default contentReducer
