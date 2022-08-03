import React, {useEffect} from 'react'
import BrowserComponent from '../components/Browse/BrowserComponent'
import {connect} from 'react-redux'
import {fetchFaves} from '../actions/favoriteActions'
import {setCurrentShow, clearCurrentShow} from '../actions/contentActions'
const BrowseContainer = (props, clearCurrentShow, setCurrentShow, fetchFaves ) => {


  useEffect(() => {
    console.log(props.media)

  })
  let thriller
  let drama
  let romance
  let history
  let fantasy
  let adventure
  let comedy
  let animation
  let genres = []
  genres = props.media.map((media) => media.attributes.genres)
  console.log(genres)
  let newGenres = [].concat.apply([], genres)
  function onlyUnique(value, index, self) {
   return self.indexOf(value) === index;
    }
  const filteredGenres = newGenres.filter(onlyUnique)

  console.log(filteredGenres)
    thriller = props.media.filter((media) => media.attributes.genres.includes('Thriller'))
    drama = props.media.filter((media) => media.attributes.genres.includes('Drama'))
    romance = props.media.filter((media) => media.attributes.genres.includes('Romance'))
    history = props.media.filter((media) => media.attributes.genres.includes('History'))
    adventure = props.media.filter((media) => media.attributes.genres.includes('Adventure'))
    fantasy = props.media.filter((media) => media.attributes.genres.includes('Fantasy'))
    comedy = props.media.filter((media) => media.attributes.genres.includes('Comedy'))
    animation = props.media.filter((media) => media.attributes.genres.includes('Animation'))
    console.log(thriller, drama, romance, history,)

    return(
      <div className="OBH-Content">
        <h2 className="movies-shows">Drama</h2>
        <BrowserComponent setCurrentShow={props.setCurrentShow} clearCurrentShow={props.clearCurrentShow} media={drama}/>
        <h2 className="movies-shows" >Romance</h2>
        <BrowserComponent setCurrentShow={props.setCurrentShow} clearCurrentShow={props.clearCurrentShow} media={romance}/>
        <h2 className="movies-shows" >Historical</h2>
        <BrowserComponent setCurrentShow={props.setCurrentShow} clearCurrentShow={props.clearCurrentShow} media={history}/>
        <h2 className="movies-shows">Animation</h2>
        <BrowserComponent setCurrentShow={props.setCurrentShow} clearCurrentShow={props.clearCurrentShow} media={animation}/>
        <h2 className="movies-shows">Thriller</h2>
        <BrowserComponent setCurrentShow={props.setCurrentShow} clearCurrentShow={props.clearCurrentShow} media={thriller}/>
        <h2 className="movies-shows">Fantasy</h2>
        <BrowserComponent setCurrentShow={props.setCurrentShow} clearCurrentShow={props.clearCurrentShow} media={fantasy}/>
        <h2 className="movies-shows">Comedy</h2>
        <BrowserComponent setCurrentShow={props.setCurrentShow} clearCurrentShow={props.clearCurrentShow} media={comedy}/>
        <h2 className="movies-shows">Adventure</h2>
        <BrowserComponent setCurrentShow={props.setCurrentShow} clearCurrentShow={props.clearCurrentShow} media={adventure}/>
      </div>
    )
}

const mSTP = (state) => {
  return{
    media: state.contentReducer.content,
    loading: state.contentReducer.loading,
    currentUserId: state.userReducer.current_user,
    faves: state.favoriteReducer.favorites
  }
}
export default connect(mSTP, {fetchFaves, setCurrentShow, clearCurrentShow})(BrowseContainer)
