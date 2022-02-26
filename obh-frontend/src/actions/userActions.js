export const setCurrentUser = (user) => {
  console.log("SCU", user)
  return{
    type: "SET_CURRENT_USER",
    user
  }
}
export const clearCurrentUser = () => {
  console.log("hit user clear action")
  return{
    type: "CLEAR_CURRENT_USER",
  }
}

export const fetchUsers = (account_id) =>{
  debugger
  console.log(account_id)
  return(dispatch) =>{
    return fetch(`http://localhost:3000/api/v1/accounts/${account_id}/users`, {
      method: "GET"
    })
    .then(response => response.json())
    .then((responseJSON) => {
        console.log("fetching:",responseJSON.data)
        dispatch({ type: "FETCH_USERS", users: responseJSON.data });
      });
  };
};
export const addUser = user => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/accounts/${user.account_id}/users`, {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(user)
    })
    .then(r => r.json())
    .then(responseJSON =>{
      if (responseJSON.error){
        alert(responseJSON.error)
      }else{
        console.log(responseJSON.user.data)
        dispatch({type: "ADD_USER", user:responseJSON.user})
      }
    })

  }
}

export const deleteUser = (user) => {

  console.log("initiating delete", user)
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/users/${user}`, {
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
        console.log("SUCCESSFULLY DELETED:", user)

        dispatch({
          type: "DELETE_USER", user})
      }
    })
  }
}
