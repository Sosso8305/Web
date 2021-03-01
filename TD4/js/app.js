function somme() {
    var s = 0;
    var nombres = document.getElementsByName('nombre');
    for (var i = 0; i < nombres.length; i++) {
        if (nombres[i].checked) s = s + parseInt(nombres[i].value);
    }
    alert("la somme vaut: " + s);
    average()
}

function average(){
    var a=0
    var cpt=0
    var nombres = document.getElementsByName('nombre');
    for (var i = 0; i < nombres.length; i++) {
        if (nombres[i].checked) {
            a = a + parseInt(nombres[i].value);
            cpt ++
        }
    }
    a=a/cpt

    var IDspan = document.querySelector("#average")

    if(IDspan){
        IDspan.innerHTML="average: "+a
    }

}

function creer() {
    const nombre = document.querySelector("#combien")

    const Mdiv = document.querySelector("#check")

    if(Mdiv){
        Mdiv.remove()
    }

    var mainDiv = document.createElement("div")
    mainDiv.setAttribute("id","check")

    for(var i=1; i <= parseInt(nombre.value);i++){

        var newInput = document.createElement("input")
        newInput.setAttribute("type","checkbox")
        newInput.setAttribute("name","nombre")
        newInput.setAttribute("value",i)

        var newLabel = document.createElement("label")
        newLabel.appendChild(document.createTextNode(i))

        mainDiv.appendChild(newInput)
        mainDiv.appendChild(newLabel)

    }

    var newInput = document.createElement("input")
    newInput.setAttribute("id","somme")
    newInput.setAttribute("type","button")
    newInput.setAttribute("value","faire la somme")
    newInput.setAttribute("onclick","somme();")

    var newSpan =document.createElement("span")
    newSpan.setAttribute("id","average")

    mainDiv.appendChild(document.createElement("br"))
    mainDiv.appendChild(newInput)
    mainDiv.appendChild(newSpan)

    
    document.body.appendChild(mainDiv)
}