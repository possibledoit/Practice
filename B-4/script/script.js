$(function() {
    
    // 슬라이드
    function slide() {
        $(".slide ul").animate({left:"-1200px"},1000,function() {
            $(".slide ul").append($(".slide ul li").first());
            $(".slide ul").css({left:0})
        })
    }
    setInterval(slide, 3000)

    // 메뉴
    $("nav>ul>li").mouseenter(function() {
        $(".sub, .bg").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function() {
        $(".sub, .bg").stop().slideUp();
    })

    // 키보드 메뉴 이벤트
    $("nav>ul>li").focusin(function() {
        $(".sub, .bg").stop().slideDown();
        $(this).addClass("on");
    })
    $(".sub li:last-child").focusout(function() {
        $(".sub, .bg").stop().slideUp();
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