import {useState} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import NxtContext from './context/context'
import Login from './components/Login'
import Home from './components/Home'
import TrendingVideos from './components/TrendingVideos'
import ProtectedRoute from './components/ProtectedRoute'
import GamingVideos from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import './App.css'
import Video from './components/Video'

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [buyPremiumShow, setBuyPremiumShow] = useState(true)
  const [savedVideosList, setSavedVideosList] = useState([])
  const [likedVideosList, setLikedVideosList] = useState([])
  const [dislikedVideosList, setDislikedVideosList] = useState([])
  const [isPopupOpened, setIsPopupOpened] = useState(false)

  const changeTheme = () => setIsDarkTheme(prev => !prev)

  const onClosedPremiumView = () => setBuyPremiumShow(false)

  const addSaveVideoToList = obj => {
    const isPresentInList = savedVideosList.some(each => each.id === obj.id)
    if (isPresentInList) {
      const filteredList = savedVideosList.filter(each => each.id !== obj.id)
      setSavedVideosList(filteredList)
    } else {
      setSavedVideosList(prev => [...prev, obj])
    }
  }

  const addLikedVideosToList = id => {
    const includesId = likedVideosList.some(each => each === id)
    const filteredDislikedVideosList = dislikedVideosList.filter(
      each => each !== id,
    )
    if (includesId) {
      setLikedVideosList(prev => prev.filter(each => each !== id))
    } else {
      setLikedVideosList(prev => [...prev, id])
      setDislikedVideosList(filteredDislikedVideosList)
    }
  }

  const addDislikedVideosToList = id => {
    const includesId = dislikedVideosList.some(each => each === id)
    const filteredLikedVideosList = likedVideosList.filter(each => each !== id)
    if (includesId) {
      setDislikedVideosList(filteredLikedVideosList)
    } else {
      setDislikedVideosList(prev => [...prev, id])
      setLikedVideosList(filteredLikedVideosList)
    }
  }

  const onPopupOpened = () => setIsPopupOpened(true)
  const onPopupClosed = () => setIsPopupOpened(false)

  return (
    <NxtContext.Provider
      value={{
        isPopupOpened,
        isDarkTheme,
        buyPremiumShow,
        savedVideosList,
        likedVideosList,
        dislikedVideosList,
        changeTheme,
        closedPremiumView: onClosedPremiumView,
        addSaveVideoToList,
        addLikedVideosToList,
        addDislikedVideosToList,
        onPopupClosed,
        onPopupOpened,
      }}
    >
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/videos/:id" component={Video} />
        <ProtectedRoute exact path="/trending" component={TrendingVideos} />
        <ProtectedRoute exact path="/gaming" component={GamingVideos} />
        <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
        <Route path="/bad-path" component={NotFound} />
        <Redirect to="/bad-path" />
      </Switch>
    </NxtContext.Provider>
  )
}

export default App
