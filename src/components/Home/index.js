import {useState, useEffect, useContext} from 'react'
import './index.css'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiSearchAlt2} from 'react-icons/bi'
import {formatDistanceToNow} from 'date-fns'
import NxtContext from '../../context/context'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'

import BuyPremiumView from '../BuyPremiumView'

import {
  MainContainer,
  VideoListUl,
  HomeSection,
  SearchButton,
  SearchContainer,
  SearchInput,
  VideosSection,
  MainHomePage,
  FailureViewContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  RetryButton,
  LoaderContainerH,
  FailureSearchImg,
  ShowNoResultsViewContainer,
  SearchFailureHeading,
  SearchFailurePara,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const Home = () => {
  const [searchedInput, setSearchedInput] = useState('')
  const [videosList, setVideosList] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [showNoResults, setShowNoResults] = useState(false)
  const {isDarkTheme, buyPremiumShow} = useContext(NxtContext)

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
    viewCount: data.view_count,
    isSaved: false,
  })

  const getHomePageData = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchedInput}`
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
    getHomePageData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const retried = () => {
    getHomePageData()
  }

  const showNoResultsView = () => (
    <ShowNoResultsViewContainer>
      <FailureSearchImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <SearchFailureHeading>No Search results found</SearchFailureHeading>
      <SearchFailurePara>
        Try different key words or remove search filter
      </SearchFailurePara>
      <RetryButton
        className="retry-button"
        data-testid="retry"
        type="button"
        onClick={retried}
      >
        Retry
      </RetryButton>
    </ShowNoResultsViewContainer>
  )

  const renderFailureView = () =>
    showNoResults ? (
      showNoResultsView()
    ) : (
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
        <RetryButton
          className="retry-button"
          type="button"
          data-testid="retry"
          onClick={getHomePageData}
        >
          Retry
        </RetryButton>
      </FailureViewContainer>
    )

  const renderLoadingView = () => (
    <LoaderContainerH data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDarkTheme ? '#ffffff' : '#0f0f0f'}
        height="50"
        width="50"
      />
    </LoaderContainerH>
  )

  const renderVideosView = () =>
    videosList.length === 0 ? (
      showNoResultsView()
    ) : (
      <VideoListUl>
        {videosList.map(each => (
          <VideoItem key={each.id} video={each} />
        ))}
      </VideoListUl>
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

  const onChangeSearchInput = event => setSearchedInput(event.target.value)
  const onSearched = () => getHomePageData()

  return (
    <MainHomePage data-testid="home" isDarkTheme={isDarkTheme}>
      <Header />
      <MainContainer>
        <SideBar isDarkTheme={isDarkTheme} />
        <HomeSection>
          {buyPremiumShow && <BuyPremiumView />}
          <VideosSection>
            <SearchContainer isDarkTheme={isDarkTheme}>
              <SearchInput
                value={searchedInput}
                type="search"
                placeholder="Search"
                onChange={onChangeSearchInput}
              />
              <SearchButton
                type="button"
                className="searchButton"
                data-testid="searchButton"
                onClick={onSearched}
              >
                <BiSearchAlt2 color="grey" />
              </SearchButton>
            </SearchContainer>
            {renderVideos()}
          </VideosSection>
        </HomeSection>
      </MainContainer>
    </MainHomePage>
  )
}

export default Home
