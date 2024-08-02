$(function() {

    // 슬라이드
    function slide() {
        if(i<2) {
            i++
        }
        else {
            i=0
        }
        $(".slide ul li").fadeOut()
        $(".slide ul li").eq(i).fadeIn()
    }
    setInterval(slide, 3000)

    // 탭메뉴
    $(".tabmenu>li").click(function() {
        $(".tabmenu>li").removeClass("on")
        $(this).addClass("on")

        let i = $(this).index()
        console.log(i)

        $(".tabcon").hide()
        $(".tabcon").eq(i).show()
        return false
    })

    // 메뉴
    $("nav>ul>li").mouseenter(function() {
        $(".sub").stop().slideDown()
    })
    $("nav>ul>li").mouseleave(function() {
        $(".sub").stop().slideUp()
    })

    // 키보드 이벤트 메뉴
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

    // 팝업
    $(".pp").click(function() {
        $(".popup").show()
        return false
    })

    $(".pp").click(function() {
        $(".popup").hide()
    })
})