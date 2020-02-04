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
  let toyNew = toy
  let toyCard = document.createElement('div')
  toyCard.className = 'card'
  toyCard.innerHTML = `
  <h2>${toyNew.name}</h2>
  <img src=${toyNew.image} class="toy-avatar" />
  <p>${toyNew.likes} Likes </p>`
  let likeBtn = document.createElement('button')
  likeBtn.className = 'like-btn'
  likeBtn.innerText = 'Like <3'
  likeBtn.addEventListener('click', e => increaseLikes(e, toyNew))
  toyCard.append(likeBtn)
  toyCollection.append(toyCard)
}

const increaseLikes = (e, toy) => {
  let toyLikes = toy.likes
  let toyId = toy.id
  return fetch(`http://localhost:3000/toys/${toyId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ likes: toyLikes + 1 })
  })
    .then(resp => resp.json())
    .then(showLikes(e))
}

const showLikes = e => {
  // debugger
  e.preventDefault()
  // debugger
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
