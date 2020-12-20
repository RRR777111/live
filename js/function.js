'use strict'; {
  $('#btn').on('click', function () {
    $('#top').toggleClass('transTop');
    $('#middle').toggleClass('transMiddle');
    $('#bottom').toggleClass('transBottom');
    $('#gnav').toggleClass('open');
  });
}