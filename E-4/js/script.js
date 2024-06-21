$(function() {

    // 슬라이드
    let i = 0;

    function slide() {
        if(i < 2) {
            i++;
        }
        else {
            i = 0
        }

        $(".slide ul").animate({left: -100 * i + "%"},1000)
    }
    setInterval(slide, 2000)

    // 팝업창
    $(".pp").click(function() {
        $(".popup").show()
        return false;
    })
    $(".close button").click(function() {
        $(".popup").hide()
    })

    // 메뉴
    $("nav>ul>li").mouseenter(function() {
        $(this).find(".sub").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function() {
        $(".sub").stop().slideUp();
    })

    // 웹 접근성 메뉴
    $("nav>ul>li").focusin(function() {
        $(this).addClass("on")
        $(this).find(".sub").slideDown()
    })
    $(".sub li:last-child").focusout(function() {
        $("nav>ul>li").removeClass("on")
        $(".sub").slideUp()
    })
})