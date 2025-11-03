import styled from 'styled-components'

export const MainSideBar = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 20%;
    min-height: 93vh;
    flex-direction: column;
    justify-content: space-between;
    flex-shrink: 0;
  }
`

export const SideBarList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin-top: 0px;
`

export const ListItem = styled.li``
// export const LinkEl = styled(Link)`
//   display: flex;
//   align-items: center;
//   padding: 10px;
//   gap: 10px;
//   text-decoration: none;
// `

export const SideBarTitle = styled.p`
  font-weight: 400;
  margin: 0px;
  font-size: 14px;
`

export const ContactIcon = styled.img`
  height: 33px;
`
export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 0;
`
export const ContactSites = styled.div`
  display: flex;
  gap: 12px;
`

export const ParaEl = styled.p`
  text-align: center;
  font-family: 'Roboto';
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 14px;
`
export const FooterNote = styled.p`
  text-align: center;
  font-family: 'Roboto';
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
`
