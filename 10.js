
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

  function showPopup4(event) {
    target = document.getElementById("popup4");
    if (!event) var event = window.event;
    if (!event.pageX) px = event.clientX + document.body.scrollLeft; else px = event.pageX;
    if (!event.pageY) py = event.clientY + document.body.scrollTop; else py = event.pageY;
      target.style.left = px+10 + "px";
      target.style.top = py+5 + "px";
      target.style.visibility = "visible";
  }

  function showPopup5(event) {
    target = document.getElementById("popup5");
    if (!event) var event = window.event;
    if (!event.pageX) px = event.clientX + document.body.scrollLeft; else px = event.pageX;
    if (!event.pageY) py = event.clientY + document.body.scrollTop; else py = event.pageY;
      target.style.left = px+10 + "px";
      target.style.top = py+5 + "px";
      target.style.visibility = "visible";
  }

  function showPopup6(event) {
    target = document.getElementById("popup6");
    if (!event) var event = window.event;
    if (!event.pageX) px = event.clientX + document.body.scrollLeft; else px = event.pageX;
    if (!event.pageY) py = event.clientY + document.body.scrollTop; else py = event.pageY;
      target.style.left = px+10 + "px";
      target.style.top = py+5 + "px";
      target.style.visibility = "visible";
  }

  function showPopup7(event) {
    target = document.getElementById("popup7");
    if (!event) var event = window.event;
    if (!event.pageX) px = event.clientX + document.body.scrollLeft; else px = event.pageX;
    if (!event.pageY) py = event.clientY + document.body.scrollTop; else py = event.pageY;
      target.style.left = px+10 + "px";
      target.style.top = py+5 + "px";
      target.style.visibility = "visible";
  }

  function showPopup8(event) {
    target = document.getElementById("popup8");
    if (!event) var event = window.event;
    if (!event.pageX) px = event.clientX + document.body.scrollLeft; else px = event.pageX;
    if (!event.pageY) py = event.clientY + document.body.scrollTop; else py = event.pageY;
      target.style.left = px+10 + "px";
      target.style.top = py+5 + "px";
      target.style.visibility = "visible";
  }

  function showPopup9(event) {
    target = document.getElementById("popup8");
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

  function popupImage4() {
    var popup = document.getElementById('js-popup4');
    if(!popup) return;
    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn4');
    var showBtn = document.getElementById('js-show-popup4');
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
  popupImage4();

  function popupImage5() {
    var popup = document.getElementById('js-popup5');
    if(!popup) return;
    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn5');
    var showBtn = document.getElementById('js-show-popup5');  
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
  popupImage5();

  function popupImage6() {
    var popup = document.getElementById('js-popup6');
    if(!popup) return;
    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn6');
    var showBtn = document.getElementById('js-show-popup6');
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
  popupImage6();

  function popupImage7() {
    var popup = document.getElementById('js-popup7');
    if(!popup) return;
    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn7');
    var showBtn = document.getElementById('js-show-popup7');
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
  popupImage7();

  function popupImage8() {
    var popup = document.getElementById('js-popup8');
    if(!popup) return;
    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn8');
    var showBtn = document.getElementById('js-show-popup8');
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
  popupImage8();

  function popupImage9() {
    var popup = document.getElementById('js-popup9');
    if(!popup) return;
    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn9');
    var showBtn = document.getElementById('js-show-popup9');
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
  popupImage9();