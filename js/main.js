const btn = document.getElementById('btn')
const light = document.querySelector('.lamp-container .light')

function toggleBtn () {
  btn.classList.toggle('active')
  light.classList.toggle('on')
}