//inicio javaScript
//Muestra el formulario 1 al hacer click en el link 1 (si es que está oculto)
document.getElementById("link1").onclick = function () {
    var form1 = document.getElementById("formulario1");
    if (form1.style.display == "none") {
        form1.style.display = "block";
    }
}

//Muestra el formulario 2 al hacer click en el link 2 (si es que está oculto)
document.getElementById("link2").onclick = function () {
    var form1 = document.getElementById("formulario2");
    if (form1.style.display == "none") {
        form1.style.display = "block";
    }
}

//al cargar la página, obtiene el tamaño de pantalla y en relación a eso, muestra o no los formularios
document.body.onload = function () {
    var form2 = document.getElementById("formulario1");
    var form3 = document.getElementById("formulario2");
    var ancho = window.innerWidth;
    if (ancho < 768) {
        form2.style.display = "none";
        form3.style.display = "none";
    }
}

//almacena el elemento formulario 1
let form1 = document.getElementById("formulario1");

//hace la función nombrecorreo1 cuando se activa el evento de submit en el formulario
form1.addEventListener("submit", function (evento) {
    evento.preventDefault();
    nombrecorreo1();
})

//función que almacena el nombre y el correo y luego revisa si son validos o no mediante la función valido()
function nombrecorreo1() {
    let name = document.getElementById("nombre").value;
    let email = document.getElementById("correo").value;
    if (valido() == true) {
        alert("Muchas gracias " + name + " hemos recibido sus sugerencia y enviaremos una pronta respuesta al correo " + email);
    }
}

//esá función revisa que los inputs nombre y correo no esten vacíos, si no lo están, devuelve un true
function valido() {
    let name = document.getElementById("nombre").value;
    let email = document.getElementById("correo").value;
    let valido = false;
    if (name == "") {
        alert("El campo 'nombre' es obligatorio");
    } if (email == "") {
        alert("El campo 'email' es obligatorio");
    } else {
        valido = true;
        return valido;
    }
}
//fin javascript

//inicio jquery
$(function () {

    //captura nombre, correo y asistentes del formulario 2 para mostrarlos en una alerta
    $("#formulario2").submit(function (e) {
        e.preventDefault();
        alert("Estimado(a): " + $("#nombre2").val() + " agradecemos por reservar con nosotros. \n Hemos registrado: " + $("#asistentes").val() + " asistentes. \n Se ha enviado el código de confirmación al corre: " + $("#correo2").val())
    });

    //cada una de las funciones muestra la imagen en modal y en grande, además agrega la descripción de cada tarjeta correspondiente
    $("#card1").click(function () {
        $(".modal-title").text("Bebibas");
        $("#descripcion").text($("#cardtext1").text());
        $("#imgbody").attr("src", "../sesión 12 - Drilling/Assets/img/bebidas.jpg");
        $("#imgbody").css({
            width: "100%"
        });
        $("#myModal").show();
    });

    $("#card2").click(function () {
        $(".modal-title").text("Tablas");
        $("#descripcion").text($("#cardtext2").text());
        $("#imgbody").attr("src", "../sesión 12 - Drilling/Assets/img/tablas.jpg");
        $("#imgbody").css({
            width: "100%"
        });
        $("#myModal").show();
    });

    $("#card3").click(function () {
        $(".modal-title").text("Shops");
        $("#descripcion").text($("#cardtext3").text());
        $("#imgbody").attr("src", "../sesión 12 - Drilling/Assets/img/shop.jpeg");
        $("#imgbody").css({
            width: "100%"
        });
        $("#myModal").show();
    });

    //al hacer click en el botón cerrar del modal 1, lo esconde
    $("#btncerrar").click(function () { 
        $("#myModal").hide();
    });

    //jquery para abrir modal 2
    $("#nosotros").click(function () { 
        $("#myModal2").show();
    });

    //al hacer click en el botón cerrar del modal 2, se cierra
    $("#btncerrar2").click(function () { 
        $("#myModal2").hide();
    });

});
//fin jquery