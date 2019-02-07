let cards = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King'
]

let suit = ['Clubs', 'Diamonds', 'Hearts', 'Spades']

let deck = []

const buildDeck = () => {
  for (let cardsvalue = 0; cardsvalue < cards.length; cardsvalue++) {
    for (let suitvalue = 0; suitvalue < suit.length; suitvalue++) {
      let cardText = cards[cardsvalue] + ' of ' + suit[suitvalue]
      deck.push(cardText)
    }
  }
}

const shuffleDeck = () => {
  for (let i = 51; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[deck[i], deck[j]] = [deck[j], deck[i]]
  }
}

const dealCard = event => {
  let drawnCard = deck.splice(0, 1)
  const _li = document.createElement('li')
  _li.textContent = drawnCard
  document.querySelector('ul').appendChild(_li)
  // for (let i = 51; i >= 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1))
  //   let hand = deck.splice(j, 1)
  //   document.querySelector('Hand').textContent = hand
  //   document.querySelector('Hand').appendChild(hand)
  // }
}

const main = () => {
  buildDeck()
  shuffleDeck()

  console.log(deck)

  const button = document.querySelector('.draw')
  button.addEventListener('click', dealCard)
}

document.addEventListener('DOMContentLoaded', main)
