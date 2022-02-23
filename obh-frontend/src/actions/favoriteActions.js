export const addFave = (data) => {

  console.log("adding", data.user_id)
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/users/${data.user_id}/favorited_contents`, {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(responseJSON =>{
      if (responseJSON.error){
        alert(responseJSON.error)
      }else{
        console.log(responseJSON)

        dispatch({type: "ADD_FAVE", fave:responseJSON})

      }
    })

  }
}
export const deleteFave = (fave) => {
  console.log("clearing")
  return {
    type: "DELETE_FAVE",
    fave
  }
}
export const fetchFaves = (credentials) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/login', {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then((faves)=>{
      if (faves.error){
        alert(faves.error)
      }else{
        console.log(faves)
        dispatch({type:"FETCH_FAVES", faves: faves})

      }
    })
  };
};
