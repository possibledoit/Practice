$(function() {

    // 슬라이드
    let i = 0

    function slide() {
        if(i < 2){
            i++;
        }
        else {
            i = 0;
        }
        $(".slide ul li").fadeOut()
        $(".slide ul li").eq(i).fadeIn()
    }
    setInterval(slide, 3000)

    // 메뉴 키보드이벤트
    $("nav>ul>li").focusin(function() {
        $(this).addClass("on")
        $(".sub, .bg").slideDown()
    })
    $("nav li li:last-child").focusout(function() {
        $("nav>ul>li").removeClass("on")
    })
    $("nav li:last-child li:last-child").focusout(function() {
        $(".sub, .bg").slideUp()
    })

    // 메뉴
    $("nav>ul>li").mouseenter(function() {
        $(".sub, .bg").stop().slideDown()
    })
    $("nav>ul>li").mouseleave(function() {
        $(".sub, .bg").stop().slideUp()
    })

    // 팝업창
    $(".pp").click(function() {
        $(".popup").show();
        return false;
    })

    $(".close").click(function() {
        $(".popup").hide()
    })
})