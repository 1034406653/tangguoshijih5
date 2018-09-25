let Prevent = {
  flag: true,
  stopTouchendPropagation: function (ev) {
    ev.stopPropagation();
    setTimeout(function () {
      console.log('stopTouchend');
      window.removeEventListener('touchend', Prevent.stopTouchendPropagation, true);
      Prevent.flag = false;
    }, 50);
  },
  touchListen: function (ev) {
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
      window.addEventListener('touchmove', Prevent.touchListen, false);
    } else if (Prevent.flag === true) {
      window.removeEventListener('touchmove', Prevent.touchListen, false);
    }
  }
}
export {
  Prevent
}
