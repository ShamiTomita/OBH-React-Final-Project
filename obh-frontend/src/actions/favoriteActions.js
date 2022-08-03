export const addFave = (fave) => {

  console.log("adding", fave)

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/users/${fave.user_id}/favorited_contents`, {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(fave)
    })
    .then(r => r.json())
    .then(responseJSON =>{
      if (responseJSON.error){
        alert(responseJSON.error)
      }else{
        console.log(responseJSON)

        dispatch({type: "ADD_FAVE", favorited_content:responseJSON.favorited_content.data})

      }
    })

  }
}
export const deleteFave = (faveId) => {
  console.log("initiating delete", faveId)
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/favorited_contents/${faveId.id}`, {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(responseJSON =>{
      if (responseJSON.error){
        alert(responseJSON.error)
      }else{
        console.log("SUCCESSFULLY DELETED:", faveId)

        dispatch({
          type: "DELETE_FAVE", faveId})
      }
    })
  }
}
export const fetchFaves = (data) => {
  console.log("fetching")
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/users/${data}/favorited_contents`, {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'GET'
    })
    .then(response => response.json())
    .then((faves)=>{
      if (faves.error){
        alert(faves.error)
      }else{
        
        console.log(faves)
        dispatch({type:"FETCH_FAVES", faves: faves.data})
      }
    })
  };
};

export const setCurrentFave = (matchId) => {
  console.log("dispatch set current fave", matchId)
  return{
    type: "SET_CURRENT_FAVE",
    currentFaveId: matchId
  }
}

export const clearCurrentFave = () => {
  return{
    type: "CLEAR_CURRENT_FAVE"
  }
}
