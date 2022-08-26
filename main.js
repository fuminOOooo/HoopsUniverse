// $(document).ready(function(){
//   $('.pekalongan').on('click', function(){
//     var currentImg = $('.active');
//     var nextImg = currentImg.next();
//     if(nextImg.length){
//       currentImg.removeClass('active').css('z-index', 10);
//       nextImg.addClass('active').css('z-index', 10);
//     }
//     else{
//       nextImg=currentImg.prev();
//       for(;nextImg.prev().length!=0;){
//         nextImg=nextImg.prev();
//       }
//       currentImg.removeClass('active').css('z-index', -10);
//       nextImg.addClass('active').css('z-index', 10);
//     }
//   });

//   $('.pekalongan2').on('click', function(){
//     var currentImg = $('.active');
//     var prevImg = currentImg.prev();

//     if(prevImg.length){
//       currentImg.removeClass('active').css('z-index', -10);
//       prevImg.addClass('active').css('z-index', 10);
//     }
//     else{
//       prevImg=currentImg.next();
//       for(;prevImg.next().length!=0;){
//         prevImg=prevImg.next();
//       }
//       currentImg.removeClass('active').css('z-index', -10);
//       prevImg.addClass('active').css('z-index', 10);
//     }
//   });
// });

var position = 0;
$('.slider-inner').css({
  left: '0%'
})

$('.pekalongan').click(()=>{
  if(position <= 0){
    position=300;
  }
  else{
    position=position-100;
  }
  $('.slider-inner').animate({
    left: -position+'%'
  },1000)
})

$('.pekalongan2').click(()=>{
  if(position >= 300){
    position=0;
  }
  else{
    position=position+100;
  }
  $('.slider-inner').animate({
    left: -position+'%'
  },1000)
})