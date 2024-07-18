$(function(){

    $('.ovdiv').on('click', function(){
        $('.bigoverley').css({
            opacity: '1',
            visibility: 'visible'
        })
    })

    $('.xxx').on('click', function(){
        $('.bigoverley').css({
            opacity: '0',
            visibility: 'hidden'

        })
    })

    //

    $('.ovdiv2').on('click', function(){
        $('.bigoverley2').css({
            opacity: '1',
            visibility: 'visible'
        })
    })

    $('.xxx').on('click', function(){
        $('.bigoverley2').css({
            opacity: '0',
            visibility: 'hidden'

        })
    })


    //




    $('.ovdiv3').on('click', function(){
        $('.bigoverley3').css({
            opacity: '1',
            visibility: 'visible'
        })
    })

    $('.xxx').on('click', function(){
        $('.bigoverley3').css({
            opacity: '0',
            visibility: 'hidden'

        })
    })

    //



    $('.ovdiv4').on('click', function(){
        $('.bigoverley4').css({
            opacity: '1',
            visibility: 'visible'
        })
    })

    $('.xxx').on('click', function(){
        $('.bigoverley4').css({
            opacity: '0',
            visibility: 'hidden'

        })
    })


    //



    $('.ovdiv5').on('click', function(){
        $('.bigoverley5').css({
            opacity: '1',
            visibility: 'visible'
        })
    })

    $('.xxx').on('click', function(){
        $('.bigoverley5').css({
            opacity: '0',
            visibility: 'hidden'

        })
    })


    //



    
    $('.ovdiv6').on('click', function(){
        $('.bigoverley6').css({
            opacity: '1',
            visibility: 'visible'
        })
    })

    $('.xxx').on('click', function(){
        $('.bigoverley6').css({
            opacity: '0',
            visibility: 'hidden'

        })
    })













    $(window).scroll(function(){


        $('section').each(function(){
            var x = $(window).scrollTop() + $(window).height()

            var y = $(this).offset().top + $(this).height() / 2

            if(x >= y){
                $(this).addClass('active1')
            }

        })
 

   })




   $('#questiona').on('click', function(){
     $('#questionp').css({
        opacity: '1',
        visibility: 'visible'
     })

   })


   $('#questionab').on('click', function(){
    $('#questionp').css({
       opacity: '0',
       visibility: 'hidden'
    })

  })




  
  $('#questionac').on('click', function(){
    $('#questionp1').css({
       opacity: '1',
       visibility: 'visible'
    })

  })


  $('#questionax').on('click', function(){
   $('#questionp1').css({
      opacity: '0',
      visibility: 'hidden'
   })

 })





   
 $('#questionaaa').on('click', function(){
    $('#questionp2').css({
       opacity: '1',
       visibility: 'visible'
    })

  })


  $('#question-').on('click', function(){
   $('#questionp2').css({
      opacity: '0',
      visibility: 'hidden'
   })

 })




















})




var but = document.getElementById("btn1") 
 
 
function myfun() { 
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop  > 20) { 
        but.style.display = 'block'; 
    } else { 
        but.style.display = 'none'; 
    } 
} 
 
window.onscroll = function(){ 
    myfun() 
} 
 
function scrolltop() { 
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}