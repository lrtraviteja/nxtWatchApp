// DETAILED VIDEO VIEW FROM HOME
import './index.css'
import {useState, useEffect, useContext} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {CgPlayListAdd} from 'react-icons/cg'

import {BiLike, BiDislike} from 'react-icons/bi'

import {useParams} from 'react-router-dom'
import NxtContext from '../../context/context'

import {
  VideoStats,
  VideoViews,
  VideoPostDate,
  LoaderContainer,
  VideoSectionContainer,
  VideoMainContainer,
  PostLikeContainer,
  LikeDislikeContainer,
  ChannelDetails,
  ChannelIconContainer,
  ChannelImg,
  VideoDescriptionL,
  ChannelDetailsContainer,
  ChannelName,
  ChannelSubscribers,
  //   VideoDescription,
  LikeButton,
  SaveButton,
  FailureViewContainer,
  DislikeButton,
  VideoDetailsViewContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  RetryButton,
  VideoTitle,
  HorizontalLine,
} from './styledComponent'

import Header from '../Header'
import SideBar from '../SideBar'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const Video = () => {
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [videoDetails, setVideoDetails] = useState({})
  const {id} = useParams()
  const {
    isDarkTheme,
    likedVideosList = [],
    savedVideosList = [],
    dislikedVideosList = [],
    addSaveVideoToList,
    addLikedVideosToList,
    addDislikedVideosToList,
  } = useContext(NxtContext)

  const formattedData = data => ({
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
      subscriberCount: data.channel.subscriber_count,
    },
    description: data.description,
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
    title: data.title,
    videoUrl: data.video_url,
    viewCount: data.view_count,
    thumbnailUrl: data.thumbnail_url,
  })

  const getVideoDetails = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const formatted = formattedData(data.video_details)
      setVideoDetails(formatted)
      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  useEffect(() => {
    getVideoDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader
        className="loader-center"
        type="ThreeDots"
        color={isDarkTheme ? '#ffffff' : 'black'}
        height="50"
        width="50"
      />
    </LoaderContainer>
  )

  const renderVideosView = () => {
    const {
      id: vidId,
      videoUrl,
      description,
      title,
      publishedAt,
      viewCount,
      channel,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel || {}

    const isLiked = likedVideosList.includes(vidId)
    const isDisliked = dislikedVideosList.includes(vidId)
    const isSaved = savedVideosList.some(each => each.id === vidId)

    const onLiked = () => addLikedVideosToList(vidId)
    const onDisliked = () => addDislikedVideosToList(vidId)
    const onSaved = () => addSaveVideoToList(videoDetails)

    return (
      <>
        <ReactPlayer className="player-styled" url={videoUrl} controls />
        <VideoTitle>{title}</VideoTitle>
        <PostLikeContainer>
          <VideoStats>
            <VideoViews>{viewCount} views</VideoViews>
            <BsDot color="grey" />
            <VideoPostDate>{publishedAt}</VideoPostDate>
          </VideoStats>
          <LikeDislikeContainer>
            <LikeButton type="button" isLiked={isLiked} onClick={onLiked}>
              <BiLike className="Icon" />
              Like
            </LikeButton>
            <DislikeButton
              type="button"
              isDisliked={isDisliked}
              onClick={onDisliked}
            >
              <BiDislike className="Icon" />
              Dislike
            </DislikeButton>
            <SaveButton type="button" isSaved={isSaved} onClick={onSaved}>
              <CgPlayListAdd className="saveIcon" />
              {isSaved ? 'Saved' : 'Save'}
            </SaveButton>
          </LikeDislikeContainer>
        </PostLikeContainer>
        <HorizontalLine />
        <ChannelDetailsContainer>
          <ChannelIconContainer>
            <ChannelImg src={profileImageUrl} alt="channel logo" />
            <ChannelDetails>
              <ChannelName>{name}</ChannelName>
              <ChannelSubscribers>
                {subscriberCount} subscribers
              </ChannelSubscribers>
              <VideoDescriptionL>{description}</VideoDescriptionL>
            </ChannelDetails>
          </ChannelIconContainer>
        </ChannelDetailsContainer>
      </>
    )
  }

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
      <RetryButton type="button" onClick={getVideoDetails}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )

  const renderVideo = () => {
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
    <VideoMainContainer
      data-testid="videoItemDetails"
      isDarkTheme={isDarkTheme}
    >
      <Header />
      <VideoSectionContainer>
        <SideBar isDarkTheme={isDarkTheme} />
        <VideoDetailsViewContainer>{renderVideo()}</VideoDetailsViewContainer>
      </VideoSectionContainer>
    </VideoMainContainer>
  )
}

export default Video
