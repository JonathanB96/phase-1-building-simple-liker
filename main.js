// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// hidding "ERROR" when page loads
const err = document.querySelector('#modal');
window.onload = ()=>{err.classList.add('hidden')}



const hearts = document.querySelectorAll(".like-glyph");
for(let heart of hearts){
heart.addEventListener('click', ()=>{
  mimicServerCall()
  .then(()=>{
    if(heart.className ==="like-glyph"){
      heart.className+= " activated-heart"
      heart.textContent = FULL_HEART
    }
    else{
      heart.className = "like-glyph"
      heart.textContent = EMPTY_HEART
    }
  })
  .catch(()=>{
    err.classList.remove('hidden')
    setTimeout(()=>{err.classList.add('hidden')},3000)
  })
})
}








//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
