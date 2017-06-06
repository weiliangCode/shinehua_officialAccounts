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

    var phone = $('.J_phone').val();
    var reg1 = /^[1][3578][0-9]{9}$/;
    if (!(reg1.test(phone))) {
      $('.J_prompt').css('display', 'block');
      $('.J_message').html('手机号输入有误!')
      return;
    }
    var self = $(this);
    getCodeFlog = false;
    $(this).html('60s');

    //发送验证码
    $.post(getQrCode(), {
      visitor:{
         phone: phone,
      }
    }, function (data) {
      // console.log(data);
    })

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

  //提交表单
  $('.J_submit').on('click', function () {
    var companyName = $('.J_companyName').val();
    var phone = $('.J_phone').val();
    var QRcode = $('.J_QRcode').val();
    var note = $('.J_note').val() ? $('.J_note').val() : 'null';

    var scene = 0;
    $('.J_serve').each(function () {
      if ($(this)[0].checked) {
        scene += parseInt($(this).val());
      }
    });
    console.log(scene);

    if (!companyName) {
      $('.J_prompt').css('display', 'block');
      $('.J_message').html('公司名或联系人不能为空!')
      return;
    }

    var reg1 = /^[1][3578][0-9]{9}$/;
    if (!(reg1.test(phone))) {
      $('.J_prompt').css('display', 'block');
      $('.J_message').html('手机号输入有误!')
      return;
    }

    var reg2 = /^[0-9]{5}$/;
    if (!(reg2.test(QRcode))) {
      $('.J_prompt').css('display', 'block');
      $('.J_message').html('验证码输入有误!')
      return;
    }

    if (!scene) {
      $('.J_prompt').css('display', 'block');
      $('.J_message').html('请至少勾选一种方式!')
      return;
    }

    //提交表单到后台
    $.post(getSubmit(), {
      visitor: {
        name: companyName,
        phone: phone,
        scene: scene,
        note: note,
      },
      "short_code": QRcode
    }, function (data) {
      var obj = JSON.parse(data)
      if (obj.code == '1') {
        $('.J_prompt').css('display', 'block');
        $('.J_message').html('申请提交成功，请保持手机畅通，我们会尽快与您联系！!')
        console.log(obj.message);
      } else {
        if(obj.message == '短信验证码有误!') {
          $('.J_prompt').css('display', 'block');
          $('.J_message').html('短信验证码有误！!')
        } else {
          $('.J_prompt').css('display', 'block');
          $('.J_message').html('申请提交失败，请修改后提交！!')
          console.log(obj.message);
        }
      }
    })
  })

  //关闭提示框
  $('.J_prompt').on('click', function () {
    $('.J_prompt').css('display', 'none');
  })
})