export const addUser = user => {
  console.log(user)
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
        console.log(responseJSON)

        //dispatch({type: "ADD_USER", user:responseJSON.user})
        //dispatch(setCurrentAccount(responseJSON.account))
      }
    })

  }
}
