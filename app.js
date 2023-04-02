console.log('enter')
function fetchQuote(){
    console.log('enter')
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
   
    let random=Math.floor(Math.random()*data.length);
    console.log(data[random])
    document.getElementById("quote").innerText=data[random].text;
    document.getElementById("author").innerText='~'+ data[random].author;
  });
}
