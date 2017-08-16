/**
 * Created by sickle on 17-8-15.
 */
// var req = new XMLHttpRequest();
// function queryInfos() {
//     //设置传送方式，对应的servlet或action路径，是否异步处理
//     req.open("POST", "/info/queryinfos", true);
//     //如果设置数据传送方式为post，则必须设置请求头信息
//     req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     //设置回调函数，当前操作完成后进行的操作
//     req.onreadystatechange = callback;
//
//     //Ajax请求发送的数据不是表单，需要拼接数据，格式和get方式一样
//     var reqData = "ip=" + document.getElementById("ip").value;
//     reqData += "&addr=" + document.getElementById("addr").value;
//     reqData += "&time=" + document.getElementById("time").value;
//     reqData += "&times=" + document.getElementById("times").value;
//
//     //发送请求
//     req.send(reqData);
// }

// console.log(name,password,repass)
// $.ajax({
//     type: "get",
//     dataType: 'html', //接受数据格式
//     cache: false,
//     url: "/regist.html?uname=" + name + "&password=" + password + "&repass=" + repass,
//     success: function (data) {
//         //接收返回的数据
//             alert("注册成功！");
//
//     },
//     error: function () {
//         //请求出错处理
//         alert("Error!");
//     }
// });
    function  xxx() {
    var name = $("#uname").val();
    var password = $("#password").val()
    var repass = $("#repass").val()
    if(name=="123456@qq.com"){
        alert("已经注册过该账户！");
    }
    if(password!=repass){
        alert("两次密码输入不一样！")
    }
    else{
        $("#l2").html("&radic;");
        $("#l3").html("&radic;");
    }
}
function checkEmail()
{
    var name = $("#uname").val();
    var password = $("#password").val()
    var repass = $("#repass").val()
    if (!isEmail(name))
    {
        alert("您输入的邮箱有误,请重新核对后再输入!");

        return false;
    }
// &radic;
    else{
        var ll1=$("#l1")
        $(ll1).html("&radic;")
        return true;
    }

}
function isEmail(str){
    var reg = /^\w+@\w+(\.\w+)+|[0-9]{6,11}$/;
    return reg.test(str)
}
