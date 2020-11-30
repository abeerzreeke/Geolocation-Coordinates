//Exercise 3 : Get The User’s Geolocation Coordinates

let newBody = document.querySelector('body')

let newSubmit = document.createElement('button')
let newTextSub = document.createTextNode('Geolocation')
newSubmit.setAttribute('onclick','location()')

newSubmit.style.backgroundColor = '#4CAF50'
newSubmit.style.color = 'white'
newSubmit.style.padding = '14px 20px'
newSubmit.style.margin = '8px 0'
newSubmit.style.border = 'none'
newSubmit.style.cursor = 'pointer'
newSubmit.setAttribute('onclick','getLocation()')

newBody.appendChild(newSubmit)
newSubmit.appendChild(newTextSub)

let newP = document.createElement('p')
newP.id = 'demo'

newBody.appendChild(newP)