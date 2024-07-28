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

        $(".slide ul li").fadeOut();
        $(".slide ul li").eq(i).fadeIn();
    }

    setInterval(slide, 3000)

    // 메뉴
    $("nav>ul>li").mouseenter(function() {
        $(this).children(".sub").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function() {
        $(".sub").stop().slideUp();
    })

    // 메뉴 키보드
    $("nav>ul>li").focusin(function() {
        $(this).children(".sub").slideDown();
        $(this).addClass("on");
    })
    $(".sub li:last-child").focusout(function() {
        $(".sub").slideUp();
        $(".nav>ul>li").removeClass("on");
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