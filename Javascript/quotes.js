let quotesarray = [
    "“Give a man a fire and he's warm for a day, but set fire to him and he's warm for the rest of his life.”",
    "“It is said that your life flashes before your eyes just before you die. That is true, it's called Life.”",
    "“Stories of imagination tend to upset those without one.”",
    "“If cats looked like frogs we'd realize what nasty, cruel little bastards they are. Style. That's what people remember.”",
    "“Time is a drug. Too much of it kills you.”",
    "“Wisdom comes from experience. Experience is often a result of lack of wisdom.”",
    "“In the beginning there was nothing, which exploded.”",
    "“It's not worth doing something unless someone, somewhere, would much rather you weren't doing it.”",
    "“I'll be more enthusiastic about encouraging thinking outside the box when there's evidence of any thinking going on inside it.”",
    '“"And what would humans be without love?"RARE, said Death.”',
    "“Real stupidity beats artificial intelligence every time.”"
];

let sourcetag = [
    "― Terry Pratchett, Jingo",
    "― Terry Pratchett, The Last Continent",
    "― Terry Pratchett",
    "― Terry Pratchett, Lords and Ladies",
    "― Terry Pratchett, Small Gods",
    "― Terry Pratchett",
    "― Terry Pratchett, Lords and Ladies",
    "― Terry Pratchett",
    "― Terry Pratchett",
    "― Terry Pratchett, Sourcery",
    "― Terry Pratchett, Hogfather"
];

let upperQ = document.getElementById("upperQuotes");
let lowerQ = document.getElementById("lowerQuotes");
let refreshQ = document.getElementById("QuoteRefreshBtn");
let initialRandom =  (Math.random() * 10).toFixed(0);

function staticQuote(){
    upperQ.innerHTML = quotesarray[initialRandom];
    lowerQ.innerHTML = sourcetag[initialRandom];
}
staticQuote();

refreshQ.addEventListener('click',function refreshTheQuotes(event){
    
    let randomi = Math.random() * 10;
    console.log(randomi.toFixed(0));

    
    upperQ.innerHTML = quotesarray[randomi.toFixed(0)];
    lowerQ.innerHTML = sourcetag[randomi.toFixed(0)];

    
    event.preventDefault();
});

