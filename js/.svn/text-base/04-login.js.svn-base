$(function(){
    //登录方式切换
    $("#login .banner .loginBox span").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        let index = $(this).index();
        $("#login .banner .loginBox .change").eq(index).addClass("active").siblings().removeClass("active");
    })
    //二维码动画
    $("#login .codeBox .logindiv").hover(function(){
        $("#loginCode").stop(true,true).animate({"left":"35px"},function(){
            $("#loginPhone").stop(true,true).fadeIn();
        })

    },function(){
        $("#loginPhone").stop(true,true).fadeOut(function(){
            $("#loginCode").stop(true,true).animate({"left":"100px"});
        })
    })

})