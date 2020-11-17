window.onload = function () {
    //获取用户信息
    var url = location.search;
    var theRequest = new Array();
    var shopping = this.document.getElementById('shopping')
    var user = this.document.getElementById('user')
    var usertab = this.document.getElementById('userTab')
    var user_name = this.document.getElementById('user-name')
    var car = this.document.getElementById('car')

    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[i] = strs[i].split("=")[1];
        }
        user.style.display = 'block'
        shopping.style.display = 'block'
        visitor.style.display = 'none'
        user_name.innerHTML = theRequest[0]
        $('#shopping a').attr('href', './shopping.html?username=' + theRequest[0])
    }
    else {
        user.style.display = 'none'
        shopping.style.display = 'none'
        visitor.style.display = 'block'
        car.remove()
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

    //加入购物车
    var add = $('.add')
    var adddetail = $('#det')
    var car = $('#car')

    function move() {
        car.css("left", "1050px")
        car.css("top", "45px")
        car.css("width", "25px")
        car.css("height", "25px")
        car.css("opacity", "0.3")
    }

    function appear() {
        car.css("display", "block")
    }

    function disappear() {
        car.css("display", "none")
    }

    function moveback() {
        car.css("left", "1020px")
        car.css("top", "300px")
        car.css("width", "40px")
        car.css("height", "40px")
        car.css("opacity", "0.9")
    }

    add.click(function () {
        setTimeout(appear, 10)
        setTimeout(move, 50)
        setTimeout(disappear, 780)
        setTimeout(moveback, 800)
        $('#shopping a').attr('href', './shopping.html?username=' + theRequest[0] + '&add=1')
    })

    //显示专家资料区域
    var expertInfo = this.document.getElementById('expertinfo')
    var expert = document.getElementById('expert')

    expert.onmouseover = function () {
        expertInfo.style.display = 'block'
    }

    expert.onmouseout = function () {
        expertInfo.style.display = 'none'
    }
}