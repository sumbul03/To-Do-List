var myNodelist = document.getElementsByTagName("li"); 


var close = document.getElementsByClassName("close"); 

var  count  =  0;

// Create a new list item when clicking on the "Submit" button

function newElement() {

    count++;    
    document.getElementById('count').innerHTML  =  count;
    var li = document.createElement("li"); //create an element Li//

    var inputValue = document.getElementById("myInput").value; 

    var t = document.createTextNode(inputValue); 

    li.appendChild(t); 

    if (inputValue === '') { 
        alert("You must write something!");
    } else { 
        document.getElementById("item").appendChild(li);
    }

    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN"); 

    var txt = document.createTextNode("\u00D7"); 

    span.className = "close"; 
    span.appendChild(txt); 
    li.appendChild(span); 

    //close button will remove the item from list
        for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            count--;            
            document.getElementById('count').innerHTML  =  count;
        }
    }
}