import styled from 'styled-components'

export const VideoItem = styled.li`
  width: 100%;
`
export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
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

export const VideoThumbnail = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 320px;
  }
`
export const VideoTitle = styled.p`
  margin: 3px 0px;
  font-size: 17px;
  font-weight: 600;

  @media screen and (min-width: 1024px and max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin: 8px 0px;
  }
`

export const TrendingVideosStats = styled.div``

export const ChannelName = styled.p`
  margin: 4px 0px;
  font-size: 16px;

  @media screen and (min-width: 768px) {
    margin: 8px 0px;
    font-size: 20px;
  }
`
export const TrendingVideoPostDate = styled.p`
  margin: 4px 0px;
  font-size: 16px;

  @media screen and (min-width: 768px) {
    margin: 8px 0px;
    font-size: 18px;
  }
`
export const TrendingVideoViews = styled.p`
  font-size: 16px;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
