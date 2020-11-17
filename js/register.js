var code;
var flag1 = 0, flag2 = 0, flag3 = 0, flag4 = 0, flag5 = 0;
var zmnumReg = /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/
var zmzwReg = /^[\u4E00-\u9FA5]|[A-Za-z]+$/;

function border(id) {
    var input = document.getElementById(id);
    input.style.border = '1px solid rgb(7, 206, 186)'
}

window.onload = function () {
    createcode();
}

function createcode() {
    code = "";
    var codeLength = 4;
    var checkcode = document.getElementById("checkcode");
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    for (var i = 0; i < codeLength; i++) {
        var charIndex = Math.floor(Math.random() * 36);
        code += random[charIndex];
    }
    checkcode.value = code;
}

function isUsername(obj, id) {
    var msg = document.getElementById("msg");
    var input = document.getElementById(id);
    input.style.border = '1px solid #ccc'
    if (obj.length == 0 || !zmnumReg.test(obj)) {
        msg.innerHTML = "*请输入正确的用户名";
        flag1 = 0;
    }
    else {
        msg.innerHTML = "";
        flag1 = 1;
    }
}

function isNickname(obj, id) {
    var msg = document.getElementById("msg");
    var input = document.getElementById(id);
    input.style.border = '1px solid #ccc'
    if (obj.length == 0 || !zmzwReg.test(obj)) {
        msg.innerHTML = "*请输入正确的昵称";
        flag2 = 0;
    }
    else {
        msg.innerHTML = "";
        flag2 = 1;
    }
}

function isUserpwd(obj, id) {
    var msg = document.getElementById("msg");
    var input = document.getElementById(id);
    input.style.border = '1px solid #ccc'
    if (obj.length < 6) {
        msg.innerHTML = "*请输入6~16位的密码";
        flag3 = 0;
    }
    else {
        msg.innerHTML = "";
        flag3 = 1;
    }
}

function isConfirmpwd(obj, id) {
    var msg = document.getElementById("msg");
    var input = document.getElementById(id);
    input.style.border = '1px solid #ccc'
    var userpwd = document.getElementById("userpwd").value;
    if (obj.length == 0) {
        msg.innerHTML = "*请确认密码";
        flag4 = 0;
    }
    else if (obj.length > 0 && (obj != userpwd)) {
        msg.innerHTML = "*两次输入的密码不一致";
        flag4 = 2;
    }
    else {
        msg.innerHTML = "";
        flag4 = 1;
    }
}

function isVerify(obj, id) {
    var msg = document.getElementById("msg");
    var input = document.getElementById(id);
    input.style.border = '1px solid #ccc'
    var verifycode = document.getElementById("verifycode").value.toUpperCase();
    if (verifycode.length == 0) {
        msg.innerHTML = "*请输入正确的验证码";
        flag5 = 0;
    }
    else if (verifycode != code) {
        msg.innerHTML = "*验证码错误";
        flag5 = 2;
    }
    else {
        msg.innerHTML = "";
        flag5 = 1;
    }
}

function isRegister() {
    var msg = document.getElementById("msg");
    if (flag1 == 0) {
        msg.innerHTML = "*请输入正确的用户名";
        window.event.returnValue = false;
    }
    else if (flag2 == 0) {
        msg.innerHTML = "*请输入正确的昵称";
        window.event.returnValue = false;
    }
    else if (flag3 == 0) {
        msg.innerHTML = "*请输入6~16位的密码";
        window.event.returnValue = false;
    }
    else if (flag4 == 0) {
        msg.innerHTML = "*请确认密码";
        window.event.returnValue = false;
    }
    else if (flag4 == 2) {
        msg.innerHTML = "*两次输入的密码不一致";
        window.event.returnValue = false;
    }
    else if (flag5 == 0) {
        msg.innerHTML = "*请输入正确的验证码";
        window.event.returnValue = false;
    }
    else if (flag5 == 2) {
        msg.innerHTML = "*验证码错误";
        window.event.returnValue = false;
    }
    else {
        var success = document.getElementById("success");
        success.style.opacity = '1';
        success.style.transition = 'all 0.2s ease-in'
        success.style.marginTop = '0px'
        window.event.returnValue = false;
        function go() {
            window.location.href = "login.html";
            window.event.returnValue = false;
        }
        setTimeout(go, 1000);
    }
}