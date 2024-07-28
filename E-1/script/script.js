$(function() {

    // 슬라이드
    function slide() {
        $(".slide ul").animate({left:"-100%"},1000,function() {
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({left:0})
        })
    }
    setInterval(slide, 3000)

    // 메뉴 키보드이벤트
    $("nav>ul>li").focusin(function() {
        $(this).find(".sub").slideDown();
        $(this).addClass("on")
    })
    $(".sub li:last-child").focusout(function() {
        $(".sub").slideUp();
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
    $(".pp").click(function(){
        $(".popup").show();
        return false;
    })

    $(".close").click(function() {
        $(".popup").hide();
    })
})