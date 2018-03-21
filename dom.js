window.addEventListener("keydown", play);


function play(e){

   /*animation*/
   var keyAnimation = document.querySelector(`.key[data-key= "${e.keyCode}"]`);
   keyAnimation.classList.add('playing');

   var keys = document.querySelectorAll('.key');
   keys.forEach(key => key.addEventListener('transitionend', removeTransition));


   /*audio*/

   var audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
   console.log(audio);

   if (!audio)  return;

   audio.currentTime = 0;
   audio.play();
}


function removeTransition(e){
    this.classList.remove('playing');
}