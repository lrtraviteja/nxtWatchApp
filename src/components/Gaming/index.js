import {useState, useEffect, useContext} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'

import GamingVideoItem from '../GamingVideoItem'
import Header from '../Header'
import NxtContext from '../../context/context'
import SideBar from '../SideBar'

import {
  GamingVideosList,
  FailureViewContainer,
  MainGamingPage,
  LoaderContainer,
  GamingVideosSection,
  MainContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  RetryButton,
  GamingVideoHeader,
  GamingIconContainer,
  GamingTitle,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const GamingVideos = () => {
  const [videosList, setVideosList] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const {isDarkTheme} = useContext(NxtContext)

  const getFormattedData = data => ({
    id: data.id,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
    isSaved: false,
  })

  const getGamingVideos = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const videosData = data.videos.map(each => getFormattedData(each))
      setVideosList(videosData)
      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  useEffect(() => {
    getGamingVideos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDarkTheme ? '#ffffff' : 'black'}
        height="50"
        width="50"
      />
    </LoaderContainer>
  )

  const renderVideosView = () => (
    <GamingVideosList>
      {videosList.map(each => (
        <GamingVideoItem key={each.id} video={each} />
      ))}
    </GamingVideosList>
  )

  const renderFailureView = () => (
    <FailureViewContainer>
      <FailureImg
        src={
          isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailurePara>
        We are having some trouble to complete your request. Please try again.
      </FailurePara>
      <RetryButton type="button" onClick={getGamingVideos}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )

  const renderVideos = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderVideosView()
      case apiStatusConstants.failure:
        return renderFailureView()
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      default:
        return null
    }
  }

  return (
    <MainGamingPage isDarkTheme={isDarkTheme} data-testid="gaming">
      <Header />
      <MainContainer>
        <SideBar isDarkTheme={isDarkTheme} />
        <GamingVideosSection>
          <GamingVideoHeader isDarkTheme={isDarkTheme}>
            <GamingIconContainer isDarkTheme={isDarkTheme}>
              <SiYoutubegaming className="siYoutubegaming" color="red" />
            </GamingIconContainer>
            <GamingTitle>Gaming</GamingTitle>
          </GamingVideoHeader>
          {renderVideos()}
        </GamingVideosSection>
      </MainContainer>
    </MainGamingPage>
  )
}

export default GamingVideos
