
function showPopup(event) {
    target = document.getElementById("popup");
    if (!event) var event = window.event;
    if (!event.pageX) px = event.clientX + document.body.scrollLeft; else px = event.pageX;
    if (!event.pageY) py = event.clientY + document.body.scrollTop; else py = event.pageY;
      target.style.left = px+10 + "px";
      target.style.top = py+5 + "px";
      target.style.visibility = "visible";
  }
  
  function showPopup2(event) {
    target = document.getElementById("popup2");
    if (!event) var event = window.event;
    if (!event.pageX) px = event.clientX + document.body.scrollLeft; else px = event.pageX;
    if (!event.pageY) py = event.clientY + document.body.scrollTop; else py = event.pageY;
      target.style.left = px+10 + "px";
      target.style.top = py+5 + "px";
      target.style.visibility = "visible";
  }

  function showPopup3(event) {
    target = document.getElementById("popup3");
    if (!event) var event = window.event;
    if (!event.pageX) px = event.clientX + document.body.scrollLeft; else px = event.pageX;
    if (!event.pageY) py = event.clientY + document.body.scrollTop; else py = event.pageY;
      target.style.left = px+10 + "px";
      target.style.top = py+5 + "px";
      target.style.visibility = "visible";
  }

  

  function popupImage() {
    var popup = document.getElementById('js-popup');
    if(!popup) return;
    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn');
    var showBtn = document.getElementById('js-show-popup');
    closePopUp(blackBg);
    closePopUp(closeBtn);
    closePopUp(showBtn);
    function closePopUp(elem) {
      if(!elem) return;
      elem.addEventListener('click', function() {
        popup.classList.toggle('is-show');
      });
    }
  }
  popupImage();

  function popupImage2() {
    var popup = document.getElementById('js-popup2');
    if(!popup) return;
    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn2');
    var showBtn = document.getElementById('js-show-popup2');
    closePopUp(blackBg);
    closePopUp(closeBtn);
    closePopUp(showBtn);
    function closePopUp(elem) {
      if(!elem) return;
      elem.addEventListener('click', function() {
        popup.classList.toggle('is-show');
      });
    }
  }
  popupImage2();
  
  function popupImage3() {
    var popup = document.getElementById('js-popup3');
    if(!popup) return;
    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn3');
    var showBtn = document.getElementById('js-show-popup3');
    closePopUp(blackBg);
    closePopUp(closeBtn);
    closePopUp(showBtn);
    function closePopUp(elem) {
      if(!elem) return;
      elem.addEventListener('click', function() {
        popup.classList.toggle('is-show');
      });
    }
  }
  popupImage3();

  