function searchList(query)
{
    
    console.log(query)
    var result = document.getElementById("result");
    var coun = document.getElementById("country");
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if(req.readyState === XMLHttpRequest.DONE){
            if(req.status === 200)
            {
                result.innerHTML = req.responseText
            } 
            else
            {
                console.log("Error")
            }
        }
    }
    if (query == "country")
    {
        req.open("GET","http://localhost/info2180-lab5/world.php?country=" + coun.value, false)
    }
    else
    {
        req.open("GET","http://localhost/info2180-lab5/world.php?country=" + coun.value + "&lookup=cities", false)
    }

    req.send();
}

window.onload = function() {
    console.log("Page loaded");
    var  but = document.getElementById("lookup");
    var  cit = document.getElementById("lookupcit");
    but.addEventListener("click", searchList.bind(this,"country"));
    cit.addEventListener("click", searchList.bind(this,"city"));
  
};