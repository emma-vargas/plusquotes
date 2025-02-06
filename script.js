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

// wait for DOM to load before running the script
document.addEventListener('DOMContentLoaded', async () => {
  // declare el variables for the quote, author and button
  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author');
  const imageElement = document.getElementById('image');
  const button = document.getElementById('new-quote');

  // function to get random quote and author
  // declaring function with asynch bc we're using await to fetch data
  async function getQuote() {
    // using CORS-anywhere to get around CORS issues
    // must go to link and click request token to work
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'http://zenquotes.io/api/quotes';
    try {
      const response = await fetch(targetUrl);
      const quotes = await response.json();

      //randomly select a quoteObject inside the quotes
      const quoteObject = quotes[Math.floor(Math.random() * quotes.length)];
      // array of images
      const images = [
        'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGVsdGk4bHJ3dXBoMW4yOHFiczNjYWZyZXJwZDYwamZzcXlhamxoZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cBncDNrdxga2I/giphy.gif',
        'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2lhMzQ0NnU1OGJyMnVwY21ta2M2Y2FxaXRzcndiaXV6MTBrYWpiOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8vQSQ3cNXuDGo/giphy.gif',
        'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTFlbWFnZDQwaW13cmQ4cWZoaXBkYzBzM3FiOTd1YmQyaXhodTFrNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DOlsI4bO3N9zW/giphy.gif',
        'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHlxOXdjcXVqY21xMndieGg3NDhib2w5Y2VueG8zeWkzNmNkaDh5ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Y42OeCcJI4ufXDQ3oA/giphy.gif',
        'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXdjMXd3NjF2dXhpeXVwZDE0OGIwdXlhaGd1NDE0dW9nYzE3dDIybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EyFVA1LxFZAru/giphy.gif',
      ];

      // randomly select an image from the array
      const getImage = images[Math.floor(Math.random() * images.length)];
      //extract the quote and author from the quote object
      const quote = quoteObject.q;
      const author = quoteObject.a;

      // setting an image el source to getImage (my randomly selected image)
      imageElement.src = getImage;
      // assign inner html of quote el to quote and author
      quoteElement.innerHTML = quote;
      authorElement.innerHTML = author;
      // process the quotes
    } catch (error) {
      console.error('Error fetching the quote:', error);
    }
  }
  // adding a click event listener to the button
  button.addEventListener('click', async () => {
    // call getQuote function when button is clicked
    await getQuote();
  });
  //call the function to get a quote when the page loads
  await getQuote();
});

// *************************   ARTHUR  **************************
// do not click the 'button' on the screen too many times, we only get a limited number of requests per hour
// we need to see how we can add the button at the top of the page, on the tab bar, where we want the button to go? and have it dropped down?
// I created a proxy url bc the link was not working bc of CORS etc, so in order to run it now you have to click on the proxy link and request temporary access: https://cors-anywhere.herokuapp.com/
// I think everything else is done??
