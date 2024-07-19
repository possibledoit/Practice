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
    setInterval(slide, 2000)

    // 키보드이벤트
    $("nav>ul>li").focusin(function() {
        $(".sub").fadeIn()
        $(this).addClass("on")
    })
    $("nav li li:last-child").focusout(function() {
        $("nav>ul>li").removeClass("on")
    })
    $("nav li:last-child li:last-child").focusout(function() {
        $(".sub").fadeOut()
    })

    // 메뉴
    $("nav>ul>li").mouseenter(function() {
        $(".sub").stop().fadeIn()
    })
    $("nav>ul>li").mouseleave(function() {
        $(".sub").stop().fadeOut()
    })

    // 팝업
    $(".pp").click(function() {
        $(".popcon").show();
        return false;
    })
    $(".close").click(function() {
        $(".popcon").hide();
    })
})