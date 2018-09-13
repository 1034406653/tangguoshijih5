let Prevent = {
  flag: true,
  stopTouchendPropagation: function (ev) {
    console.log('stopTouchendPropagation')
    console.log('stopTouchendPropagation--FLAG--:' + Prevent.flag)
    ev.stopPropagation();
    setTimeout(function () {
      window.removeEventListener('touchend', Prevent.stopTouchendPropagation, true);
      Prevent.flag = false;
    }, 50);
  },
  touchListen: function (ev) {
    console.log('touchListen')
    console.log('touchListen--FLAG--:' + Prevent.flag)
    if (Prevent.flag === false) {
      window.addEventListener('touchend', Prevent.stopTouchendPropagation, true)
      Prevent.flag = true
    } else if (Prevent.flag === true) {
      window.removeEventListener('touchend', Prevent.stopTouchendPropagation, false);
    }
    /*Prevent.flag || (Prevent.flag = true, window.addEventListener('touchend', Prevent.stopTouchendPropagation, true));*/
    ev.stopPropagation();
  },
  init() {
    if (Prevent.flag === false) {
      console.log('addEventListener')
      console.log('addEventListener--FLAG--:' + Prevent.flag)
      window.addEventListener('touchmove', Prevent.touchListen, false);
    } else if (Prevent.flag === true) {
      console.log('removeEventListener')
      console.log('removeEventListener--FLAG--:' + Prevent.flag)
      window.removeEventListener('touchmove', Prevent.touchListen, false);
    }
  }
}
export {
  Prevent
}
