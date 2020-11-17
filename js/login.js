
function newborder(id) {
    var input = document.getElementById(id);
    input.style.border = '1px solid #0dc2b3'
}

function border(id) {
    var input = document.getElementById(id);
    input.style.border = '1px solid #ddd'
}

function login() {
    var username = document.getElementById('username').value;
    var userpwd = document.getElementById('userpwd').value;
    var msg = document.getElementById('msg');

    if (username.length == 0) {
        msg.innerHTML = '*请输入用户名'
    }
    else if (userpwd.length == 0) {
        msg.innerHTML = '*请输入密码'
    }
    else if (userpwd.length < 6) {
        msg.innerHTML = '*请输入至少6位的密码'
    }
    else {
        function go() {
            window.location.href = "shopping.html?username=" + username + "&userpwd=" + userpwd;
            window.event.returnValue = false;
        }

        setTimeout(go, 1000);
    }
}

