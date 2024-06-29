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
        $(".slide ul").animate({left:1200 * (-1) * i},1000)
    }
    setInterval(slide, 2000)

    // 탭메뉴
    $(".tabmenu>li").click(function() {
        $(".tabmenu>li").removeClass("on")
        $(this).addClass("on")

        let t = $(this).index();
        console.log(t);
        $(".tabcon").hide();
        $(".tabcon").eq(t).show();
    })

    // 팝업창
    $(".pp").click(function() {
        $(".popup").show();
        return false;
    })
    $(".popup, .close").click(function() {
        $(".popup").hide();
    })

    // 메뉴
    $("nav>ul>li").mouseenter(function() {
        $(".sub").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function() {
        $(".sub").stop().slideUp();
    })

    // 웹 접근성 메뉴
    $("nav>ul>li").focusin(function() {
        $(this).addClass("on")
        $(".sub").stop().slideDown()
    })

    $(".sub li:last-child a").focusout(function() {
        $("nav>ul>li").removeClass("on")
    })
    $("nav li:last-child li:last-child a").focusout(function() {
        $(".sub").slideUp()
    })
})