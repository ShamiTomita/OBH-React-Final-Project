export const fetchContent = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_CONTENT" });
    fetch('http://localhost:3000/api/v1/contents', {
      method: "GET"
    })
    .then(response => response.json())
    .then((responseJSON) => {
        console.log(responseJSON.data)
        dispatch({ type: "ADDING_CONTENT", content: responseJSON.data });
      });
  };
};
