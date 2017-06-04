$(function() {
  var getCodeFlog = true;
  $('.J_getCode').on('click',function() {
    if(!getCodeFlog) {
      return;
    }
    var self = $(this);
    getCodeFlog = false;
    $(this).html('60s');

    //获得验证码
    // $.post("http://demo.lmqde.com/visitor/sendcode",{

    // },function(){

    // })

    var time_num = 60;
    var time = setInterval(function(){
      time_num--;
      if(time_num<0){
        getCodeFlog = true;
        clearInterval(time);
        self.html('获取验证码');
      } else {
        self.html(time_num + 's');
      }
    },1000)
    
  })

// http://demo.lmqde.com/visitor/getfrom
// eg:visitor[name]=xuteng&visitor[phone]=15549494949&visitor[scene]=7&visitor[note]=terqrqwrqwrqwrqwrwqrwrqqwrqwrqwrqwrqwrqw&short_code=123456

  //提交表单
  $('.J_submit').on('click',function() {
    var companyName =  $('.J_companyName').val(); 
    var name =  $('.J_name').val(); 
    var phone =  $('.J_phone').val(); 
    var QRcode = $('.J_QRcode').val(); 
    var price =  $('.J_price').val(); 
    var explain =  $('.J_explain').val(); 


    console.log( companyName );
    console.log( name );
    console.log( phone );
    console.log( QRcode );
    console.log( price );
    console.log( explain );
    console.log( $('.J_serve').eq(0)[0].checked ); 
    console.log( $('.J_serve').eq(1)[0].checked ); 
    console.log( $('.J_serve').eq(2)[0].checked ); 
    console.log( $('.J_serve').eq(3)[0].checked ); 
    console.log( $('.J_serve').eq(4)[0].checked ); 
    console.log( $('.J_serve').eq(5)[0].checked );

    var reg = /^[1][3578][0-9]{9}$/;
    if( !(reg.test(phone)) ) {
      console.log("手机号输入有误")
    }

  })

})