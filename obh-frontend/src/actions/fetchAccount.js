export const setCurrentAccount = account => {
  return {
    type: "SET_CURRENT_ACCOUNT",
    account
  }
}
export const clearCurrentUser = () => {
  console.log("clearing")
  return {
    type: "CLEAR_CURRENT_ACCOUNT"
  }
}
export const addAccount = (data) => {

  console.log(data)
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/accounts', {
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
        console.log(data)

        dispatch({type: "ADD_ACCOUNT", account:responseJSON.account})
        dispatch(setCurrentAccount(responseJSON.account))
      }
    })

  }
}

export const fetchAccount = (credentials) => {
  console.log(credentials)
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
    .then((account)=>{
      if (account.error){
        alert(account.error)
      }else{
        dispatch({type:"FETCH_ACCOUNT", account: account.user.data})
        dispatch(setCurrentAccount(account))
      }
    })
  };
};

export const currentAccount = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(account => {
        if (account.error) {
          alert(account.error)
        } else {
          console.log(account)
          dispatch(setCurrentAccount(account))
        }
      })
      .catch(console.log)
  }
}

export const logout = event => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch('http://localhost:3000/api/v1/logout', {
      credentials: "include",
      method: "DELETE"
    })
  }
}
