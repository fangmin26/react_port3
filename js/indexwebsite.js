window.onload = function () {
  let pageY = this.pageYOffset;
  let boxes = document.getElementById("boxTop")
  //right boxes의 절대위치값
  let boxesTop = boxes.getBoundingClientRect().top + pageY;
  //right box(리스트) 하나의 높이값
  let boxHeight = document.querySelector(".sec2 .right .boxes .box").clientHeight;


  window.addEventListener('scroll',function(){
    let pageY = this.pageYOffset;
    let wScroll = document.documentElement.scrollTop;
    let desc = document.querySelectorAll('.sec2 .right .boxes .box .desc .desc_container');
    let img = document.querySelectorAll('.sec2 .right .boxes .box .pic img');

    // console.log(pageY/50);
    if(wScroll>boxesTop-200){
      desc[0].style.paddingTop = `${pageY/6}px`;
      img[0].style.transform = `translateY(-${pageY/120}px)`;  
    }else{
      desc[0].style.paddingTop = `250px`;
      img[0].style.transform = `translateY(80px)`;       
    }//box1 위치값보다 wScroll이 클때
    if(wScroll>boxesTop+boxHeight-200){
      desc[1].style.paddingTop = `${pageY/10}px`;
      img[1].style.transform = `translateY(-${pageY/120}px)`; 
    }else{
      desc[1].style.paddingTop = `250px`;
      img[1].style.transform = `translateY(80px)`;   
    }//box2 위치값보다 wScroll이 클때
    if(wScroll>boxesTop+boxHeight*2-200){
      desc[2].style.paddingTop = `${pageY/14}px`;
      img[2].style.transform = `translateY(-${pageY/120}px)`; 
    }else{
      desc[2].style.paddingTop = `250px`;
      img[2].style.transform = `translateY(80px)`;   
    }//box3 위치값보다 wScroll이 클때
    if(wScroll>boxesTop+boxHeight*3-200){
      desc[3].style.paddingTop = `${pageY/18}px`;
      img[3].style.transform = `translateY(-${pageY/120}px)`; 
    }else{
      desc[3].style.paddingTop = `250px`;
      img[3].style.transform = `translateY(80px)`;
    }//box4 위치값보다 wScroll이 클때
    if(wScroll>boxesTop+boxHeight*4-200){
      desc[4].style.paddingTop = `${pageY/22}px`;
      img[4].style.transform = `translateY(-${pageY/120}px)`; 
    }else{
      desc[4].style.paddingTop = `250px`;
      img[4].style.transform = `translateY(80px)`;
    }//box5 위치값보다 wScroll이 클때
    if(wScroll>boxesTop+boxHeight*5-200){
      desc[5].style.paddingTop = `${pageY/26}px`;
      img[5].style.transform = `translateY(-${pageY/120}px)`; 
    }else{
      desc[5].style.paddingTop = `250px`;
      img[5].style.transform = `translateY(80px)`;
    }//box6 위치값보다 wScroll이 클때
    
  });//window scroll

} //window.onload