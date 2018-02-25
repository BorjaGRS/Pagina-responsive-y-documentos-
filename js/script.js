

$('#fav').on('click',function(){
document.getElementById('fav').src = "imagenes/megusta.png";
});
$('#fav1').on('click',function(){
document.getElementById('fav1').src = "imagenes/megusta.png";
});
$('#fav2').on('click',function(){
document.getElementById('fav2').src = "imagenes/megusta.png";
});


$('.cookie').on('click', function(){
$('.cookie').css('display','none');
});

document.getElementsByClassName('a')[0].addEventListener('click',function(){

    var texto= document.createElement("textarea");
    var boton = document.createElement("button");
    var parra = document.createElement("p");
    var pa = document.createElement("p");
    boton.textContent="Enviar";
    parra.textContent="- Perfectas futbol 11, un like ";
    pa.textContent="- Preciosas zapatillas ";
    texto.setAttribute("name","comet");
    pa.setAttribute("id","cambio");
    boton.setAttribute("id","bot");

    boton.addEventListener('click', function(){
    document.getElementById("cambio").innerHTML = " - " + texto.value;

});
    
    document.getElementById("todo").appendChild(parra);
    document.getElementById("todo").appendChild(pa);
    document.getElementById("todo").appendChild(texto);
    document.getElementById("todo").appendChild(boton);
  
});


document.getElementsByClassName('b')[0].addEventListener('click',function(){

    var texto1= document.createElement("textarea");
    var boton1= document.createElement("button");
    var parra1= document.createElement("p");
    var pa1 = document.createElement("p");
    boton1.textContent="Enviar";
    parra1.textContent="- Perfectas futbol 11, un like ";
    pa1.textContent="- Preciosas zapatillas ";
    texto1.setAttribute("name","comet");
    pa1.setAttribute("id","cambio1");
    boton1.setAttribute("id","bot");

    boton1.addEventListener('click', function(){
    document.getElementById("cambio1").innerHTML = " - " + texto1.value;

});
    
    document.getElementById("todo1").appendChild(parra1);
    document.getElementById("todo1").appendChild(pa1);
    document.getElementById("todo1").appendChild(texto1);
    document.getElementById("todo1").appendChild(boton1);
  
});

document.getElementsByClassName('c')[0].addEventListener('click',function(){

    var texto2= document.createElement("textarea");
    var boton2= document.createElement("button");
    var parra2= document.createElement("p");
    var pa2 = document.createElement("p");
    boton2.textContent="Enviar";
    parra2.textContent="- Perfectas futbol 11, un like ";
    pa2.textContent="- Preciosas zapatillas ";
    texto2.setAttribute("name","comet");
    pa2.setAttribute("id","cambio2");
    boton2.setAttribute("id","bot");

    boton2.addEventListener('click', function(){
    document.getElementById("cambio2").innerHTML = " - " + texto2.value;

});
    
    document.getElementById("todo2").appendChild(parra2);
    document.getElementById("todo2").appendChild(pa2);
    document.getElementById("todo2").appendChild(texto2);
    document.getElementById("todo2").appendChild(boton2);
  
});


/*BUSCADOR*/


var urlWeather ="https://raw.githubusercontent.com/umpirsky/country-list/master/data/es/country.json";
  

var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};



function buscador () {

 document.getElementById("sugerencias").innerHTML = '';

getJSON(urlWeather).then(function(data) {

          var pal = document.getElementById("buscars").value;
            var tam = pal.length;
            for(var i in data){
                var nombre = data[i];
                var str = nombre.substring(0,tam);
                if(pal.length <= nombre.length && pal.length != 0 && nombre.length != 0){
                    if(pal.toLowerCase() == str.toLowerCase()){
                        var node = document.createElement("LI");
                        var textnode = document.createTextNode(data[i]);
                        node.appendChild(textnode);
                        document.getElementById("sugerencias").appendChild(node);
                    }
                }
            }
        }



, function(status) {
  alert('Algo fue mal.');
});



}
















