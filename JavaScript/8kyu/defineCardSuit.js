'use strict';
// Codewars - Andreas Sosilo
// 8 kyu - Define a card suit

/*
Task:
-----
You get any card as an argument. Your task is to return a suit of this card.

Our deck (is preloaded):

deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

function defineSuit(card) {
  const deck = [
    '2♣',
    '3♣',
    '4♣',
    '5♣',
    '6♣',
    '7♣',
    '8♣',
    '9♣',
    '10♣',
    'J♣',
    'Q♣',
    'K♣',
    'A♣',
    '2♦',
    '3♦',
    '4♦',
    '5♦',
    '6♦',
    '7♦',
    '8♦',
    '9♦',
    '10♦',
    'J♦',
    'Q♦',
    'K♦',
    'A♦',
    '2♥',
    '3♥',
    '4♥',
    '5♥',
    '6♥',
    '7♥',
    '8♥',
    '9♥',
    '10♥',
    'J♥',
    'Q♥',
    'K♥',
    'A♥',
    '2♠',
    '3♠',
    '4♠',
    '5♠',
    '6♠',
    '7♠',
    '8♠',
    '9♠',
    '10♠',
    'J♠',
    'Q♠',
    'K♠',
    'A♠',
  ];
  let result = '';

  if (deck.includes(card)) {
    const type = card.charAt(card.length - 1);
    switch (type) {
      case '♣':
        result = 'clubs';
        break;
      case '♦':
        result = 'diamonds';
        break;
      case '♥':
        result = 'hearts';
        break;
      case '♠':
        result = 'spades';
        break;
    }
  } else {
    result = `It's not a card!`;
  }
  return result;
}

// TEST CASES
console.log(defineSuit('3♣')); // 'clubs'
console.log(defineSuit('J♥')); // 'hearts'

// BEST PRACTICE
// function defineSuit(card) {
//   const s = {
//     "♣": "clubs",
//     "♠": "spades",
//     "♦": "diamonds",
//     "♥": "hearts"
//   }
//   return s[card.charAt(card.length - 1)]
// }
