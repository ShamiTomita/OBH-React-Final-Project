import React, {useCallback, useEffect, useState} from "react"
import './App.css';
import UserSelectContainer from './containers/UserSelectContainer.js'
import {useSelector, useDispatch} from 'react-redux'
import {currentAccount} from './actions/fetchAccount.js'
import {fetchContent} from "./actions/contentActions.js"
import LoginAndSignupContainer from "./containers/LoginAndSignupContainer";
import SignUpComponent from './components/SignUpComponent'
import OBHContainer from './containers/OBHContainer'
import {Route, Routes} from 'react-router-dom'
import ShowPage from './components/Content/ShowPage'
import LogoutComponent from './components/LogoutComponent.js'
import BrowseContainer from './containers/BrowseContainer.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from './components/NavBar';

function App() {
/*   const mapStateToProps = state => {
    console.log("State", state)
    return ({
      is_LoggedIn: !!state.currentAccount,
      account: state.currentAccount,
      currentShow: state.currentShow
    })
  } */

  const is_LoggedIn = useSelector(state => !!state.currentAccount)
  const account = useSelector(state => state.currentAccount)
  const currentShow = useSelector(state => state.currentShow)
  const dispatch = useDispatch()
  const user = useSelector(state => state.currentUser)
  const state = useSelector(state => state)


  useEffect(() => {
    console.log(is_LoggedIn, account, currentShow, user, state)
    getContent();
    getCurrentAccount();
  }, [])
  
  const getContent = useCallback(() => {
    dispatch(fetchContent());
  },[])

  const getCurrentAccount = useCallback(() => {
    dispatch(currentAccount());
  }, [is_LoggedIn])

  //const {is_LoggedIn, account, currentShow} = this.props

  return( is_LoggedIn ?
    <>
    <NavBar />
      <Routes>
        {currentShow ? <Route path={`/shows/${currentShow.id}`} element={<ShowPage show={currentShow}/>}/> : <></>}
        <Route path='/home' element={<OBHContainer/>}/>
        <Route path='/users' element={<UserSelectContainer loggedIn={is_LoggedIn} account={account}/>}/>
        <Route path='/shows' element={<BrowseContainer/>}/>
        <Route path='/logout' element={<LogoutComponent/>}/>
      </Routes>


    </>
    :
    <div className="initial">
        <LoginAndSignupContainer />
    </div>
    );
  }

export default App;
