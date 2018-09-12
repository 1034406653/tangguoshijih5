let Prevent = {
  flag: true,
  stopTouchendPropagation: function(ev){
    var this_ = this
    console.log('stopTouchendPropagation')
    console.log('stopTouchendPropagation--FLAG--:' + this_.flag)
    ev.stopPropagation();
    setTimeout(function () {
      window.removeEventListener('touchend', Prevent.stopTouchendPropagation, true);
      this_.flag = false;
    }, 50);
  },
  touchListen: function(ev){
    var this_ = this
    console.log('touchListen')
    console.log('touchListen--FLAG--:' + this_.flag)
    this_.flag || (this_.flag = true, window.addEventListener('touchend', Prevent.stopTouchendPropagation, true));
    ev.stopPropagation();
  },
  init() {
    var this_ = this

    if (this.flag === false) {
      console.log('addEventListener')
      console.log('addEventListener--FLAG--:' + this.flag)
      window.addEventListener('touchmove', Prevent.touchListen, false);
    } else if (this.flag === true) {
      console.log('removeEventListener')
      console.log('removeEventListener--FLAG--:' + this.flag)
      window.removeEventListener('touchmove', ()=>{}, false);
    }

    /*function stopTouchendPropagation(ev) {
      console.log('stopTouchendPropagation')
      console.log('stopTouchendPropagation--FLAG--:' + this_.flag)
      ev.stopPropagation();
      setTimeout(function () {
        window.removeEventListener('touchend', stopTouchendPropagation, true);
        this_.flag = false;
      }, 50);
    }*/

    /*function touchListen(ev) {
      console.log('touchListen')
      console.log('touchListen--FLAG--:' + this_.flag)
      this_.flag || (this_.flag = true, window.addEventListener('touchend', stopTouchendPropagation, true));
      ev.stopPropagation();
    }*/

  }
}
export {
  Prevent
}
