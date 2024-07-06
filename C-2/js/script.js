$(function() {

    // 슬라이드
    let i = 0

    function slide() {
        if(i < 2) {
            i++;
        }
        else {
            i = 0;
        }

        $(".slide ul li").fadeOut()
        $(".slide ul li").eq(i).fadeIn()
    }

    setInterval(slide, 2000)

    // 키보드이벤트메뉴
    $("nav>ul>li").focusin(function() {
        $(this).find(".sub").slideDown();
        $(this).addClass("on")
    })
    $(".sub li:last-child").focusout(function() {
        $(".sub").stop().slideUp();
        $("nav>ul>li").removeClass("on")
    })

    // 메뉴
    $("nav>ul>li").mouseenter(function() {
        $(this).find(".sub").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function() {
        $(".sub").stop().slideUp();
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