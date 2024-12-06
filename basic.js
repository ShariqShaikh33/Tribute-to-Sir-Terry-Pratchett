let nextbtn = document.getElementById("next");

var slidearr = document.querySelectorAll(".slide");

function nextSlide(){//Creating the next slide function.
    
    for(i=0;i<=slidearr.length-1;i++){
        //Checking if the 'i' reaches the end of the array and change its value to '0' to cycle the array again.
        if(i==slidearr.length-1){
            slidearr[i].classList.remove("present");
            i=0;
            slidearr[i].classList.add("present");
            break;
        }

        //If the 'i' doesnt reach the end just remove the present class from the current element and give it to the next.
        else if(slidearr[i].classList.contains("present")){
            slidearr[i].classList.remove("present");
            slidearr[i+1].classList.add("present");
            break;
        }   
    }
    
}

function previousSlide(){//Creating the next slide function.
    
    for(i=slidearr.length-1;i>=0;i--){
        //Checking if the 'i' reaches the end of the array and change its value to '0' to cycle the array again.
        if(i==0){
            slidearr[i].classList.remove("present");
            i=slidearr.length-1;
            slidearr[i].classList.add("present");
            break;
        }

        //If the 'i' doesnt reach the end just remove the present class from the current element and give it to the next.
        else if(slidearr[i].classList.contains("present")){
            slidearr[i].classList.remove("present");
            slidearr[i-1].classList.add("present");
            break;
        }   
    }
    
}