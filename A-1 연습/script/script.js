$(function() {

    // 슬라이드
    function slide() {
        $(".slide ul").animate({top:"-300px"},1000,function() {
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({top:0})
        })
    }
    setInterval(slide, 3000)

    // 탭 메뉴
    $(".tabmenu>li").click(function() {
        $(".tabmenu>li").removeClass("on")
        $(this).addClass("on");

        let i = $(this).index()
        console.log(i);

        $(".tabcon").hide()
        $(".tabcon").eq(i).show()
        return false;
    })

    // 메뉴
    $("nav>ul>li").mouseenter(function() {
        $(".sub").stop().slideDown();
    })

    $("nav>ul>li").mouseleave(function() {
        $(".sub").stop().slideUp();
    })

    // 키보드 이벤트 메뉴
    $("nav>ul>li").focusin(function() {
        $(".sub").slideDown();
        $(this).addClass("on")
    })

    $(".sub li:last-child").focusout(function() {
        $(".sub").removeClass("on")
    })

    $("nav li:last-child li:last-child").focusout(function() {
        $(".sub").slideUp();
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