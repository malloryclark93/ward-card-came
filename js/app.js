let deckId = ''

// data displayed on button click
document.getElementById('new-deck').addEventListener('click', function() {
  fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
  .then(response => response.json())
  .then(data => {
  deckId = data.deck_id
  console.log(data)
    })
})

// get data for new 2 cards drawn
document.getElementById('draw-cards').addEventListener('click', function(){
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
  .then(response => response.json())
  .then(data => {
    document.getElementById('images').innerHTML = `
    <img src="${data.cards[0].image}" />
    <img src="${data.cards[1].image}" />`
    console.log(data)
  })
})

// document.getElementById("draw-cards").addEventListener("click", () => {
//   fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
//       .then(res => res.json())
//       .then(data => console.log(data))
// })

