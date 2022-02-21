import React from 'react';
import UserContainer from '../containers/UserContainer.js'
import { Link } from 'react-router-dom'


const Home = () => (
  <div>
  <h1>WELCOME BACK {this.props.account['data']['attributes']['username']}!</h1>
  <UserContainer />
  </div>

);

export default Home;
