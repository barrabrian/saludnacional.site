// ------------------------ PLAYER SETUP ------------------------------


// All rights reserved to Oelez Laniavitá ®
// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];


! function(a) {
  var b = /iPhone/i,
    c = /iPod/i,
    d = /iPad/i,
    e = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
    f = /Android/i,
    g = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
    h =
    /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
    i = /IEMobile/i,
    j = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
    k = /BlackBerry/i,
    l = /BB10/i,
    m = /Opera Mini/i,
    n = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
    o = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
    p = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
    q = function(a, b) {
      return a.test(b)
    },
    r = function(a) {
      var r = a || navigator.userAgent,
        s = r.split("[FBAN");
      return "undefined" != typeof s[1] && (r = s[0]), s = r.split("Twitter"),
        "undefined" != typeof s[1] && (r = s[0]), this.apple = {
          phone: q(b, r),
          ipod: q(c, r),
          tablet: !q(b, r) && q(d, r),
          device: q(b, r) || q(c, r) || q(d, r)
        }, this.amazon = {
          phone: q(g, r),
          tablet: !q(g, r) && q(h, r),
          device: q(g, r) || q(h, r)
        }, this.android = {
          phone: q(g, r) || q(e, r),
          tablet: !q(g, r) && !q(e, r) && (q(h, r) || q(f, r)),
          device: q(g, r) || q(h, r) || q(e, r) || q(f, r)
        }, this.windows = {
          phone: q(i, r),
          tablet: q(j, r),
          device: q(i, r) || q(j, r)
        }, this.other = {
          blackberry: q(k, r),
          blackberry10: q(l, r),
          opera: q(m, r),
          firefox: q(o, r),
          chrome: q(n, r),
          device: q(k, r) || q(l, r) || q(m, r) || q(o, r) || q(n, r)
        }, this.seven_inch = q(p, r), this.any = this.apple.device || this.android
        .device || this.windows.device || this.other.device || this.seven_inch,
        this.phone = this.apple.phone || this.android.phone || this.windows.phone,
        this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet,
        "undefined" == typeof window ? this : void 0
    },
    s = function() {
      var a = new r;
      return a.Class = r, a
    };
  "undefined" != typeof module && module.exports && "undefined" == typeof window ?
    module.exports = r : "undefined" != typeof module && module.exports &&
    "undefined" != typeof window ? module.exports = s() : "function" == typeof define &&
    define.amd ? define("isMobile", [], a.isMobile = s()) : a.isMobile = s()
}(this);

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



// This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player1;

function onYouTubeIframeAPIReady() {
  player1 = new YT.Player('p', {
    height: '',
    width: '720',
    videoId: 'joxkWtMGwik',
    playerVars: {
      'autoplay': 1,
      'controls': 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.setVolume(0);
  event.target.playVideo();
  event.target.seekTo(0, false);
}

//  The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
  console.log(event);
  if (event.data == YT.PlayerState.PLAYING && !done) {

  }
}



function stopVideo() {
  player1.stopVideo();
  player1.destroy();
  document.getElementsByClassName('first-layer')[0].style.display = "none";
  document.getElementById('p').style.display = "none";
}

var progress = document.getElementById('progress-bar');

function updateProgress(player_time, player_duration) {
  let percentage = (100 * player_time) / player_duration;
  if (percentage > 100) {
    percentage = 100;
  }
  if (percentage < 0) {
    percentage = 0;
  }
  if (percentage < 3) { // 27 p
    percentage = percentage * 9;
  } else if (percentage < 10) { // 48 p
    percentage = 27 + ((percentage - 3) * 3);
  } else if (percentage < 50) { // 88 p
    percentage = percentage + 38;
  } else if (percentage >= 50) { // 100 p
    percentage = 88 + (12 * (percentage - 50) / 50);
  }
  progress.style.width = percentage + "%";
}



// ------------------------ CONTROLS ------------------------------



// Change "{}" to your options:
// by Brian Ramirez
const player = new Plyr("#player", {
  type: 'video',
  youtube: {
    noCookie: false,
    rel: 0,
    showinfo: 0,
    iv_load_policy: 3,
    modestbranding: 1,
    autoplay: 1
  },
  controls: ['play-large', 'play', ],
  muted: false,
});

// Expose player so it can be used from the console
window.player = player;

var dnone = true;
player.on('timeupdate', () => {
  player.volume = 1;
  player.muted = false;
  if (player.currentTime > 1595 && dnone) {
    console.log('oi');
    // 1900 secs
    document.getElementById('hid').style.display = "block";
    document.getElementById('hid2').style.display = "block";
    document.getElementById('hid3').style.display = "block";
    dnone = false;
  }
  // updateProgress(player.currentTime, player.duration);


});

player.on('ready', () => {
  player.currentTime = 0;
  player.volume = 1;
  document.getElementsByClassName("plyr__controls")[0].setAttribute(
    "onClick", "player.toggleControls(); player.togglePlay();");
});

var sound = false;

player.on('playing', () => {
  player.volume = 1;
  player.muted = false;
  if (!sound) {
    player.currentTime = 0;
    sound = true;
    if (isMobile.any) {
      setTimeout(() => {
        player.togglePlay();
      }, 300)
      setTimeout(() => {
        player.togglePlay();
      }, 300)
    }
  }
});
