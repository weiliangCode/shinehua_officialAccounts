var dev = "false",
  devUrl = "http://localhost/shinehua_officialAccounts/serve/",
  // devUrl = "http://shinehua.duapp.com/serve/",
  url = "http://demo.lmqde.com/";


//对接渠道 - 获得验证码
function getQrCode() {
  if (dev === "true")
    return devUrl + 'visitor/sendcode.php';
  else
    return url + 'visitor/sendcode'
}


//对接渠道 - 提交表单数据
function getSubmit() {
  if (dev === "true")
    return devUrl + 'visitor/getfrom.php';
  else
    return url + 'visitor/getfrom'
}


//接单 - 获得验证码
function getCompanySendcode() {
  if (dev === "true")
    return devUrl + 'company/sendcode.php';
  else
    return url + 'company/sendcode'
}

//接单 - 提交表单数据
function getCompanyGetfrom() {
  if (dev === "true")
    return devUrl + 'company/getfrom.php';
  else
    return url + 'company/getfrom'
}