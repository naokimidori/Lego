$(function () {
    //配置轮播的参数
    $("#boxAnimate").tyslide({
        boxh: 430,//盒子的高度
        w: 1000,//盒子的宽度
        h: 400,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 20,//控制按钮高度
        radius: 10,//控制按钮圆角度数
        controlsColor: "#ccc",//普通控制按钮的颜色
        controlsCurrentColor: "#f60",//当前控制按钮的颜色
        isNumber: true //是否需要数字
    });

    //热卖畅销
    $("#banner .bannerrank li").mouseover(function () {
        //隐藏全部内容 显示全部书名
        $("#banner .bannerrank li .book_con").hide();
        $("#banner .bannerrank li .book_name").show();
        //隐藏书名
        $(".book_name", this).hide();
        //显示介绍
        $(".book_con", this).show();
    });

    //主编推荐
    $("#newBook .newBookRight .rankList li").mouseover(function () {
        //隐藏所有的内容
        $("#newBook .newBookRight .rankList li .bookCon").hide();
        //显示所有的标题
        $("#newBook .newBookRight .rankList li .bookName").show();
        //隐藏选中li的标题
        $(".bookName",this).hide();
        //显示对应的内容
        $(".bookCon",this).show();

    })
    //配置轮播的参数
    $("#exclusiveSlide").tyslide({
        boxh: 550,//盒子的高度
        w: 1200,//盒子的宽度
        h: 450,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 20,//控制按钮高度
        radius: 10,//控制按钮圆角度数
        controlsColor: "#ccc",//普通控制按钮的颜色
        controlsCurrentColor: "#f60",//当前控制按钮的颜色
        isNumber: true //是否需要数字
    });



})