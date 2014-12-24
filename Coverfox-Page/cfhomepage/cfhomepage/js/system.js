$(function(){

    $('#slides').superslides({
        hashchange: false,
        play: 200000
      });

	 $(document).on('click', '#cover_rest', function(){
        $('#cover_overlay').addClass('reveal');
    });
	 $(document).on('click', '.cover_btn_close', function(){
        $('#cover_overlay').removeClass('reveal');
    });

    $(document).on('click', '.btn-signup', function(){
        $('.signup-overlay-wrapper').addClass('reveal');
    });

    $(document).on('click', '.signup-overlay-wrapper .btn-close', function(){
        $('.signup-overlay-wrapper').removeClass('reveal');
    });

    $(document).on('click', '.testimonial-detail .close-btn', function(){

        var target = $('.testimonial-detail'),
            container = $('.testimonial-items');

        target.find('.testimonial-detail-right').removeClass('reveal');
        setTimeout(function(){
            target.addClass('cubic-trans').removeClass('hcenter').removeClass('reveal');
            setTimeout(function(){
                target.removeClass('cubic-trans');
            }, 500);
        },500);

        container.removeClass('disable');

    });


    $(document).on('click', '.testimonial-item', function(){
        var context = $(this),
            target = $('.testimonial-detail'),
            container = $('.testimonial-items'),
            width = context.width(),
            height = context.height(),
            offsetTop = context.offset().top,
            offsetLeft = context.offset().left,
            rightHTML = context.find('.ti-right').html(),
            leftHTML = context.find('.ti-left').html();



        target.find('.testimonial-detail-right').html(rightHTML);
        target.find('.testimonial-detail-left').html(leftHTML);


        container.addClass('disable');



        target.css({width:width, height:height, top:offsetTop, left:offsetLeft}).addClass('reveal');
        setTimeout(function(){
            target.find('.testimonial-detail-right').addClass('reveal');
            target.addClass('hcenter');
        },500);

        console.log(offsetLeft);
        console.log(offsetTop);

    });


});