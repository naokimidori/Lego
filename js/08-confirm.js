$(function () {
    $("#orderInfo .ways span").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
    })

    //点确认按钮执行的动作
    $(document).on('confirmation', '.remodal', function () {
        location.href="./07-payment.html";
    });



})