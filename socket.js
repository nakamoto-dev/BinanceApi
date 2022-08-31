
// initialise a websocket
let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');

//get the id of html element and pass into a function
let stockPriceElement = document.getElementById('stock-price');

// set the price to null at a start
let lastPrice = null;

// initialise an event to trigger when message reaches us
ws.onmessage = (event) => {
   //set the datareceived into an object
    let stockObject = JSON.parse(event.data);
   
    //initialie the price and trim to 2 decimal place
    let price = parseFloat(stockObject.p).toFixed(2)
    //set the value to html element
    stockPriceElement.innerText = price;
    //show green on increase and red on drop
    stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';

    //store last price for new socket data
    lastPrice = price;
}
