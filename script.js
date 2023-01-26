
const quote_text=document.getElementById('quote');
const refresh=document.getElementById('dice_btn')
const author=document.getElementById('author')

 let i=0
 async function nexQuote() {
  
  
   await fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
  quote_text.innerText=data[i].text;
  author.innerText=data[i].author;

  });

  }
  refresh.addEventListener('click' ,()=>{
i++;
 })