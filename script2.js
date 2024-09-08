$(function() {

    // 위에서 아래 이동 슬라이드
    const slides = $('.slide_container>ul')
    function slide() {
        slides.animate({'top':'-300px'},450,function() {
            slides.find('li').eq(0).appendTo(slides)
            slides.css({'top':0})
        })
    }
    setInterval(slide, 3000)

    // 좌에서 우로 이동 슬라이드
    const slides = $('.slide_container>ul')
    function slide() {
        slides.animate({'left':'-1200px'},450,function() {
            slides.find('li').eq(0).appendTo(slides)
            slides.css({'left':0})
        })
    }
    setInterval(slide, 3000)

    // fade In, fade Out 슬라이드
    $('.slide_list:gt(0)').hide()
    setInterval(function() {
        $('.slide_list.first').fadeOut(1500).next().fadeIn(1500)
        $('.slide_list.first').appendTo('.slide_group')
    },3000)

    // 탭 메뉴
    $('.tabmenu>li').click(function() {
        $('.tabmenu>li').removeClass('on')
        $(this).addClass('on')

        let i = $(this).index()
        console.log(i)

        $('.tabcon').hide()
        $('.tabcon').eq(i).show()
        return false
    })

    // 메뉴
    $('nav>ul>li').mouseenter(function() {
        $('.sub').stop().slideDown()
    })
    $('nav>ul>li').mouseleave(function() {
        $('.sub').stop().slideUp()
    })

    // 키보드 이벤트 메뉴
    $('nav.ul>li').focusin(function() {
        $('.sub').slideDown()
        $(this).addClass('on')
    })
    $('.sub li:last-child').focusout(function() {
        $('nav>ul>li').removeClass('on')
    })
    $('nav li:last-child li:last-child').focusout(function() {
        $('.sub').slideUp()
    })

    // bg가 있는 메뉴
    $('nav>ul>li').mouseenter(function() {
        $('.sub, .bg').stop().slideDown()
    })
    $('nav>ul>li').mouseleave(function() {
        $('.sub, .bg').stop().slideUp()
    })

    // bg가 있는 키보드 메뉴
   $('nav>ul>li').focusin(function() {
        $('.sub,. bg').stop.slideDown()
        $(this).addClass('on')
   })
   $('.sub li:last-child').focusout(function() {
        $('.sub, .bg').stop().slideUp()
   })

   // 팝업
   $('.pp').click(function() {
        $('.popup').show()
        return false
   })
   $('.close').click(function() {
        $('.popup').hide()
   })
})