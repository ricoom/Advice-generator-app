
const quote_text=document.getElementById('quote');
const refresh=document.getElementById('dice_btn')
const author=document.getElementById('author')
 let quotes=[]
 let i=0;

 window.onload=nexQuote();

 async function nexQuote() {
  
  
   await fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    quotes=[...data]
  console.log("data loaded")
  });

  }
  refresh.addEventListener('click' ,()=>{
  quote_text.innerText=quotes[i].text;
  author.innerText=quotes[i].author;
  i++;
 })
