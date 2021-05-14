window.onload = function () {
  //list 절대위치값
  let list  = document.querySelectorAll('.sec2 .index_box li');
  let h4 = document.querySelectorAll('.sec2 .index_box li h4');
  let desc = document.querySelector('.sec2 .index_box li .desc p');
  // let bar = document.querySelectorAll('.sec2 .index_box li div h4::after');

  let pageY = window.pageYOffset;
  let firstY = list[0].getBoundingClientRect().top + pageY;
  let secondY = list[1].getBoundingClientRect().top + pageY;
  let thirdY = list[2].getBoundingClientRect().top + pageY;
  let fourthY = list[3].getBoundingClientRect().top + pageY;
  let fifthY = list[4].getBoundingClientRect().top + pageY;
 //sec2 typing scroll시 1회
  window.addEventListener('scroll',function(){
    let wScroll = document.documentElement.scrollTop;
    if(wScroll> firstY -300){
      list[0].classList.add('active');
      h4[0].style.display  = "block";
    }else{
      list[0].classList.remove('active');
      h4[0].style.display  = "none";
    }
    if(wScroll> secondY -300){
      list[1].classList.add('active');
      h4[1].style.display  = "block";
    }else{
      list[1].classList.remove('active');
      h4[1].style.display  = "none";
    }
    if(wScroll> thirdY -300){
      list[2].classList.add('active');
      h4[2].style.display  = "block";
    }else{
      list[2].classList.remove('active');
      h4[2].style.display  = "none";
    }
    if(wScroll> fourthY -300){
      list[3].classList.add('active');
      h4[3].style.display  = "block";
    }else{
      list[3].classList.remove('active');
      h4[3].style.display  = "none";
    }
    if(wScroll> fifthY -300){
      desc.style.opacity="1";
    }else{
      desc.style.opacity="0";  
    }    
  });


} //window.onload