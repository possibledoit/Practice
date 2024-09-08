$(function() {

    // 메뉴
    $('nav>ul>li').on('mouseenter',function() {
        $(this).find('.sub').stop().slideDown(300);
    });
    $('nav>ul>li').on('mouseleave',function() {
        $(this).find('.sub').stop().slideUp(300);
    });

    // 슬라이드 (up / down, left / right)
    const slides = $('.slide_container>ul');
    function slide() {
        slides.animate({'top': '-300px'}, 450, function() {
            slides.find('li').eq(0).appendTo(slides);
            slides.css('top', 0);
        })
    }
    setInterval(slide, 3000);
   // 탭메뉴
    $(".tabmenu > li").click(function() {
        $(".tabmenu > li").removeClass("on");
        $(this).addClass("on");

        let i = $(this).index();
        console.log(i);
        $(".tabcon").hide();
        $(".tabcon").eq(i).show();
        return false;
    })

    // 팝업
     $(".pp").click(function() {
        $(".popup").show();
            return false;
        })

        $(".close").click(function() {
            $(".popup").hide();
    })
});