// general js for the project that wouldn't be a reuseable component


///////////////////////////////////////
//        Parallax elements
///////////////////////////////////////
//
// function parallax(){
//   var plx = '.js-plx';
//   var scroll = $(document).scrollTop();
//   $(plx).each(function(){
//     var distance = $(this).offset().top;
//     var offset = distance - scroll;
//     $(this).css(
//       'margin-top', offset*0.1
//     );
//   });
// }
//
//
//
// var waiting = false;
// $(window).scroll(function () {
//   if (waiting) {
//     return;
//   }
//   waiting = true;
//
//   parallax();
//
//   setTimeout(function () {
//     waiting = false;
//   }, 200);
// });