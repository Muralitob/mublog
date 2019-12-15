import $ from 'jquery'

let muraPlayer = {
  player(target) {
    this.target = target
    let p = $(target)
    p[0].volume = 0.3
    p[0].play()
    p.on({
      'timeupdate': function() {
        $('.bar').css('width', p[0].currentTime / p[0].duration * 100 + '%')
      },
      'pause': function() {
        $('.icon-Pause').removeClass('icon-Pause').addClass('icon-start')
      },
      'playing': function() {
        $('.icon-start').removeClass('icon-start').addClass('icon-Pause')
      }
    })
  },
  toggle() {
    let p = $(this.target)
    if(p[0].paused) {
      p[0].play()
    }else if(p[0].played) {
      p[0].pause()
    }
  },
}

export default muraPlayer