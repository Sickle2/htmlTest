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


    function  xxx() {
    var name = $("#uname").val();
    var password = $("#password").val()
    var repass = $("#repass").val()
    console.log(name,password,repass)
    $.ajax({
        type: "get",
        dataType: 'html', //接受数据格式
        cache: false,
        url: "/regist.html?uname=" + name + "&password=" + password + "&repass=" + repass,
        success: function (data) {
            //接收返回的数据
                alert(data.toString());

        },
        error: function () {
            //请求出错处理
            alert("Error!");
        }
    });
}
function checkEmail()
{
    var name = $("#uname").val();
    var password = $("#password").val()
    var repass = $("#repass").val()
    if (!isEmail(name))
    {
        alert("xxx");
        document. getElementById_r("name").focus();
        return false;
    }
    return true;
}
function isEmail(str){
    var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
    return reg.test(str)
}