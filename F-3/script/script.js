$(function() {
    
    // 슬라이드
    function slide() {
        $(".slide ul").animate({left: "-100%"},1000,function() {
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({left: 0})
        })
    }
    setInterval(slide, 3000)

    // 탭메뉴
    let i = 0;
    $(".tabmenu>li").click(function() {
        $(".tabmenu>li").removeClass("on");
        $(this).addClass("on")

        i = $(this).index();
        $(".tabcon").hide();
        $(".tabcon").eq(i).show();
        return false;
    })
    // 메뉴
    $("nav>ul>li").mouseenter(function() {
        $(".sub, .bg").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function() {
        $(".sub, .bg").stop().slideUp();
    })
    // 웹 접근성 메뉴
    $("nav>ul>li").focusin(function() {
        $(".sub, .bg").slideDown();
        $(this).addClass("on")
    })
    $("nav li li:last-child").focusout(function() {
        $("nav>ul>li").removeClass("on")
    })
    $("nav li:last-child li:last-child").focusout(function() {
        $(".sub, .bg").slideUp();
        $("nav>ul>li").removeClass("on")
    })
    // 팝업
    $(".pp").click(function() {
        $(".popup").show();
        return false;
    })
    $("button").click(function() {
        $(".popup").hide();
    })
})