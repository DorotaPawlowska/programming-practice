(function (){
  'use strict';

  var draggedEl,
      onDragStart,
      onDrag,
      onDragEnd,
      grabPointY,
      grabPointX,
      createNote,
      addNoteBtnEl;

  onDragStart = function(ev){

    if(ev.target.className.indexOf('bar') === -1){
      return;
    }
    draggedEl = this;
    var boundingClientRect = draggedEl.getBoundingClientRect();
    grabPointY = boundingClientRect.top - ev.clientY;
    grabPointX = boundingClientRect.left - ev.clientX;
  };

  onDrag = function(ev){
    if(!draggedEl){
      return;
    }
    var posX = ev.clientX + grabPointX,
        posY = ev.clientY + grabPointY;

    if(posX < 0){
      posX = 0;
    }
    if(posY < 0){
      posY = 0;
    }
    draggedEl.style.transform = "translateX(" + posX + "px) translateY(" + posY + "px)";
  };

  onDragEnd = function(){
    draggedEl = null;
    grabPointX = null;
    grabPointY = null;
  };

  createNote = function(){
    var stickerEl = document.createElement('div'),
        barEl = document.createElement('div'),
        textareaEl = document.createElement('textarea');

    var transformCSSValue = "translateX(" + Math.random()*400 + "px) translateY(" + Math.random()*400 + "px)";

    stickerEl.style.transform = transformCSSValue;

    barEl.classList.add('bar');
    stickerEl.classList.add('sticker');

    stickerEl.appendChild(barEl);
    stickerEl.appendChild(textareaEl);
    stickerEl.addEventListener('mousedown', onDragStart, false);
    document.body.appendChild(stickerEl);
  };

  // createNote();
  addNoteBtnEl = document.querySelector('.addNoteBtn');
  addNoteBtnEl.addEventListener('click', createNote, false);
  document.addEventListener('mousemove', onDrag, false);
  document.addEventListener('mouseup', onDragEnd, false);
  // document.querySelector('.sticker').addEventListener('mousedown', onDragStart, false);

})();