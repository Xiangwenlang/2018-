// 检测邮箱
let checkEmail = (str) =>{
    var re = /^([a-zA-Z0-9_-]\.?)+@([a-z-]+)\.([a-z\.]+)$/
    console.log(re.test(str))
}    


// 监测手机号

let checkMobil = (s) =>{
  var str=/^((\+86)|(86))?(-?1\d{2})(-?\d{4}-?\d{4})$/;
  console.log(str.test(s))
}