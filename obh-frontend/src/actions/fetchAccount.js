export const fetchAccount = (account) => {
  console.log(account)
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/login', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(account)
    })
    .then(response => response.json())
    .then((responseJSON)=>{
      dispatch({type:"FETCH_ACCOUNT", account: responseJSON.user.data})
    })
  };
};
