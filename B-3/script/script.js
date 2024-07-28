$(function() {

    // 슬라이드
    function slide() {
        $(".slide ul").animate({top:"-300px"},1000,function() {
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({top:0})
        })
    }
    setInterval(slide, 3000)

    // 팝업
    $(".pp").click(function() {
        $(".popup").show();
        return false;
    })
    $(".close button").click(function() {
        $(".popup").hide();
    })

    // 메뉴
    $("nav>ul>li").mouseenter(function() {
        $(this).find(".sub").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function() {
        $(".sub").stop().slideUp();
    })

    // 메뉴 키보드 이벤트
    $("nav>ul>li").focusin(function() {
        $(this).find(".sub").slideDown();
        $(this).addClass("on");
    })
    $("nav li li:last-child").focusout(function() {
        $("nav>ul>li").removeClass("on");
        $(".sub").slideUp();
    })
})