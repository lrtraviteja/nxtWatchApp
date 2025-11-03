import styled from 'styled-components'

export const VideoListItem = styled.li`
  width: 100%;

  @media screen and (min-width: 425px) and (max-width: 768px) {
    width: 47%;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
    flex-grow: 1;
  }
`
export const ChannelLogo = styled.img`
  height: 20px;
`

export const VideoImage = styled.img`
  max-height: 170px;
  width: 100%;
  @media screen and (min-width: 768px) {
    max-height: 190px;
  }
`
export const VideoInfoContainer = styled.div`
  display: flex;
  padding: 7px;
  gap: 10px;
`

export const ProfileImage = styled.img`
  height: 20px;
`
export const VideoInfo = styled.div``

export const VideoTitle = styled.p`
  margin-top: 0px;
  font-size: 11px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const ChannelName = styled.p`
  color: grey;
  font-size: 12px;
  margin-top: 2px;
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
