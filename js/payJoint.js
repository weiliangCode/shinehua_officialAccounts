$(function () {
  $('.J_stair').on('click', 'li', function () {
    $(this).addClass('active').siblings().removeClass('active');
    var num = parseInt($(this).attr("data"));
    $('.J_sub ul').eq(num).css("display", "block").siblings().css("display", "none");
  })

  //获得验证码
  var getCodeFlog = true;
  $('.J_getCode').on('click', function () {
    if (!getCodeFlog) {
      return;
    }
    var self = $(this);
    getCodeFlog = false;
    $(this).html('60s');

    var time_num = 60;
    var time = setInterval(function () {
      time_num--;
      if (time_num < 0) {
        getCodeFlog = true;
        clearInterval(time);
        self.html('获取验证码');
      } else {
        self.html(time_num + 's');
      }
    }, 1000)

  })

})