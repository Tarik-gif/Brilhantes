/* ----------------------------------------------------------------------------------------
* Author        : web_bean
* Template Name : BIZNIZ | One Page Corporate Html Template
* File          : BIZNIZ  main JS file
* Version       : 1.0
* ---------------------------------------------------------------------------------------- */




    
/* INDEX
----------------------------------------------------------------------------------------

01. Preloader js

02. change Menu background on scroll js 

03. Navigation js

04. Smooth scroll to anchor

05. Portfolio js

06. Magnific Popup js

07. Testimonial js

08. client js

09. Google Map js

10. Ajax Contact Form js

11. Mailchimp js

-------------------------------------------------------------------------------------- */





(function($) {
'use strict';


    /*-------------------------------------------------------------------------*
     *                  01. Preloader js                                       *
     *-------------------------------------------------------------------------*/
      $(window).on( 'load', function(){
        
          $('#preloader').delay(300).fadeOut('slow',function(){
            $(this).remove();
          });    

      }); // $(window).on end



  $(document).ready(function(){



    /*-------------------------------------------------------------------------*
     *             02. change Menu background on scroll js                     *
     *-------------------------------------------------------------------------*/
      $(window).on('scroll', function () {
          var menu_area = $('.menu-area');
          if ($(window).scrollTop() > 200) {
              menu_area.addClass('sticky-menu');
          } else {
              menu_area.removeClass('sticky-menu');
          }
      }); // $(window).on('scroll' end




    /*-------------------------------------------------------------------------*
     *                   03. Navigation js                                     *
     *-------------------------------------------------------------------------*/
      $(document).on('click', '.navbar-collapse.in', function (e) {
          if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
              $(this).collapse('hide');
          }
      });

      $('body').scrollspy({
          target: '.navbar-collapse',
          offset: 195
      });



    /*-------------------------------------------------------------------------*
     *                   04. Smooth scroll to anchor                           *
     *-------------------------------------------------------------------------*/
      $('a.smooth_scroll').on("click", function (e) {
          e.preventDefault();
          var anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $(anchor.attr('href')).offset().top - 50
          }, 1000);
      });



    /*-------------------------------------------------------------------------*
     *                  05. Slider js                                       *
     *-------------------------------------------------------------------------*/
     //Function to animate slider captions 
    function doAnimations( elems ) {
      //Cache the animationend event in a variable
      var animEndEv = 'webkitAnimationEnd animationend';
      
      elems.each(function () {
        var $this = $(this),
          $animationType = $this.data('animation');
        $this.addClass($animationType).one(animEndEv, function () {
          $this.removeClass($animationType);
        });
      });
    }
    
    //Variables on page load 
    var $myCarousel = $('#carousel-example-generic'),
      $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
      
    //Initialize carousel 
    $myCarousel.carousel({
      interval: 5000
    });
    
    //Animate captions in first slide on page load 
    doAnimations($firstAnimatingElems);
    
    //Pause carousel  
    //$myCarousel.carousel('pause');
    
    
    //Other slides to be animated on carousel slide event 
    $myCarousel.on('slide.bs.carousel', function (e) {
      var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
      doAnimations($animatingElems);
    }); 


    /*-------------------------------------------------------------------------*
     *                  05. Portfolio js                                       *
     *-------------------------------------------------------------------------*/
      $('.portfolio').mixItUp();



    /*-------------------------------------------------------------------------*
     *                  06. Magnific Popup js                                  *
     *-------------------------------------------------------------------------*/
      $('.work-popup').magnificPopup({
          type: 'image',
          gallery: {
              enabled: true
          },
          zoom: {
              enabled: true,
              duration: 300, // don't foget to change the duration also in CSS
              opener: function(element) {
                  return element.find('img');
              }
          }
          
      });
      


    /*-------------------------------------------------------------------------*
     *                  07. Testimonial js                                     *
     *-------------------------------------------------------------------------*/
      $(".testimonial-list").owlCarousel({
        transitionStyle : "goDown",
        singleItem      : true,
        lazyLoad        : false,
        pagination      : false,
        navigation      : false,
        autoPlay        : true,
      });



    /*-------------------------------------------------------------------------*
     *                       08. client js                                     *
     *-------------------------------------------------------------------------*/
      $(".owl-client").owlCarousel({
          items               : 5,
          autoPlay            : true,
          itemsDesktop        : [1199, 5],
          itemsDesktopSmall   : [980, 4],
          itemsTablet         : [768, 3],
          itemsMobile         : [479, 2],
          pagination          : false,
          navigation          : false,
          autoHeight          : true,
      });


      $(".home-services").owlCarousel({
          items               : 4,
          autoPlay            : true,
          itemsDesktop        : [1199, 3],
          itemsDesktopSmall   : [980, 2],
          itemsTablet         : [768, 2],
          itemsMobile         : [479, 1],
          pagination          : false,
          navigation          : false,
          autoHeight          : true,
      });


      $(".project-carousel").owlCarousel({
          items               : 4,
          autoPlay            : true,
          itemsDesktop        : [1199, 3],
          itemsDesktopSmall   : [980, 2],
          itemsTablet         : [768, 2],
          itemsMobile         : [479, 1],
          pagination          : false,
          navigation          : false,
          autoHeight          : true,
      });


      $(".news-carousel").owlCarousel({
          items               : 3,
          autoPlay            : true,
          itemsDesktop        : [1199, 3],
          itemsDesktopSmall   : [980, 2],
          itemsTablet         : [768, 2],
          itemsMobile         : [479, 1],
          pagination          : false,
          navigation          : false,
          autoHeight          : true,
      });


      $(".slide-carousel").owlCarousel({
          items               : 1,
          autoPlay            : true,
          itemsDesktop        : [1199, 1],
          itemsDesktopSmall   : [980, 1],
          itemsTablet         : [768, 1],
          itemsMobile         : [479, 1],
          pagination          : false,
          navigation          : true,
          autoHeight          : true,
          navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
      });



    /*-------------------------------------------------------------------------*
     *                       09. Google Map js                                 *
     *-------------------------------------------------------------------------*/
      var myCenter=new google.maps.LatLng( 23.8028085, 90.4070036 );
      function initialize(){
      var mapProp = {
        zoom:14,
        center:myCenter,
        scrollwheel: false,
        mapTpeIdy:google.maps.MapTypeId.ROADMAP
      };
          var map=new google.maps.Map(document.getElementById("contactgoogleMap"),mapProp);
      }
      google.maps.event.addDomListener(window, 'load', initialize);





    /*-------------------------------------------------------------------------*
     *                  10. Ajax Contact Form js                               *
     *-------------------------------------------------------------------------*/
      // Get the form.
      var form = $('#ajax-contact');

      // Get the messages div.
      var formMessages = $('#form-messages');

      // Set up an event listener for the contact form.
      $(form).on('submit', function(e) {
          // Stop the browser from submitting the form.
          e.preventDefault();

          // Serialize the form data.
          var formData = $(form).serialize();

          // Submit the form using AJAX.
          $.ajax({
              type: 'POST',
              url: $(form).attr('action'),
              data: formData
          })
          .done(function(response) {
              // Make sure that the formMessages div has the 'success' class.
              $(formMessages).removeClass('error');
              $(formMessages).addClass('success');

              // Set the message text.
              $(formMessages).text(response);

              // Clear the form.
              $('#name').val('');
              $('#email').val('');
              $('#message').val('');

          })
          .fail(function(data) {
              // Make sure that the formMessages div has the 'error' class.
              $(formMessages).removeClass('success');
              $(formMessages).addClass('error');

              // Set the message text.
              if (data.responseText !== '') {
                  $(formMessages).text(data.responseText);
              } else {
                  $(formMessages).text('Oops! An error occured and your message could not be sent.');
              }
          });

      });



        /*-------------------------------------------------------------------------*
         *                   11. MailChimp js                                    *
         *-------------------------------------------------------------------------*/
          $('#mc-form').ajaxChimp({
            language: 'en',
            callback: mailChimpResponse,

            // ADD YOUR MAILCHIMP URL BELOW HERE!
            url: 'http://coderspoint.us14.list-manage.com/subscribe/post?u=e5d45c203261b0686dad32537&amp;id=d061f39c51'
            
          });

          function mailChimpResponse(resp) {
            if (resp.result === 'success') {
              $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
              $('.mailchimp-error').fadeOut(400);

            } else if(resp.result === 'error') {
              $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
            }  
          }



  }); // $(document).ready end

})(jQuery);