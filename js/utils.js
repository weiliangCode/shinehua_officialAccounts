var dev = "true",
  devUrl = "http://localhost/shinehua_officialAccounts/serve/",
  // devUrl = "http://shinehua.duapp.com/saver/",
  url = "http://demo.lmqde.com/";


//获得验证码
function getQrCode() {
  if (dev === "true")
    return devUrl + 'visitor/sendcode.php';
  else
    return url + 'visitor/sendcode'
}


//提交表单数据
function getSubmit() {
  if (dev === "true")
    return devUrl + 'visitor/getfrom.php';
  else
    return url + 'visitor/getfrom'
}


