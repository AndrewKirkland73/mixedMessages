const quotes = ['Getting out of bed is like the foundation of the discipline, and I think it carries over into everything else'
,'The more you practice, the better you get, the more freedom you have to create.'
,'From the time you take your first breath, you become eligible to die. You also become eligible to find your greatness and become the one warrior'
,'Greatness pulls mediocrity into the mud. Get out there and get after it'];

const randomGen = Math.floor(Math.random()*quotes.length)
const randomQuote= quotes[randomGen]

function generateMessage(){
  console.log(randomQuote);
}

generateMessage()