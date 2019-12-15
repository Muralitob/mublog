import React, { Component } from 'react'
import Parallax from 'parallax-js'
import $ from 'jquery'
import './Header.scss';
import muraPlayer from '../../helpers/player'
import MenuBar from '../MenuBar/MenuBar'
import Loading from '../Loading'
let parallaxInstance = null

export default class Header extends Component {
  componentDidMount() {
    this.readState()
  }
  music2 = () => {
    $("html,body").animate({ scrollTop: $('body').offset().top }, 200);
    //暂停动画和阿姨压一压
    parallaxInstance.disable()
    muraPlayer.toggle()
    //添加动画效果和播放continueed
    $('.word').removeClass('word-shake')
    $('.word').css('opacity', '1')
    $('.continue-img').addClass('slide-right')
    $('#scene').addClass('filter')
    $('.banner-bg').addClass('filter')
    muraPlayer.player('.end-music')
  }
  readState = () => {
    let mulitImg = [
      'http://muralito.top/bg.jpg',
      'http://muralito.top/continued.png',
      'http://muralito.top/Esidisi.png',
      'http://muralito.top/Wamuu.png',
      'http://muralito.top/Kars.png',
      'http://muralito.top/font-left.png',
      'http://muralito.top/font-center.png',
      'http://muralito.top/font-right.png',
    ];
    let promiseAll = []
    let img = document.getElementsByClassName('cache-img')
    let imgTotal = mulitImg.length;
    for (let i = 0; i < imgTotal; i++) {
      promiseAll[i] = new Promise((resolve, reject) => {
        img[i].src = mulitImg[i]
        img[i].onload = function () {
          //第i张加载完成
          resolve(img[i])
        }
      })
    }
    Promise.all(promiseAll).then((img) => {
      //全部加载完成
      var scene = document.getElementById('scene');
      setTimeout(function() {
        if (scene) {
          muraPlayer.player('.bg-music')
          //播放音乐再加入css
          $('.p').addClass('fadein')
          $('.word').addClass('word-shake')
          parallaxInstance = new Parallax(scene);
        }
      },1000)
    })
  }
  render() {
    return (
      <div className="header">
        <audio className="music bg-music" style={{ display: 'none' }}  controls="controls" loop="1">
          <source src='http://muralito.top/Awake.mp3'></source>
        </audio>
        <audio className="music end-music" style={{ display: 'none' }}>
          <source src='http://muralito.top/Yes.mp3'></source>
        </audio>
        <div className="banner">
          <img alt="jojo" className="cache-img banner-bg" />
          <div className="banner-header" >
            <div>
              <img alt="jojo" src='http://muralito.top/logo.png'></img>
              <MenuBar></MenuBar>
            </div>
          </div>
          {/* <div id="banner-title">
            <h1 data-depth="0.8" >ジョジョ～その血の运命～</h1>
          </div> */}
          <img alt="jojo" className="cache-img continue-img" />
          <ul id="scene">
            <li className="layer" data-depth="0.4">
              <img alt="jojo" className="cache-img p" />
            </li>
            <li className="layer" data-depth="0.8">
              <img alt="jojo" className="cache-img p" />
            </li>
            <li className="layer" data-depth="1">
              <img alt="jojo" className="cache-img p" />
            </li>
            <li className="layer" data-depth="1">
              <img alt="jojo" className="cache-img word word-left" />
            </li>
            <li className="layer" data-depth="0.6">
              <img alt="jojo" className="cache-img word word-center" />
            </li>
            <li className="layer" data-depth="0.9">
              <img alt="jojo" className="cache-img word word-right" />
            </li>
          </ul>
        </div>

        {/* <span className="iconfont icon-laba mute-btn"></span> */}
        {/* <span style={{fontSize: '35px'}} className="iconfont icon-paixujiantouxia godown"></span> */}
        <svg onClick={function () {
          $("html,body").animate({ scrollTop: $('.main').offset().top }, 800);
        }} className="godown cursor icon" style={{ fontSize: "48px" }} t="1572851261151" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="933" width="48" height="48"><path d="M873.97913671 462.09351774l-322.38766862 361.97913671c-21.68104205 24.50900404-59.38720211 24.50900404-80.12559018 0L149.07820927 462.09351774C117.97062722 427.21531966 142.47963126 371.59873356 189.61233136 371.59873356l644.77533728 0C880.57771473 371.59873356 906.02937278 427.21531966 873.97913671 462.09351774z" fill="#802f90" p-id="934"></path></svg>
        <svg onClick={this.music2} className="muted cursor icon" t="1572852389535" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1295" width="200" height="200"><path d="M620.6 869.01111111c-13.8 0-25-11.2-25-25v-606c0-13.3-6.5-21.7-12.5-25.2-4.8-2.7-9.7-2.7-14.6 0.2L364.6 334.61111111c-18.5 11-39.3 16.8-60.1 16.8H162.8c-23.6 0-42.9 24.3-42.9 54.2v229.6c0 29.9 19.2 54.2 42.9 54.2h141.7c20.9 0 41.7 5.8 60.1 16.8l161 96c11.9 7.1 15.7 22.4 8.7 34.3-7.1 11.9-22.4 15.7-34.3 8.7l-161-96c-10.7-6.4-22.7-9.8-34.5-9.8H162.8c-25.5 0-49.3-11.3-67-32-16.7-19.5-25.9-45.2-25.9-72.3V405.71111111c0-27.1 9.2-52.8 25.9-72.3 17.6-20.6 41.4-32 67-32h141.7c11.9 0 23.8-3.4 34.5-9.8L542.9 170.11111111c20.2-12.1 44.5-12.3 64.9-0.8 23.3 13.3 37.8 39.5 37.8 68.6v606c0 13.9-11.2 25.1-25 25.1zM850.7 749.51111111c-6.4 0-12.8-2.4-17.7-7.3-9.8-9.8-9.8-25.6 0-35.4 102.7-102.7 102.7-269.9 0-372.6-9.8-9.8-9.8-25.6 0-35.4 9.8-9.8 25.6-9.8 35.4 0 59.2 59.2 91.8 137.9 91.8 221.7S927.5 682.91111111 868.3 742.11111111c-4.8 4.9-11.2 7.4-17.6 7.4z" fill="#d4237a" p-id="1296"></path><path d="M729.5 666.61111111c-6.4 0-12.8-2.4-17.7-7.3-9.8-9.8-9.8-25.6 0-35.4 57-57 57-149.8 0-206.9-9.8-9.8-9.8-25.6 0-35.4 9.8-9.8 25.6-9.8 35.4 0 76.5 76.5 76.5 201.1 0 277.6-4.9 5-11.3 7.4-17.7 7.4z" fill="#d4237a" p-id="1297"></path></svg>
      </div>
    )
  }
}
