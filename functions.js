let indices = [];

async function cargarPaises() {
    console.log("probando cargar paises");
    
    try {
        limpiarOneCard();
        limpiarCards();
    } catch (error) {

    }


    const respuesta = await fetch('https://restcountries.com/v2/all');
    const paises = await respuesta.json();

    console.log(respuesta);
    console.log(paises);
    
    var number = 0;
    
    paises.forEach(element => {
        
        try {
            console.log(element.altSpellings[1]);
        } catch (error) {
            console.log("error");
        }
       

        try {
            let pais = "<div id='card' style='width: 18rem;'>";
            pais += "<img id='flag"+number+"' loading='lazy' src='"+element.flags['png']+"' style='width: 288px; height:229px;' alt='Card image cap'>";
            pais += "<div class='card-body'>";
            pais += "<h5 class='card"+number+"'> " + element.name + "</h5>";
            pais += "<label id='name"+number+"'>CAPITAL: "+element.capital+"</label> ";
            pais += "<br>";
            pais += "<label id='currencie"+number+"'>MONEDA: "+element.currencies[0].name+"</label> ";
            pais += "<br>";
            pais += "<button type='button' id='buttom"+number+"' class='btn btn-primary' onclick='detallarCard()'>Detallar</button>";
            pais += "</div>";
            pais += "</div>";
    
            document.getElementById("cuerpo").innerHTML += pais;
        } catch (error) {
            
        }
        
    
        try {
            let lista = "<li><a class='dropdown-item' id='"+number+"' onclick='pintarCard()' href='#'>"+element.alpha3Code+"</a></li>"
            document.getElementsByClassName("dropdown-menu")[0].innerHTML += lista;
        } catch (error) {
            
        }

        number++;

        indices.push(number);

        /* console.log("indices: " + indices); */

    });
}

async function randomPaises () {
    try {
        limpiarMenu();
        limpiarOneCard();
        limpiarCards();
    } catch (error) {

    }


    const respuesta = await fetch('https://restcountries.com/v2/all');
    const paises = await respuesta.json();

    random = paises.sort(()=> Math.random() - 0.5);

    console.log(respuesta);
    console.log(random);
    
    
    
    random.forEach(element => {
        
        var number = random.indexOf(element);
        console.log("indice del pais random: " + number);
        try {
            console.log(element.altSpellings[1]);
        } catch (error) {
            console.log("error");
        }
       

        try {
            let pais = "<div id='card' style='width: 18rem;'>";
            pais += "<img id='flag"+number+"' loading='lazy' src='"+element.flags['png']+"' style='width: 288px; height:229px;' alt='Card image cap'>";
            pais += "<div class='card-body'>";
            pais += "<h5 class='card"+number+"'> " + element.name + "</h5>";
            pais += "<label id='name"+number+"'>CAPITAL: "+element.capital+"</label> ";
            pais += "<br>";
            pais += "<label id='currencie"+number+"'>MONEDA: "+element.currencies[0].name+"</label> ";
            pais += "<br>";
            pais += "<button type='button' id='buttom"+number+"' class='btn btn-primary' onclick='detallarCard()'>Detallar</button>";
            pais += "</div>";
            pais += "</div>";
    
            document.getElementById("cuerpo").innerHTML += pais;
        } catch (error) {
            
        }
    });
    
}


function pintarCard(id) {
    console.log("probando pintar card");

    try {
        limpiarOneCard();
    } catch (error) {

    }

    var id = event.target.id;
    console.log(id);
    var alpha3Code = document.getElementsByClassName("card"+id);
    var code = alpha3Code[0].innerHTML.replace("'", "");
    var flag = document.getElementById("flag"+id);
    var flagSrc = flag.src;

    
    var name = document.getElementById("name"+id);
    var nameSrc = name.innerHTML.replace(/["']/g, "");

    var currencie = document.getElementById("currencie"+id);
    var currencieSrc = currencie.innerHTML.replace(/["']/g, "");

    

    let plantilla = "<div class='card' id='flotar' style='width: 30rem;'>";
    plantilla += "<img id='countries' loading='lazy' src='"+flagSrc+"' alt='Card image cap'>";
    plantilla += "<div class='card-body'>";
    plantilla += "<h5 class='card' style='text-align:center;'>"+code+"</h5>";
    plantilla += "<label>"+nameSrc+"</label> ";
    plantilla += "<br>";
    plantilla += "<label>"+currencieSrc+"</label> ";
    plantilla += "<br>";
    plantilla += "<button type='button' class='btn btn-primary' onclick='limpiarOneCard()'>Quitar</button>";
    plantilla += "</div>";
    plantilla += "</div>";

    document.getElementById("oneCard").innerHTML += plantilla;
    

}

function limpiarMenu () {



    document.getElementsByClassName("dropdown-menu").outerHTML = "";

    document.getElementsByClassName("dropdown-menu").outerHTML = "";

    try {
        let div = "<ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>"
        div += "<li><a class='dropdown-item' onclick='cargarPaises()' href='#' >All</a></li>"
        div += "</ul>";
        document.getElementsByClassName("dropdown-menu").innerHTML += div;
    } catch (error) {

    }
}

function limpiarCards() {
    document.getElementById("cuerpo").outerHTML = "";

    try {
        let div = "<div id='cuerpo'>";
        div += "</div>";
        document.getElementById("contenedor").innerHTML += div;
    } catch (error) {
        
    }
}

function limpiarOneCard() {
    document.getElementById("oneCard").outerHTML = "";

    try {
        let div = "<div id='oneCard'>";
        div += "</div>";
        document.getElementById("containerOneCard").innerHTML += div;
    } catch (error) {

    }
}

function detallarCard() {
    try {
        limpiarOneCard();
    } catch (error) {

    }
    window.scrollTo(0, 0);
    var id = event.target.id;
    console.log(id);
    numberId = id.substring(6, id.length);
    console.log(numberId);

    var alpha3Code = document.getElementsByClassName("card"+numberId);
    var code = alpha3Code[0].innerHTML.replace("'", "");
    var flag = document.getElementById("flag"+numberId);
    var flagSrc = flag.src;

    var name = document.getElementById("name"+numberId);
    var nameSrc = name.innerHTML.replace(/["']/g, "");
    var currencie = document.getElementById("currencie"+numberId);
    var currencieSrc = currencie.innerHTML.replace(/["']/g, "");


    let plantilla = "<div class='card' id='flotar' style='width: 30rem;'>";
    plantilla += "<img id='countries' loading='lazy' src='"+flagSrc+"' alt='Card image cap'>";
    plantilla += "<div class='card-body'>";
    plantilla += "<h5 class='card' style='text-align:center;'> "+code+"</h5>";
    plantilla += "<label>"+nameSrc+"</label> ";
    plantilla += "<br>";
    plantilla += "<label>"+currencieSrc+"</label> ";
    plantilla += "<br>";
    plantilla += "<button type='button' class='btn btn-primary' onclick='limpiarOneCard()'>Quitar</button>";
    plantilla += "</div>";
    plantilla += "</div>";

    document.getElementById("oneCard").innerHTML += plantilla;

        
}