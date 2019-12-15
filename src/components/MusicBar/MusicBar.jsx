import React, { useEffect } from 'react'
import muraPlayer from '../../helpers/player'
import './MusicBar.scss'
import $ from 'jquery'
import history from '../../helpers/history'
function MusicBar(props) {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    muraPlayer.player('.bg-music')

  })

  function handleScroll(event) {
    let scrollHeight = document.documentElement.scrollTop
    if (scrollHeight >= 200) {
      $('.subtitle').fadeIn("slow", 'linear')
    } else {
      $('.subtitle').fadeOut("slow", 'linear')
    }
  }

  return (
    <div className="music-bar">
      <span className="subtitle">{props.title}</span>
      <div className="bar"></div>
      <span className="cursor logo-icon" onClick={() => {
        history.push('/')
      }}>JOJO</span>
      <span className="cursor iconfont icon-Pause music-pause" onClick={() => {
        muraPlayer.toggle()
      }}></span>
      {/* <audio className="bg-music" preload="auto" controls="controls" loop="1">
        <source src={require('../../assets/Awake.mp3')}></source>
      </audio> */}

      <audio className="end-music" preload="auto" controls="controls" loop="1">
        <source src={require('../../assets/Yes.mp3')}></source>
      </audio>
      <audio className="bg-music" preload="auto" controls="controls" loop="1">
        <source src={require('../../assets/Great Days.mp3')}></source>
      </audio>
    </div>
  )
}
export default MusicBar