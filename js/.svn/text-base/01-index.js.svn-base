
$(function () {
    //配置轮播的参数
    $("#banner #boxAnimate").tyslide({
        boxh:450,//盒子的高度
        w:1000,//盒子的宽度
        h:400,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:20,//控制按钮高度
        radius:10,//控制按钮圆角度数
        controlsColor:"#ccc",//普通控制按钮的颜色
        controlsCurrentColor:"#f60",//当前控制按钮的颜色
        isNumber:true //是否需要数字
    });
    //配置轮播的参数
    $("#books .bookSlide").tyslide({
        boxh:218,//盒子的高度
        w:328,//盒子的宽度
        h:216,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:5,//控制按钮高度
        radius:0,//控制按钮圆角度数
        controlsColor:"#fff",//普通控制按钮的颜色
        controlsCurrentColor:"#ffff00",//当前控制按钮的颜色
        isNumber:false //是否需要数字
    });
    //配置轮播的参数
    $(".boxAnimate").tyslide({
        boxh:338,//盒子的高度
        w:425,//盒子的宽度
        h:336,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:5,//控制按钮高度
        radius:0,//控制按钮圆角度数
        controlsColor:"#fff",//普通控制按钮的颜色
        controlsCurrentColor:"#ffff00",//当前控制按钮的颜色
        isNumber:false //是否需要数字
    });

    $("#menu li").hover(function () {
        $(this).find("p").addClass("active");
        $(this).find(".submenu").show();
    },function () {
        $(this).find("p").removeClass("active");
        $(this).find(".submenu").hide();
    })

    //电子书选项卡
    $(".title .tabMenu li").mouseover(function () {
        //鼠标移入显示对应的选项卡
        $(this).addClass("on").siblings().removeClass("on");
        //显示对应的内容
        let index = $(this).index();
        $("#books .middleCon").eq(index).addClass("active").siblings(".middleCon").removeClass("active");
    })

    //电子书的手风琴 排行榜
    $("#books .rankList li").mouseover(function () {
        //隐藏所有的内容
        $("#books .rankList li .bookCon").hide();
        //显示所有的标题
        $("#books .rankList li .bookName").show();
        //隐藏选中li的标题
        $(".bookName",this).hide();
        //显示对应的内容
        $(".bookCon",this).show();
    })

    //推广 选项卡
    $("#popularize .title ul li").hover(function () {
        //给对应的选项卡添加样式
        $(this).addClass("on").siblings().removeClass("on");
        //显示对应页的内容页
        let index = $(this).index();
        $("#popularize .more_page1").eq(index).show().siblings("ul").hide();
    })
    
    //回到顶部
    $("#footer .goTop").click(function () {
        $("html,body").animate({scrollTop:0},800);
    })

    //领券中心
    $("#ticket").hover(function () {
        $("#ticket .icon4").stop(true,false).animate({"right":"40px"})
    },function () {
        $("#ticket .icon4").stop(true,false).animate({"right":"-100px"})
    })

    $(window).scroll(function(){
         let sTop = $("html,body").scrollTop();
        if(sTop>=700){
            $("#layerScroll").fadeIn();
        }else{
            $("#layerScroll").fadeOut();
        }
    })

    //楼层显示
    $("#layerScroll li").hover(function () {
        //显示内容
        $(this).stop(true,false).animate({"width":"40"},200);
        //设置颜色数组
        let colorArr = ["#91d56f","#f65927","#bb9fef","#ff7391","#c2ed51"];
        $(this).css("background-color",colorArr[$(this).index()]);

        //改变图标位置
        $(this).css("background-position-x","-40px")
    },function () {
        $(this).stop(true,false).animate({"width":"0"},200);
        $(this).css("background-color","#f2f2f2");
        $(this).css("background-position-x","0")
    })
    
    //楼层跳转
    $("#layerScroll li").click(function () {
        let index = $(this).index();

        let topVal = $(".layer").eq(index).offset().top;

        $("html,body").animate({"scrollTop":topVal-166},300)
    })

    $(window).scroll(function(){

        let sTop = $("html,body").scrollTop();
        
        if( sTop >= 500 ){
            $("#fixTop").stop(true,false).slideDown(function(){
                $("#search").appendTo("#fixTop")
            });
            
        }else{
            $("#fixTop").stop(true,false).slideUp();
            $("#search").appendTo("#searchBox")
        }
    })










})