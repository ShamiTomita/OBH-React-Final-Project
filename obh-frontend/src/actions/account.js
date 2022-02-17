export const addAccount = (data) => {
  
  console.log(data)
  return (dispatch) => {
    dispatch({type: 'ADD_ACCOUNT'});
    fetch('http://localhost:3000/api/v1/accounts', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })

  }
}
