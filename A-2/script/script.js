$(function() {
    function slide() {
        $(".slide ul").animate({left:"-1200px"},1000,function() {
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({left:0})
        })
    }
    setInterval(slide, 2000)

    // 메뉴
    $("nav>ul>li").mouseenter(function() {
        $(".sub, .bg").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function() {
        $(".sub, .bg").stop().slideUp();
    })

    // 메뉴 키보드이벤트
    $("nav>ul>li>a").focusin(function() {
        $(this).parent("li").addClass("on")
        $(".sub, .bg").slideDown();
    })
    $("nav li li:last-child").focusout(function() {
        $("nav li").removeClass("on")
    })
    $("nav li:last-child li:last-child").focusout(function() {
        $(".sub, .bg").slideUp();
    })

    // 팝업
    $(".pp").click(function() {
        $(".popup").show();
        return false;
    })
    $(".close").click(function() {
        $(".popup").hide();
    })
})