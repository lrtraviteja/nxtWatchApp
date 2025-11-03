import styled from 'styled-components'

export const VideoMainContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.isDarkTheme ? 'grey' : 'black')};
`

export const VideoSectionContainer = styled.div`
  display: flex;
  min-height: 93vh;
`
export const HorizontalLine = styled.hr`
  width: 100%;
  border-top: 1px solid grey;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 93vh;
  width: 100%;
`

export const VideoTitle = styled.p``

export const PostLikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`
export const LikeDislikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media screen and (min-width: 768px) {
    margin-left: auto;
    gap: 15px;
  }
`
export const LikeContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`
export const LikeDislikeSavePara = styled.p`
  margin: 0px;
`

export const SaveContainer = styled(LikeContainer)``
export const ChannelDetails = styled.div`
  display: flex;
  gap: 7px;
  flex-direction: column;
`

export const ChannelSubscribers = styled.p`
  margin: 0px;
  color: grey;
`
export const ChannelIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding-top: 5px;
`
export const ChannelImg = styled.img`
  height: 40px;
`

export const ChannelInfoContainer = styled.div`
  @media screen and (min-width: 768px) {
  }
`

export const VideoDescription = styled.p`
  margin-top: 3px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const VideoDescriptionL = styled.p`
  margin-top: 3px;
  color: grey;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 5px;
`

export const LikeButton = styled.button`
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const DislikeButton = styled.button`
  width: 90px;
  color: ${props => (props.isDisliked ? '#2563eb' : '#64748b')};
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const SaveButton = styled.button`
  width: 90px;
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  gap: 8px;
`
export const VideoStats = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 0px 5px 10px 0px;
  @media screen and (min-width: 768px) {
    padding: 5px 5px 5px 0px;
    gap: 4px;
  }
`
export const VideoDetailsViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  min-height: 93vh;
  @media screen and (min-width: 768px) {
    padding: 20px;
    width: 80%;
  }
`

export const FailureImg = styled.img`
  height: 130px;
  @media screen and (min-width: 768px) {
    height: 150px;
  }
`
export const FailureHeading = styled.h1`
  //   font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 0px;
`
export const FailurePara = styled.p`
  text-align: center;
`
export const RetryButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  color: white;
  font-size: 15px;
  background-color: #3634a5;
  padding: 10px;
  width: 100px;
  border-radius: 5px;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px 40px;
  @media screen and (min-width: 768px) {
    padding: 10px 40px;
    min-height: 93vh;
  }
`
export const ChannelName = styled.p`
  margin: 0px;
  color: grey;
`

export const VideoViews = styled.p`
  margin: 0px;
  color: grey;
  font-size: 10px;
`

export const VideoPostDate = styled.p`
  margin: 0;
  color: grey;
  font-size: 10px;
`
