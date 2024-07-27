$(function() {

    // 슬라이드
    let i = 0;

    function slide() {
        if(i < 2) {
            i++;
        }
        else {
            i = 0;
        }
        $ (".slide ul").animate({top: -1 * 700 * i}, 1000)
    }
    setInterval(slide, 2000)

    // 팝업
    $(".pp").click(function() {
        $(".popup").show();
        return false
    })
    $(".popup button").click(function() {
        $(".popup").hide();
    })

    // 메뉴
    $("nav>ul>li").mouseenter(function() {
        $(this).children(".sub").stop().slideDown();
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