const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
const toyCollection = document.querySelector('#toy-collection')
let addToy = false
const createToyForm = document.querySelector('.add-toy-form')

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
  } else {
    toyForm.style.display = 'none'
  }
})

// if the <script> is at the top of the page, can use
// document.addEventListener('DOMContentLoaded', () => {})
// code goes here!

const initialize = () => {
  fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    // divide toys here
    .then(toys => toys.forEach(showToy))
}

const showToy = () => {
  let toyDiv = document.createElement('div')
  // add class to class list array
  toyDiv.classList.add('card')
  toyDiv.innerHTML = `
    <h2></h2>
    <img src='' class="toy-avatar" />
    <p></p>
    <button class="like-btn">Like <3</button>`
  toyCollection.append(toyDiv)
}

initialize()
