let Prevent = {
  flag: true,
  init() {
    /*this.flag = true*/

    function stopTouchendPropagation(ev) {
      console.log('stopTouchendPropagation')
      console.log('stopTouchendPropagation--FLAG--:' + this.flag)
      ev.stopPropagation();
      setTimeout(function () {
        window.removeEventListener('touchend', stopTouchendPropagation, true);
        this.flag = false;
      }, 50);
    }

    function touchListen(ev) {
      console.log('touchListen')
      console.log('touchListen--FLAG--:' + this.flag)
      this.flag || (this.flag = true, window.addEventListener('touchend', stopTouchendPropagation, true));
    }

    if (this.flag === false) {
      console.log('addEventListener')
      console.log('addEventListener--FLAG--:' + this.flag)
      window.addEventListener('touchmove', touchListen, false);
    } else if (this.flag === true) {
      console.log('removeEventListener')
      console.log('removeEventListener--FLAG--:' + this.flag)
      window.removeEventListener('touchmove', touchListen, false);
    }

    /*if (this.flag === false) {
      window.addEventListener('touchmove', function (ev) {

        /!*console.log('运行了')
        console.log(this.flag)*!/

        this.flag || (this.flag = true, window.addEventListener('touchend', stopTouchendPropagation, true));
      }, false);

    } else if (this.flag === true) {
      window.removeEventListener('touchmove', function (ev) {

        /!*console.log('没运行')
        console.log(this.flag)*!/

        this.flag || (this.flag = true, window.addEventListener('touchend', stopTouchendPropagation, true));
      }, false);
    }*/

  }
}
export {
  Prevent
}
