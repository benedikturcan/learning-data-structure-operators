'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received ${time}, this customer ordered meal ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} and the delivery address will be ${address}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your deliciouse pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy arr
// const mainMenuCopy = [...restaurant.mainMenu];

//join Arr
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Interables are arrays, strings, maps sets
// const str = 'Benedikt';
// const letters = [...str, '', 'S.'];
// console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1"),
//   prompt("Let's make pasta! Ingredient 2"),
//   prompt("Let's make pasta! Ingredient 3"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = {
//   founndingYear: 1998,
//   ...restaurant,
//   founder: 'Benedikt',
// };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristaurante Roma';
// console.log(restaurantCopy);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Pannwitzallee 10',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating  variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // nested ojb
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// [main, secondary] = [secondary, main];

// // Receive 2 return values from a function
// const [starter, mainCourses] = restaurant.order(2, 0);
// console.log(starter, mainCourses);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// Use any data typ, return any data type and shor-circuiting

// console.log('---- OR ----');

// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log('---- AND ----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'Beneditk');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'onions');
// }

// restaurant.orderPizza && restaurant.orderPizza;

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item);
// }

// console.log([...menu.entries()]);

// if (restaurant.openingHours && restaurant.openingHours.mon.open)
//   console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open);

// // properties names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days:`;

// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// // Property values
// const values = Object.values(openingHours);
// console.log(values);

// // Entrie Object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close ${close}`);
// }

// Coding Challenge 2

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of Object.values(game.odds)) average += odd;
// average /= odds.length;
// console.log(average);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet);

// console.log(new Set('Benedikt'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Coke'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');

// ordersSet.delete('Risotto');
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('Benedikt').size);

// const rest = new Map();
// rest.set('Name', 'Classico Italiano');
// rest.set(1, 'Rome, Italy');
// rest.set(2, 'Lisbon, Portugal');

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are close');

// console.log(rest.get('Name'));
// console.log(rest.get(true));

// console.log('--- If open or not ---');
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);

// rest.set([1, 2], 'Test');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get([1, 2]));

// console.log('---- MAPS ITERATION ----');

// const question = new Map([
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'C'],
//   [(2, 'Java')],
//   [(3, 'JavaScript')],
//   ['correct', 3],
//   [true, 'Correct answer'],
//   [false, 'Try again'],
// ]);
// console.log(question);

// //Quizz app
// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// // const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// //convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log(...[question.keys()]);
// console.log(question.values());

// Coding challenge No. 3
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'First' : 'Second';
//   console.log(`[ ${half} HALF ] ${min}: ${event}`);
// }

// console.log('--- STINGS TRANING HERE ----');

// const airline = 'Lufthansa Airline';
// // const plane = 'A320';

// console.log(plane[0]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('s'));
// console.log(airline.lastIndexOf('s'));

// console.log(airline.indexOf('hansa'));

// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf('')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are alread middleseats, just to know
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('You are a luck guy, because you have a premium seat');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log('--- SECTION 122 ---');

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'bEnEdIkT';
// const passengerLowercase = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLowercase[0].toUpperCase() + passengerLowercase.slice(1);
// console.log(passengerCorrect);

// // Check email
// const email = 'benedikt_urcan@hotmail.de';
// const loginEmail = '  Benedikt_Urcan@Hotmail.De';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(normalizedEmail === email);

// // Replacing parts of a string
// const priceGB = '288,97$';
// const priceUS = priceGB.replace('$', '€').replace(',', '.');
// console.log(priceUS);

// const announcement = 'All passengers to Boarding door 23';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// Booleans
// const plane = 'Airbus A320 neo';
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('A'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the new airbus family');
// }

// // Practices exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase().trim();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed to get on board');
//   } else console.log('Welcome on board');
// };

// checkBaggage('I have a laptop, some Food and a Pocket knife');
// checkBaggage('socks and camera');
// checkBaggage('Snacks and a gUn for protEction');

// console.log('a+very+nice+string'.split('+'));
// console.log('Benedikt Urcan'.split(' '));

// const [firstName, lastName] = 'Benedikt Urcan'.split(' ');
// console.log(firstName, lastName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// console.log('--- NEW PART ---');
// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('benedikt urcan');

// // padding a string
// const message = 'go to gate 23';
// console.log(message.padStart(25, '+').padEnd(35, '+'));

// const maskCreditCard = function (num) {
//   const str = num + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(2349829348234));
// console.log(maskCreditCard('134923f40213'));

// // Repeat
// const msg2 = 'Bad weather, all departures are delayed. ';
// console.log(msg2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in the line`);
// };
// planesInLine(7);
// planesInLine(19);
// planesInLine(23);

// Coding challenge 4

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const row of rows) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}`);
//   }
// });

// underscore_case;
// first_name;
// Some_Variable;
// calculate_AGE;
// delayed_departure;

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '!!' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(50);
  console.log(output);
}
