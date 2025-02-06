// async function getQuote() {
//   //fetch quote from server and save in a constant named quotes
//   const data = await fetch('https://zenquotes.io/api/quotes');
//   const quotes = await data.json();
//   return quotes;
//   console.log(record);
//   document.getElementById('date').innerHTML = record.data[0].date;
//   document.getElementById('areaName').innerHTML = record.data[0].areaName;
//   document.getElementById('latestBy').innerHTML = record.data[0].latestBy;
//   document.getElementById('deathNew').innerHTML = record.data[0].deathNew;
// }
// fetchData();

// load content first 
document.addEventListener("DOMContentLoaded", () => {
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  const button = document.getElementById('new-quote')


async function getQuote() {
  //fetch quote from server and save in a constant named quotes
  const data = await fetch('https://zenquotes.io/api/quotes');
  const quotes = await data.json();
  //randomly select a quoteObject inside the quotes
  const quoteObject = quotes[Math.floor(Math.random()*quotes.length)]
  //extract the quote and author from the quote object
  const quote = quoteObject.q
  const author = quoteObject.a
  //return the quote and author as an object with two key-value pairs
  return {"quote":quote, 'author':author}
  console.log()
  //{'quote':"blah blah blah", 'author':'John Doe'}
  }
}

});

//create a function to update the popup window with the quote and author
function updatePopup(q)

//fetch data from the quote api(https://zenquotes.io/api/quotes)
//Get the quote and author from the api server
//present the quote and author name
//add button to switch between lock and unlock the code refresh
