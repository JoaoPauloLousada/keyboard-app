import React from 'react'
import styled from 'styled-components'
import Key from './key'
import keysData from './keysData'

type Props = {
  play: Function,
  stop: Function
}

const keys = ({ play, stop }: Props) => {
  return (
    <Wrapper>
      {keysData.map(key => 
        <Key
          tone={key.tone}
          value={key.value}
          color={key.color}
          play={play}
          stop={stop}
          key={key.value}
        />
      )}
    </Wrapper>
  )
}

export default keys

const Wrapper = styled.ul`
  height: 100%;
  position:relative;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  li:first-child {
    border-radius:5px 0 5px 5px
  }

  li:last-child {
    border-radius:0 5px 5px 5px
  }
`