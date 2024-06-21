$(function() {

     // 슬라이드
     let n = 0

     function slide() {
        if(n < 2) {
            n++;
        }
        else {
            n = 0;
        }
        $(".slide ul li").fadeOut();
        $(".slide ul li").eq(n).fadeIn();
     }

     setInterval(slide, 2000)

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

       // 메뉴
       $("nav > ul > li").mouseenter(function() {
            $(this).find(".sub").stop().slideDown();
       })
       $("nav > ul > li").mouseleave(function() {
            $(".sub").stop().slideUp();
       })

        // 웹 접근성 메뉴
        $("nav > ul > li").focusin(function() {
            $(this).addClass("on")
            $(this).find(".sub").slideDown()
        })
        $(".sub li:last-child").focusout(function() {
            $("nav > ul > li").removeClass("on")
            $(".sub").slideUp()
        })

        // 팝업
        $(".pp").click(function() {
            $(".popup").show();
            return false;
        })

        $("button").click(function() {
            $(".popup").hide();
        })
})