function ValidarCampos(form)
{
    var nombre = document.getElementById("nombre").value.split(" ");

    var apellido = document.getElementById("apellidos").value.split(" ");

    var expresion_regular_email = /^(.+\@.+\.\w+)$/
/*
    var expresion_regular_contrasenna = /^[a-zA-Z]{8,10}$/;
    */

    var expresion_regular_fecha = /^\d{2}\/\d{2}\/\d{4}$/

    if(nombre.length > 2 || nombre == "")
    {
        alert("El campo del nombre no es válido");
        return false
    }

    if(apellido.length > 2 || apellido == "")
    {
        alert("El campo del apellido no es válido");
        return false
    }

    if(expresion_regular_email.test(form.email.value)==false) {
    alert("El campo del email no es válido");
    return false;
    }

    if(expresion_regular_fecha.test(form.fecha.value)==false) {
        alert("El campo de la fecha no es válido");
        return false;
        
    }
    
    alert("Formulario correcto");

    return true;
}