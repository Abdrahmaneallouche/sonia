let input=document.querySelector('input')
let click=document.querySelector('.click')
let model=document.querySelector('.model')
let close=document.querySelector('.close')
let music=document.querySelector('.love')
click.addEventListener('click',()=>{
  let value =input.value.toLowerCase()
  if(value==='sonia'){
    model.classList.add('open')
    music.play()
  }
  input.value='i love u <3'
})
close.addEventListener('click',()=>{
  model.classList.remove('open')
  music.pause()
  music.currentTime = 0;
})