$(function() {
    
    // 슬라이드
    function slide() {
        $(".slide ul").animate({top:"-350px"},1000,function() {
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({top:0})
        })
    }
    setInterval(slide, 2000)
    
    // 메뉴
    $("nav>ul>li").mouseenter(function() {
        $(".sub, .bg").stop().slideDown()
    })
    $("nav>ul>li").mouseleave(function() {
        $(".sub, .bg").stop().slideUp()
    })

    // 웹 접근성 메뉴
    $("nav>ul>li").focusin(function() {
        $(".sub, .bg").slideDown()
        $(this).addClass("on")
    })
    $("nav li li:last-child li:last-child").focusout(function() {
        $(".sub, .bg").slideUp()
    })

    // 팝업
    $(".pp").click(function() {
        $(".popup").show();
        return false;
    })
    $(".close button").click(function() {
        $(".popup").hide();
    })

})