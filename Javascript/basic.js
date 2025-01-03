let nextbtn = document.getElementById("next");

var slidearr = document.querySelectorAll(".slide");
var slidetextarr = document.querySelectorAll(".slide1");
var booksupperdiv = document.getElementById("booksheading");
var slidebutton = document.querySelectorAll(".slidebutton");

const theme=[
    {
        "background" : "#f2e0c4",
        "color" : "#ea523d",
        "outline" : "10px solid #a1d2df",
        "outlineoffset" : "-10px"
    },
    {
        "background" : "#372742",
        "color" : "#ffe830",
        "outline" : "10px solid #856783",
        "outlineoffset" : "-10px"
    },
    {
        "background" : "#0a435e",
        "color" : "#e0cc88",
        "outline" : "10px solid #5c8cb0",
        "outlineoffset" : "-10px"
    },
    {
        "background" : "#863a2d",
        "color" : "#f7e227",
        "outline" : "10px solid #ef7f2d",
        "outlineoffset" : "-10px"
    },
    {
        "background" : "#1e3a12",
        "color" : "#f5d71c",
        "outline" : "10px solid #6a9752",
        "outlineoffset" : "-10px"
    },
    {
        "background" : "#f0f2f0",
        "color" : "#333b52",
        "outline" : "10px solid #699c4a",
        "outlineoffset" : "-10px"
    },
    {
        "background" : "#2a4127",
        "color" : "#c2a248",
        "outline" : "10px solid #cfcd9a",
        "outlineoffset" : "-10px"
    },
]


function nextSlide(){//Creating the next slide function.
    
    for(i=0;i<=slidearr.length-1;i++){
        
        //Checking if the 'i' reaches the end of the array and change its value to '0' to cycle the array again.
        if(i==slidearr.length-1){
            slidearr[i].classList.remove("present");
            slidetextarr[i].classList.remove("present");
            i=0;
            slidearr[i].classList.add("present");
            slidetextarr[i].classList.add("present");

            booksupperdiv.style.backgroundColor = theme[i].background;
            booksupperdiv.style.color = theme[i].color;
            booksupperdiv.style.outline = theme[i].outline;
            booksupperdiv.style.outlineOffset = theme[i].outlineoffset;
            slidebutton[0].style.color = theme[i].color;
            slidebutton[1].style.color = theme[i].color;

            break;
        }

        //If the 'i' doesnt reach the end just remove the present class from the current element and give it to the next.
        else if(slidearr[i].classList.contains("present")){

            slidearr[i].classList.remove("present");
            slidetextarr[i].classList.remove("present");
            slidearr[i+1].classList.add("present");
            slidetextarr[i+1].classList.add("present");
            console.log(i);

            booksupperdiv.style.backgroundColor = theme[i+1].background;
            booksupperdiv.style.color = theme[i+1].color;
            booksupperdiv.style.outline = theme[i+1].outline;
            booksupperdiv.style.outlineOffset = theme[i+1].outlineoffset;
            slidebutton[0].style.color = theme[i+1].color;
            slidebutton[1].style.color = theme[i+1].color;
            break;
        }   
    }
    
}

function previousSlide(){//Creating the next slide function.
    
    for(i=slidearr.length-1;i>=0;i--){
        //Checking if the 'i' reaches the end of the array and change its value to '0' to cycle the array again.
        if(i==0){
            slidearr[i].classList.remove("present");
            slidetextarr[i].classList.remove("present");
            i=slidearr.length-1;
            slidearr[i].classList.add("present");
            slidetextarr[i].classList.add("present");

            booksupperdiv.style.backgroundColor = theme[i].background;
            booksupperdiv.style.color = theme[i].color;
            booksupperdiv.style.outline = theme[i].outline;
            booksupperdiv.style.outlineOffset = theme[i].outlineoffset;
            slidebutton[0].style.color = theme[i].color;
            slidebutton[1].style.color = theme[i].color;
            break;
        }

        //If the 'i' doesnt reach the end just remove the present class from the current element and give it to the next.
        else if(slidearr[i].classList.contains("present")){
            slidearr[i].classList.remove("present");
            slidetextarr[i].classList.remove("present");
            slidearr[i-1].classList.add("present");
            slidetextarr[i-1].classList.add("present");

            booksupperdiv.style.backgroundColor = theme[i-1].background;
            booksupperdiv.style.color = theme[i-1].color;
            booksupperdiv.style.outline = theme[i-1].outline;
            booksupperdiv.style.outlineOffset = theme[i-1].outlineoffset;
            slidebutton[0].style.color = theme[i-1].color;
            slidebutton[1].style.color = theme[i-1].color;
            break;
        }   
    }
    
}


function selectBackground(){
    let randomBackground=(Math.random()*(6-0)+0).toFixed(0);
    upperQ.removeAttribute("class");
    console.log(randomBackground);
    
    upperQ.setAttribute("class", `${backgroundarr[randomBackground]}`);
    upperdiv.setAttribute("class", `${backgroundarr[randomBackground]}`);
    lowerQ.style.color = `${colorarr[randomBackground]}`;

    refreshQ.style.color = `${colorarr[randomBackground]}`;
    refreshQ.style.borderColor = `${borderarr[randomBackground]}`;

    upperdiv.style.color = `${colorarr[randomBackground]}`;
    upperdiv.style.borderColor = `${borderarr[randomBackground]}`;
    
}