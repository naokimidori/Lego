$(function () {

    //种类选择
    $("#productInfo .infoRight .type span").click(function () {
        $(this).toggleClass("on");
        $(this).siblings().removeClass("on");
    })

    //加减
    $("#productInfo .buy .plus").click(function () {
        //获取当前num
        let num = $("#productInfo .buy .buy_num").val();
        num = parseInt(num) + 1;
        $("#productInfo .buy .buy_num").val(num);
    })
    $("#productInfo .buy .reduce").click(function () {
        //获取当前num
        let num = $("#productInfo .buy .buy_num").val();
        num = parseInt(num) - 1;
        if (num < 1) {
            num = 1;
            $("#productInfo .buy .buy_num").val(num);
        } else {
            $("#productInfo .buy .buy_num").val(num);
        }
    })

    //评论
    $("#review #comment .title span").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        let index = $(this).index();
        $("#review #comment .tab").eq(index).show().siblings(".tab").hide();
    })

    //初始化插件
    $("#exzoom").exzoom({
        "navWidth": 60,//列表每个宽度,该版本中请把宽高填写成一样
        "navHeight": 60,//列表每个高度,该版本中请把宽高填写成一样
        "navItemNum": 4,//列表显示个数
        "navItemMargin": 7,//列表间隔
        "navBorder": 1,//列表边框，没有边框填写0，边框在css中修改
        "autoPlay": false,//是否自动播放
        "autoPlayTimeout": 2000,//播放间隔时间、、
    });


})