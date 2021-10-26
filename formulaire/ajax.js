function load() {
   
    let paysSelected =document.getElementById('pays').value;

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        // instructions of anonymous function
        console.log("ready state ok");
        if ((xhr.readyState == 4) && (xhr.status == 200)) { // tout s'est passé correctement coté serveur 
           document.getElementById('cityContainer').innerHTML = xhr.responseText
        }
    };

    xhr.open("GET", paysSelected +".html", true);
    xhr.send();

    //faire la condition: si le pays == France => document.getElementById('pays').innerHTML = villes de france
    // sinon => une aure liste des villes
}