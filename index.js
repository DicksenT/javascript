let welcomeEl = document.getElementById("welcome-el")
let myName = "dicksen"
let greeting = "Welcome Back "
welcomeEl.innerText = greeting + myName

let emoji = "⚡️🌪"
welcomeEl.innerText += emoji

let count = 0




let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
   count += 1
   countEl.innerText = count
}

function save(){
   console.log(count)
   let countStr = count + " - "
   saveEl.textContent += countStr
   count = 0
   countEl.textContent = 0

}







