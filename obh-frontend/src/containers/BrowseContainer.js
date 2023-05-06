import { React, useEffect, } from 'react'
import {useSelector, useDispatch } from "react-redux"
import BrowserComponent from '../components/Browse/BrowserComponent'
import {connect} from 'react-redux'
import {fetchFaves} from '../actions/favoriteActions'
import {setCurrentShow, clearCurrentShow} from '../actions/contentActions'
const BrowseContainer = () => {

  const content = useSelector(state => state.contentReducer.content)
  const loading = useSelector( state => state.contentReducer.loading)
  const currentUserId = useSelector(state => state.userReducer.current_user)
  const faves = useSelector( state => state.favoriteReducer.favorites)
  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log(content)
    dispatch(clearCurrentShow)
    console.log()
  }, [])  
  let thriller
  let drama
  let romance
  let history
  let fantasy
  let adventure
  let comedy
  let animation
  let genres = []
  genres = content.map((media) => media.attributes.genres)
  console.log(genres)
  let newGenres = [].concat.apply([], genres)
  function onlyUnique(value, index, self) {
   return self.indexOf(value) === index;
    }
  const filteredGenres = newGenres.filter(onlyUnique)

  console.log(filteredGenres)
    thriller = content.filter((media) => media.attributes.genres.includes('Thriller'))
    drama = content.filter((media) => media.attributes.genres.includes('Drama'))
    romance = content.filter((media) => media.attributes.genres.includes('Romance'))
    history = content.filter((media) => media.attributes.genres.includes('History'))
    adventure = content.filter((media) => media.attributes.genres.includes('Adventure'))
    fantasy = content.filter((media) => media.attributes.genres.includes('Fantasy'))
    comedy = content.filter((media) => media.attributes.genres.includes('Comedy'))
    animation = content.filter((media) => media.attributes.genres.includes('Animation'))
    console.log(thriller, drama, romance, history,)

    return(
      <div className="OBH-Content">
        <h2 className="movies-shows">Drama</h2>
        <BrowserComponent setCurrentShow={setCurrentShow} clearCurrentShow={clearCurrentShow} media={drama}/>
        <h2 className="movies-shows" >Romance</h2>
        <BrowserComponent setCurrentShow={setCurrentShow} clearCurrentShow={clearCurrentShow} media={romance}/>
        <h2 className="movies-shows" >Historical</h2>
        <BrowserComponent setCurrentShow={setCurrentShow} clearCurrentShow={clearCurrentShow} media={history}/>
        <h2 className="movies-shows">Animation</h2>
        <BrowserComponent setCurrentShow={setCurrentShow} clearCurrentShow={clearCurrentShow} media={animation}/>
        <h2 className="movies-shows">Thriller</h2>
        <BrowserComponent setCurrentShow={setCurrentShow} clearCurrentShow={clearCurrentShow} media={thriller}/>
        <h2 className="movies-shows">Fantasy</h2>
        <BrowserComponent setCurrentShow={setCurrentShow} clearCurrentShow={clearCurrentShow} media={fantasy}/>
        <h2 className="movies-shows">Comedy</h2>
        <BrowserComponent setCurrentShow={setCurrentShow} clearCurrentShow={clearCurrentShow} media={comedy}/>
        <h2 className="movies-shows">Adventure</h2>
        <BrowserComponent setCurrentShow={setCurrentShow} clearCurrentShow={clearCurrentShow} media={adventure}/>
      </div>
    )
}

/* const mSTP = (state) => {
  return{
    media: state.contentReducer.content,
    loading: state.contentReducer.loading,
    currentUserId: state.userReducer.current_user,
    faves: state.favoriteReducer.favorites
  }
} */
export default (BrowseContainer)
