(function (){
  'use strict';

  var draggedEl,
      onDragStart,
      onDrag,
      onDragEnd,
      grabPointY,
      grabPointX,
      createNote,
      addNoteBtnEl,
      init,
      testLocalStorage,
      saveNote,
      deleteNote,
      loadNotes,
      getNoteObject,
      onAddNoteBtnClick;

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

  getNoteObject = function(el){
    var textarea = el.querySelector('textarea');
    return{
      content: textarea.value,
      id: el.id,
      transformCSSValue: el.style.transform,
      textarea: {
        width: textarea.style.width,
        height: textarea.style.height,
      }
    }
  };

  createNote = function(options){
    var stickerEl = document.createElement('div'),
        barEl = document.createElement('div'),
        textareaEl = document.createElement('textarea'),
        saveBtnEl = document.createElement('button'),
        deleteBtnEl = document.createElement('button'),
        onSave,
        onDelete,
        noteConfig = options ||{
          content: '',
          id: "sticker_" + new Date().getTime(),
          transformCSSValue: "translateX(" + Math.random()*400 + "px) translateY(" + Math.random()*400 + "px)"
        };

    onDelete = function(){
      deleteNote(
        getNoteObject(stickerEl)
      );
      document.body.removeChild(stickerEl);
    };

    onSave = function(){
      // console.log(getNoteObject(stickerEl));
      saveNote(
        getNoteObject(stickerEl)
      );
    };

    if(noteConfig.textarea){
      textareaEl.style.width = noteConfig.textarea.width;
      textareaEl.style.height = noteConfig.textarea.height;
      textareaEl.style.resize = 'none';
    }

    stickerEl.id = noteConfig.id;
    textareaEl.value = noteConfig.content;

    saveBtnEl.addEventListener('click', onSave, false);
    deleteBtnEl.addEventListener('click', onDelete, false);

    saveBtnEl.classList.add('saveBtn');
    deleteBtnEl.classList.add('deleteBtn');


    console.log(noteConfig);
    stickerEl.style.transform = noteConfig.transformCSSValue;

    barEl.classList.add('bar');
    stickerEl.classList.add('sticker');

    barEl.appendChild(saveBtnEl);
    barEl.appendChild(deleteBtnEl);

    stickerEl.appendChild(barEl);
    stickerEl.appendChild(textareaEl);
    stickerEl.addEventListener('mousedown', onDragStart, false);
    document.body.appendChild(stickerEl);
  };

  testLocalStorage = function(){
    var foo = 'foo';
    try{
      localStorage.setItem(foo, foo);
      localStorage.removeItem(foo);
      return true;
    } catch(e){
      return false;
    }
  };

  onAddNoteBtnClick = function(){
    createNote();
  };

  init = function(){

    if(!testLocalStorage()){
      var message = 'NO!';
      saveNote = function(){
        console.warn(message);
      };
      deleteNote = function(){
        console.warn(message);
      };
    }else{
      saveNote = function(note){
        localStorage.setItem(note.id, JSON.stringify(note));
        //notatka zapis
      };
      deleteNote = function(note){
        localStorage.removeItem(note.id);
        //notatka usuwanie
      };

      loadNotes = function(){
        for(var i = 0; i < localStorage.length; i++){
          var noteObj = JSON.parse(
            localStorage.getItem(
              localStorage.key(i)
            )
          );
          createNote(noteObj);
        }
        //notatki wypisanie
      };
      loadNotes();
    }

    addNoteBtnEl = document.querySelector('.addNoteBtn');
    addNoteBtnEl.addEventListener('click', onAddNoteBtnClick, false);
    document.addEventListener('mousemove', onDrag, false);
    document.addEventListener('mouseup', onDragEnd, false);
  };

  init();
})();