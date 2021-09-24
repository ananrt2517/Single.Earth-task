import { ReactElement } from 'react';
import styled from 'styled-components'

function Home(): ReactElement {
  return (
    <div>
      <StyledDiv>See Chuck Noris jokes clicking on tabs above!</StyledDiv>
      <StyledImg src="https://imgflip.com/s/meme/Chuck-Norris-Guns.jpg"/>
    </div>
  )
}

export default Home

const StyledImg = styled.img`
  width: 100%;
`
const StyledDiv = styled.div`
  position: absolute;
  top: 120px;
  font-size: 20px;
  font-weight: 900;
  color: white;
  left: 20px;
`