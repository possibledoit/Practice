$(function() {

    // 슬라이드
    let i = 0;

    function slide(){
         if(i < 2){
             i++;
         }
         else {
             i = 0;
         }
         
         $(".slide ul").animate({top: 300 * (-1) * i},1000)
    }
 
    setInterval(slide, 2000)

    // 팝업
    $(".pp").click(function() {
        $(".popup").show();
        return false;
    })
    $(".popup, .close").click(function() {
        $(".popup").hide();
    })

    // 메뉴
    $("nav>ul>li").mouseenter(function() {
        $(".sub, .bg").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function() {
        $(".sub, .bg").stop().slideUp();
    })

    // 웹 접근성 메뉴
    $("nav>ul>li").focusin(function() {
        $(this).addClass("on")
        $(".sub, .bg").slideDown()
    })
    $(".sub li:last-child a").focusout(function() {
        $("nav>ul>li").removeClass("on")
    })
    $("nav li:last-child li:last-child a").focusout(function() {
        $(".sub, .bg").slideUp()
    })
})