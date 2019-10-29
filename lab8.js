/********************************************/


/********************************************/
window.onload = function(){
//JSON object for a Book
var book = 
    {
        title:"Web Design with HTML, CSS, JavaScript and jQuery Set", 
        author:"Jon Duckett", 
        pages:1152, 
        publisher: "Wiley",
        ISBN: "978-1118907443"
    };
 // convert JSON to String format
var myJSON = JSON.stringify(book);
//display
document.getElementById("result").innerHTML =  myJSON;
//get JSON in string format
var str = document.getElementById("str").innerHTML;
//parse it to JSON object
var myBook = JSON.parse(str);
//display
document.getElementById("result2").innerHTML =  myBook.title;

//use for loop to iterate over key and value pairs
for (x in myBook) {
    document.getElementById("result3").innerHTML += x+" : "+ myBook[x]+"<br/>";
} 
};

