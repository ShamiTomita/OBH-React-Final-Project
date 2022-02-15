const contentReducer = (state={content: []},action) =>{
  switch (action.type){
    case "ADD_CONTENT":
    return{
      ...state,
      content: [...state.content]
    };
    default:
    return state
  }
}
export default contentReducer
