let player = {
   name: "faris",
   chips: 999
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEL = document.getElementById("message__el")
let sumEl = document.getElementById("sum__el")
let cardEl = document.querySelector(".cards__el")
let playerEl = document.querySelector(".player__el")
playerEl.textContent = player.name + ": $" + player.chips
function getRandomCard(){
   let blackjackRandom = Math.floor (Math.random() *13) + 1
   if (blackjackRandom === 1){
      return 11
   }
   else if(blackjackRandom > 10){
      return 10
   }
   return blackjackRandom
}

function startGame(){
   isAlive = true
   let firstCard = getRandomCard()
   let secondCard = getRandomCard()
   cards.push(firstCard, secondCard)
   sum = firstCard + secondCard
   cardEl.textContent = "Cards:" + sum
   renderGame()
}

function renderGame(){
   cardEl.textContent ="Cards: "
   for ( i = 0; i < cards.length; i++)
   cardEl.textContent += cards[i] + " "

   sumEl.textContent = "Sum: " + sum

if (sum <= 20){
   message = "do you want to draw another card?"
}  
else if (sum === 21){
   message = "You got blackjack"
   hasBlackJack = true
}
else {
   message = "you are out of the game noobs"
   isAlive = false
}
messageEL.textContent = message
}
function newCard(){
   if(isAlive === true && hasBlackJack === false){
   let cardNum = getRandomCard()
   cards.push(cardNum)
   sum += cardNum
   renderGame()
   }

}
