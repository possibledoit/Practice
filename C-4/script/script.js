$(function() {

    // 슬라이드
    function slide() {
        $(".slide ul").animate({left:"-800px"},1000,function() {
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({left:0})
        })
    }
    setInterval(slide, 3000)

    // 키보드이벤트메뉴
    $("nav>ul>li").focusin(function() {
        $(this).children(".sub").stop().fadeIn();
        $(this).addClass("on");
    })
    $("nav li li:last-child").focusout(function() {
        $("nav>ul>li").removeClass("on");
        $(".sub").fadeOut()
    })

    // 메뉴
    $("nav > ul > li").mouseenter(function() {
        $(this).children(".sub").stop().fadeIn();
    })
    $("nav>ul>li").mouseleave(function() {
        $(".sub").stop().fadeOut();
    })

    // 팝업창
    $(".pp").click(function() {
        $(".popup").show();
        return false; //링크차단
    })
    $("button").click(function() {
        $(".popup").hide();
    })
})