$(function () {
    
    
    /* 비디오 더보기*/
    $('#video .video_box .video').slice(0,5).show()
    $('#video .video_more').click(function(e){
        e.preventDefault()
        $('#video .video:hidden').slice(0,5).show()
        
        if($('#video .video:hidden').length == 0){
            $('#video .video_more').hide()
        }
    })
    
    
    /* 경기결과 input창 */
    
    $('#competetion').on('change',function(){
        var cval = $(this).val()
        $('.result_match .match').not('.'+cval).hide()
        $('.result_match .match').filter('.'+cval).show()
    })
    
    
    /* 날짜 */
    $('.match_date .previous_month').click(function(){
         var data = $('.match_date .month').attr('data-filter')
         var number = $('.match_info').filter('.'+data).attr('data-bnumber')
         var month  = $('.match_info').filter('.'+data).attr('data-bmonth')
         
        $('.match_info').filter('.'+data).hide()
        
        $('.match_date .month').attr('data-filter',month)
        $('.match_date .month').text(number)
        $('.match_info').filter('.'+month).show()

    })
    
    $('.match_date .next_month').click(function(){
         var data = $('.match_date .month').attr('data-filter')
         var number = $('.match_info').filter('.'+data).attr('data-anumber')
         var month  = $('.match_info').filter('.'+data).attr('data-amonth')
         
        $('.match_info').filter('.'+data).hide()
        
        $('.match_date .month').attr('data-filter',month)
        $('.match_date .month').text(number)
        $('.match_info').filter('.'+month).show()

    })
    
    
    /* 로그인 */
    
    $('.login_area .tottenham_login .login a').click(function(e){
        e.preventDefault()

        $('.login').addClass('active')
        $('.sign_up').addClass('active')
    })
    
    $('.login_area .tottenham_login .sign_up a').click(function(e){
        e.preventDefault()

        $('.login').removeClass('active')
        $('.sign_up').removeClass('active')
    })
    
    
    /*top_btn */
    
    $('.top_btn').click(function(e){
        
        e.preventDefault()
        
        $(this).addClass('active')
        
        $('html,body').stop().animate({
            scrollTop:'0'
        })
    })
    
    $(window).scroll(function(){
        
        var win_t = $(this).scrollTop()
        
        var win_h = $(this).height()
        
        var footer_t = $('footer').offset().top
        
        
        if(win_t > footer_t - win_h){
            $('.top_btn').show().css('opacity','1')
        }else if(win_t < footer_t - win_h ){
            $('.top_btn').hide().css('opacity','0')
            $('.top_btn').removeClass('active')
        }
        
        
    })
    

    /* swiper */

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: true,
        breakpoints: {
            300: {
                slidesPerView: 1,
            },

            // when window width is >= 320px
            600: {
                slidesPerView: 2,
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 3,
            },
            // when window width is >= 640px
            960: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 6,
            }

        }
    });
    $('#prev').click(function () {
        swiper.slidePrev()
    })
    $('#next').click(function () {
        swiper.slideNext()
    })


    /* pc에서 전체 메뉴 내리기 */

    $('.header_bottom').mouseenter(function () {

        var win_w = $(window).outerWidth()

        if (win_w > 960) {
            $('.header_bottom').stop().animate({
                height: '180px',
            })
            $('.header_bottom nav ul .sub').css('opacity', 1)

        }


        $(window).resize(function () {
            var win_w = $(window).outerWidth()
            if (win_w < 960) {
                $('.header_bottom').css('height', '70px')
                $('.header_bottom nav ul .sub').removeAttr('style')
            } else {
                $('.header_bottom').css('height', '56px')
            }
        })

    })

    /* pc에서 전체 메뉴 내리기 */
    $('.header_bottom').mouseleave(function () {
        var win_w = $(window).outerWidth()

        if (win_w > 960) {
            $('.header_bottom').stop().animate({
                height: '56px',
            })
            $('.header_bottom nav ul .sub').css('opacity', 0)
        }

        $(window).resize(function () {
            var win_w = $(window).outerWidth()
            if (win_w < 960) {
                $('.header_bottom').css('height', '70px')
                $('.header_bottom nav ul .sub').removeAttr('style')
            } else {
                $('.header_bottom').css('height', '56px')
            }
        })
    })


    /* 햅버거버튼클릭했을때 */
    $('.hamburger').click(function () {
        $(this).toggleClass('active')


        if ($(this).hasClass('active')) {
            $('.header_bottom_group nav').slideDown()
            $('header .modal').addClass('active')
        } else {
            $('header .modal').removeClass('active')
            $('.header_bottom_group nav').slideUp()
        }


        $(window).resize(function () {
            var win_w = $(window).outerWidth()
            if (win_w > 960) {
                $('.header_bottom_group nav').removeAttr('style')
                $('.hamburger').removeClass('active')
                $('header .modal').removeClass('active')
            }
        })
    })

    /* 모달창 클릭했을때 */
    $('.modal').click(function () {
        $('header .modal').removeClass('active')
        $('.header_bottom_group nav').slideUp()
        $('.hamburger').removeClass('active')
    })


})
