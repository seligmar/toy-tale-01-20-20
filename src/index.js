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

const initialize = () => {
  fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    .then(toys => toys.forEach(showToy))
}

const showToy = toy => {
  let toyCard = document.createElement('div')
  toyCard.className = 'card'
  toyCard.innerHTML = `
  <h2>${toy.name}</h2>
  <img src=${toy.image} class="toy-avatar" />
  <p>4 Likes </p>
  <button class="like-btn">Like <3</button>
  `
  toyCollection.append(toyCard)
}
// // if the <script> is at the top of the page, can use
// // document.addEventListener('DOMContentLoaded', () => {})
// // code goes here!

// // call the initialize function at the end of the page- when the page loads
// // make the fetch request and start the js

// initialize()

// if the <script> is at the top of the page, can use
// document.addEventListener('DOMContentLoaded', () => {})
// code goes here!

initialize()
