import { React, useEffect, Fragment } from 'react'
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
    dispatch(clearCurrentShow)
  }, [loading])  
  
  let genres = []
  genres = content.map((media) => media.attributes.genres)
  let newGenres = [].concat.apply([], genres)
  function onlyUnique(value, index, self) {
   return self.indexOf(value) === index;
    }
  const filteredGenres = newGenres.filter(onlyUnique)

  const browserComponents = filteredGenres.map((genre)=>{
    let genreGroup = content.filter(media => media.attributes.genres.includes(genre))
    return(
      <Fragment key={genre+"1"}>
      <h2 className="movies-shows">{genre}</h2>
      <BrowserComponent setCurrentShow={setCurrentShow} clearCurrentShow={clearCurrentShow} media={genreGroup} />
      </Fragment>
    )
  })
 /*  console.log(filteredGenres)
    thriller = content.filter((media) => media.attributes.genres.includes('Thriller'))
    drama = content.filter((media) => media.attributes.genres.includes('Drama'))
    romance = content.filter((media) => media.attributes.genres.includes('Romance'))
    history = content.filter((media) => media.attributes.genres.includes('History'))
    adventure = content.filter((media) => media.attributes.genres.includes('Adventure'))
    fantasy = content.filter((media) => media.attributes.genres.includes('Fantasy'))
    comedy = content.filter((media) => media.attributes.genres.includes('Comedy'))
    animation = content.filter((media) => media.attributes.genres.includes('Animation'))
    console.log(thriller, drama, romance, history,)
 */
    return(
      <div className="OBH-Content">
        {browserComponents}
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
