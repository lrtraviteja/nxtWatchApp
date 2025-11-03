import {useState, useEffect, useContext} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {FaFire} from 'react-icons/fa'

import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import TrendingVideoItem from '../TrendingVideoItem'
import NxtContext from '../../context/context'
import SideBar from '../SideBar'

import {
  MainContainer,
  VideosSection,
  MainTrendingVideosPage,
  TrendingVideosList,
  TrendingVideoHeader,
  TrendingTitle,
  LoaderContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  RetryButton,
  FireImgContainer,
  FailureViewContainer,
  TrendingVideosSection,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const TrendingVideos = () => {
  const [videosList, setVideosList] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const {isDarkTheme} = useContext(NxtContext)

  const getFormattedData = data => ({
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
    },
    id: data.id,
    // publishedAt: formatDistanceToNow(new Date(data.published_at)),
    publishedAt: formatDistanceToNow(new Date(data.published_at), {
      addSuffix: true,
    })
      .split(' ')
      .reverse()
      .slice(0, 3)
      .reverse()
      .join(' '),
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    isSaved: false,
    viewCount: data.view_count,
  })

  const getTrendingVideos = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
    getTrendingVideos()
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
    <TrendingVideosList>
      {videosList.map(each => (
        <TrendingVideoItem key={each.id} video={each} />
      ))}
    </TrendingVideosList>
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
      <RetryButton type="button" onClick={getTrendingVideos}>
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
    <MainTrendingVideosPage data-testid="trending" isDarkTheme={isDarkTheme}>
      <Header />
      <MainContainer>
        <SideBar isDarkTheme={isDarkTheme} />
        <TrendingVideosSection>
          <VideosSection>
            <TrendingVideoHeader isDarkTheme={isDarkTheme}>
              <FireImgContainer isDarkTheme={isDarkTheme}>
                <FaFire className="faFire" color="red" />
              </FireImgContainer>
              <TrendingTitle>Trending</TrendingTitle>
            </TrendingVideoHeader>
            {renderVideos()}
          </VideosSection>
        </TrendingVideosSection>
      </MainContainer>
    </MainTrendingVideosPage>
  )
}

export default TrendingVideos
