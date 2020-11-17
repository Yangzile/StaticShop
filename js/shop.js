window.onload = function () {
    //获取用户信息
    var url = location.search;
    var theRequest = new Array();
    var shopping = this.document.getElementById('shopping')
    var user = this.document.getElementById('user')
    var usertab = this.document.getElementById('userTab')
    var user_name = this.document.getElementById('user-name')

    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[i] = strs[i].split("=")[1];
        }
        user_name.innerHTML = theRequest[0]
        $('#shopping a').attr('href', './shopping.html?username=' + theRequest[0])
        if (theRequest[1] == 1) {
            $('#det').append("<div class='detail-main'><div class= 'commodity-info'><img src='./img/homePage/newlesson2.jpg'><span>【实战课程】Spring Cloud + Vue 前后端分离 开发企业级在线视频课程系统</span></div><div class='commodity-price'><span>￥ <b>328.00</b></span></div><div class='close'><img src='./img/icon/close.jpg'></div></div>")
        }
    }

    user.onmouseover = function () {
        usertab.style.display = 'block'
    }

    user.onmouseout = function () {
        usertab.style.display = 'none'
    }

    usertab.onmouseover = function () {
        usertab.style.display = 'block'
    }

    usertab.onmouseout = function () {
        usertab.style.display = 'none'
    }

    //点击删除商品
    var close = $('.close img')
    var details = $('.detail-main')
    var empty = $('.empty')
    var have = $('.have')
    var price = $('.commodity-price b')
    var totalAcc = $('#totalAccount')
    var total = 0;


    function isEmpty(len) {
        if (len == 0) {
            empty.css("display", "block")
            have.css("display", "none")
        } else {
            empty.css("display", "none")
            have.css("display", "block")
        }
    }

    function totalPrice() {
        var price = $('.commodity-price b')
        total = 0
        for (var i = 0; i < price.length; i++) {
            total = total + parseInt(price[i].innerHTML)
        }
    }

    totalPrice();
    isEmpty(details.length)

    totalAcc.html(total + '.00')

    for (let i in close) {
        close[i].onclick = function () {
            details[i].remove();
            details.length -= 1
            price.length -= 1
            isEmpty(details.length)
            totalPrice();
            totalAcc.html(total + '.00')
        }
    }


}