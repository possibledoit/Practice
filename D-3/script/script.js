$(function() {

    // 슬라이드
    let t = 0;

    function slide() {
        if(t < 2) {
            t++;
        }
        else {
            t = 0;
        }

        $(".slide ul li").fadeOut();
        $(".slide ul li").eq(t).fadeIn();
    }
    setInterval(slide, 3000)

    // 탭메뉴
    $(".tabmenu>li").click(function() {
        $(".tabmenu>li").removeClass("on")
        $(this).addClass("on")

        let i = $(this).index();
        $(".tabcon").hide();
        $(".tabcon").eq(i).show();

        return false;
    })

    // 팝업
    $(".pp").click(function() {
        $(".popcon").show();
        return false;
    })
    $(".close").click(function() {
        $(".popcon").hide();
    })

    // 메뉴
    $("nav>ul>li").mouseenter(function() {
        $(this).find(".sub").stop().slideDown();
   })

   $("nav>ul>li").mouseleave(function() {
        $(".sub").stop().slideUp();
   })

    // 웹접근성메뉴
    $("nav>ul>li").focusin(function() {
        $(this).addClass("on")
        $(this).find(".sub").fadeIn()
    })

    $(".sub li:last-child").focusout(function() {
        $("nav>ul>li").removeClass("on")
    })
    $("nav li:last-child li:last-child").focusout(function() {
        $(".sub").fadeOut()
    })
})