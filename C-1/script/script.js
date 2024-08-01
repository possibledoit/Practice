$(function() {

    // 탭메뉴
    $(".tabmenu>li").click(function() {
        $(".tabmenu>li").removeClass("on")
        $(this).addClass("on")

        let t = $(this).index();

        $(".tabcon").hide();
        $(".tabcon").eq(t).show()
    })

    // 슬라이드
    let i = 0

    function slide() {
        if(i<2) {
            i++;
        }
        else {
            i=0;
        }
        $(".slide ul li").fadeOut();
        $(".slide ul li").eq(i).fadeIn();
    }
    setInterval(slide, 3000)

    // 팝업창
    $(".pp").click(function() {
        $(".popup").show();
        return false;
    })
    $(".close").click(function() {
        $(".popup").hide();
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
        $(".sub").slideDown()
        $(this).addClass("on")
    })

    $(".sub li:last-child").focusout(function() {
        $("nav>ul>li").removeClass("on")
    })

    $("nav li:last-child li:last-child").focusout(function() {
        $(".sub").slideUp()
    })
})