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
let upperdiv = document.getElementById("quoteshead");
let refreshQ = document.getElementById("QuoteRefreshBtn");
let initialRandom =  (Math.random() * 10).toFixed(0);


function staticQuote(){
    upperQ.innerHTML = quotesarray[initialRandom];
    lowerQ.innerHTML += sourcetag[initialRandom];
}
staticQuote();


let backgroundarr=["bookcolour1","bookcolour2","bookcolour3","bookcolour4","bookcolour5","bookcolour6","bookcolour7"]
let colorarr = ["#ea523d","#ffe830","#e0cc88","#f7e227","#f5d71c","#333b52","#c2a248"];
let borderarr = ["#a1d2df","#856783","#5c8cb0","#ef7f2d","#6a9752","#699c4a","#cfcd9a"];
let terryimage = document.getElementById("pterryMainDivleft");
let terrytext = document.getElementById("pterryMainDivright");
let navlist = document.getElementById("navList");
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
//let d = document.getElementById("d");
let e = document.getElementById("e");

function selectBackground(){
    let randomBackground=(Math.random()*(6-0)+0).toFixed(0);
    upperQ.removeAttribute("class");


    navlist.setAttribute("class",`${backgroundarr[randomBackground]}`+" lrborder");
    a.style.color = `${colorarr[randomBackground]}`;
    b.style.color = `${colorarr[randomBackground]}`;
    c.style.color = `${colorarr[randomBackground]}`;
    //d.style.color = `${colorarr[randomBackground]}`;
    e.style.color = `${colorarr[randomBackground]}`;

    terryimage.setAttribute("class",`${backgroundarr[randomBackground]}`);
    terrytext.setAttribute("class",`${backgroundarr[randomBackground]}`);
    upperQ.setAttribute("class", `${backgroundarr[randomBackground]}`);
    upperdiv.setAttribute("class", `${backgroundarr[randomBackground]}`);
    lowerQ.style.color = `${colorarr[randomBackground]}`;

    refreshQ.style.color = `${colorarr[randomBackground]}`;
    refreshQ.style.borderColor = `${borderarr[randomBackground]}`;

    upperdiv.style.color = `${colorarr[randomBackground]}`;
    upperdiv.style.borderColor = `${borderarr[randomBackground]}`;
    
}
selectBackground();


refreshQ.addEventListener('click',function refreshTheQuotes(event){
    
    let randomi = Math.random() * 10;
    
    upperQ.innerHTML = quotesarray[randomi.toFixed(0)];
    lowerQ.innerHTML = sourcetag[randomi.toFixed(0)];
    selectBackground();
    
    event.preventDefault();
});

