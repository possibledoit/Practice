$(function() {
    
    // 슬라이드
    function slide () {
        $(".slide ul").animate({top:"-400px"},1000,function() {
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({top:0})
        })
    }

    setInterval(slide, 3000)

    // 메뉴
    $("nav>ul>li").mouseenter(function() {
        $(this).find(".sub").stop().slideDown()
    })
    $("nav>ul>li").mouseleave(function() {
        $(this).find(".sub").stop().slideUp()
    })

    $("nav>ul>li").focusin(function() {
        $(this).find(".sub").slideDown()
        $(this).addClass("on")
    })

    $("sub li:last-child").focusout(function() {
        $(".sub").slideUp();
        $("nav>ul>li").removeClass("on")
    })

    // 탭메뉴
    $(".tabmenu>li").click(function() {
        $(".tabmenu>li").removeClass("on")
        $(this).addClass("on")

        let i = $(this).index()

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
})