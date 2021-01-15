import React, { useCallback, useEffect, useState } from 'react'
import Soundfont from 'soundfont-player';
import styled from 'styled-components'
import Keys from './keys'

const Keyboard = () => {
  const [pianoSound, setPianoSound] = useState<any>(null)
  const playFn = useCallback((key: string) => {
    pianoSound.play(key)
  },[pianoSound])

  const stopFn = useCallback((key: string) => {
    pianoSound.stop()
  },[pianoSound])

  useEffect(() => {
    Soundfont.instrument(new AudioContext(), 'acoustic_grand_piano').then(function (piano) {
      setPianoSound(piano)
    })
  }, [])
  return (
    <Wrapper>
      <Keys play={playFn} stop={stopFn}/>
    </Wrapper>
  )
}

export default Keyboard

const Wrapper = styled.section`
  width: 100%;
  max-width: 1080px;
  height:18.875em;
  margin:5em auto;
  padding:3em 3em 0 3em;
  position:relative;
  border:1px solid #160801;
  border-radius:1em;
  background:linear-gradient(to bottom right,rgba(0,0,0,0.3),rgba(0,0,0,0)), url(/keyboard-app/build/vwood.png);
  box-shadow:0 0 50px rgba(0,0,0,0.5) inset,0 1px rgba(212,152,125,0.2) inset,0 5px 15px rgba(0,0,0,0.5)
`
