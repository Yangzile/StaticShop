window.onload = function () {
    //获取用户信息
    var url = location.search;
    var theRequest = new Array();
    var shopping = this.document.getElementById('shopping')
    var user = this.document.getElementById('user')
    var usertab = this.document.getElementById('userTab')
    var visitor = this.document.getElementById('visitor')
    var user_name = this.document.getElementById('user-name')

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
        $('.zeroBasis a').attr('href', './commodityInfo.html?username=' + theRequest[0])
        $('.workPromote a').attr('href', './commodityInfo.html?username=' + theRequest[0])
        $('#newCourse a').attr('href', './commodityInfo.html?username=' + theRequest[0])
        $('.studyPath a').attr('href', './commodityInfo.html?username=' + theRequest[0])
        $('#hotCourse a').attr('href', './commodityInfo.html?username=' + theRequest[0])
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

    //新上好课、热门课程、学习路线板块的动画特效
    var new_a = $('#newCourse>a');
    var hot_a = $('#hotCourse>a');
    var path_a = $('#studyPath a');

    for (let i in new_a) {
        new_a[i].onmouseover = function () {
            var a_h4 = $(new_a[i]).find('h4');
            a_h4.css("color", "green")
        }
        new_a[i].onmouseout = function () {
            var a_h4 = $(new_a[i]).find('h4');
            a_h4.css("color", "#2214c4")
        }
    }

    for (let i in hot_a) {
        hot_a[i].onmouseover = function () {
            var a_h4 = $(hot_a[i]).find('h4');
            a_h4.css("color", "green")
        }
        hot_a[i].onmouseout = function () {
            var a_h4 = $(hot_a[i]).find('h4');
            a_h4.css("color", "#2214c4")
        }
    }

    for (let i in path_a) {
        path_a[i].onmouseover = function () {
            var a_h4 = $(path_a[i]).find('h4');
            var a_img = $(path_a[i]).find('img');
            a_h4.css("color", "red")
            a_img.css("margin-top", "20px")
            a_img.css("box-shadow", "0px 5px 8px 0px #d8fcee")
        }
        path_a[i].onmouseout = function () {
            var a_h4 = $(path_a[i]).find('h4');
            var a_img = $(path_a[i]).find('img');
            a_h4.css("color", "rgb(31,31,31)")
            a_img.css("margin-top", "25px")
            a_img.css("box-shadow", "none")
        }
    }

    //轮播图
    var posters = $('#poster img');
    var arrow_pre = document.querySelector('.arrow_pre');
    var arrow_next = document.querySelector('.arrow_next');
    var dots = $('.dots li');
    var banner = this.document.querySelector(".home_banner");

    var index = 0;
    var timer = null;

    function toActive(index) {
        for (var i = 0; i < posters.length; i++) {
            posters[i].className = ''
            dots[i].className = ''
        }
        posters[index].className = 'active'
        dots[index].className = 'activedot'
    }

    for (let i in dots) {
        dots[i].onclick = function () {
            index = i;
            toActive(i);
        }
    }

    arrow_next.onclick = function () {
        if (index == posters.length - 1) {
            index = 0;
            toActive(index);
        } else {
            index++;
            toActive(index);
        }
    }

    arrow_pre.onclick = function () {
        if (index == 0) {
            index = posters.length - 1;
            toActive(index);
        } else {
            index--;
            toActive(index);
        }
    }

    function auto() {
        timer = setInterval(function () {
            arrow_next.onclick();
        }, 3000);
    }

    banner.onmouseenter = function () {
        clearInterval(timer);
    }

    banner.onmouseleave = function () {
        auto();
    }

    auto();



    //学习路线选项卡
    var tabs = $('.sp_tab li')
    var tabconts = $('.tab-cont>div')

    for (let i in tabs) {
        tabs[i].onclick = function () {
            for (var j = 0; j < tabs.length; j++) {
                tabs[j].className = ''
                tabconts[j].style.display = 'none'
            }
            this.className = 'selected'
            tabconts[i].style.display = 'block'
        }
    }

    //侧边栏
    var imgs = $('.home_sidebar img')
    var spans = $('.home_sidebar span')


    for (let i in imgs) {
        imgs[i].onmouseover = function () {
            this.style.display = 'none'
            spans[i].style.display = 'block'
        }
        spans[i].onmouseout = function () {
            this.style.display = 'none'
            imgs[i].style.display = 'block'
        }
    }

    var height = 1000;

    $(window).scroll(function () {
        if ($(window).scrollTop() > height) {
            $(".backtop").show();
        } else {
            $(".backtop").hide();
        }
    });


    spans[2].onclick = function () {
        $('html').animate({ scrollTop: 0 }, 500);
    }

}