import React, {useEffect} from "react"
import ContentCarousel from '../components/Content/ContentCarousel'
import ContentPage from '../components/Content/ContentPage.js'
import FavoritesPage from '../components/Content/FavoritesPage.js'
import {fetchFaves} from '../actions/favoriteActions'
import {setCurrentShow, clearCurrentShow} from '../actions/contentActions'
import { useSelector, useDispatch } from "react-redux";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BrowseContainer from './BrowseContainer'
const ContentContainer = (props) => {

/*   componentDidMount(){
    console.log("cDM", this.props);
    this.props.fetchFaves(this.props.currentUserId)
    this.props.clearCurrentShow()
  } */
  const dispatch = useDispatch()
  const media =  useSelector(state=> state.contentReducer.content)
  const loading = useSelector(state => state.contentReducer.loading)
  const currentUserId = useSelector(state => state.userReducer.current_user['id'])
  const faves = useSelector(state =>state.favoriteReducer.favorites)

useEffect(() => {
  getFaves()
  getClearCurrentShow()
  console.log("Faves:", faves.length)
}, [])

const getFaves = () => {
  dispatch(fetchFaves(currentUserId));
}

const getClearCurrentShow = () => {
  dispatch(clearCurrentShow())
}

const getSetCurrentShow = (show) => {
  dispatch(setCurrentShow(show))
}



    let randomArray = []
    let randomOne = Math.floor(Math.random()*media.length)
    let randomTwo = Math.floor(Math.random()*media.length)
    let randomThree = Math.floor(Math.random()*media.length)
    if (randomOne !== randomTwo && randomTwo !== randomThree){
      randomArray.push(media[randomOne], media[randomTwo], media[randomThree])
    }else{
      randomArray.push(media[0], media[2], media[4])
    }

    return(
      <div>
      <Container>
        <Row>
        <Col>
          <ContentCarousel setCurrentShow={getSetCurrentShow} clearCurrentShow={getClearCurrentShow} media={media} rC1={randomArray[0]} rC2={randomArray[1]} rC3={randomArray[2]}/>
        </Col>
        </Row>
        </Container>
          <ContentPage className="content-page" setCurrentShow={getSetCurrentShow} clearCurrentShow={getClearCurrentShow} media={media}/>

          {faves.length > 1 ? <FavoritesPage setCurrentShow={getSetCurrentShow} clearCurrentShow={getClearCurrentShow} faves={faves} media={media}/> : <></>}
          <BrowseContainer/>
      </div>
    )
  
}


/* const mSTP = (state) => {
  return{
    media: state.contentReducer.content,
    loading: state.contentReducer.loading,
    currentUserId: state.userReducer.current_user['id'],
    faves: state.favoriteReducer.favorites
  }
} */


export default (ContentContainer)
