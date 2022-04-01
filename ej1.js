function calculadora()
{
    const n1 = parseFloat(document.getElementById("n1").value); 
    const n2 = parseFloat(document.getElementById("n2").value);
    const op = document.getElementById("opcion").value;
    let nt = 0;

    if(op == "sumar")
    {
        nt = n1 + n2;
        alert("La suma entre "+n1+" y "+n2+" ha dado como resultado "+nt);
    }
    else if(op == "restar")
    {
        nt = n1 - n2;
        alert("La resta entre "+n1+" y "+n2+" ha dado como resultado "+nt);
    }
    else if(op == "multiplicar")
    {
        nt = n1 * n2;
        alert("La multiplicación entre "+n1+" y "+n2+" ha dado como resultado "+nt);
    }
    else if(op == "dividir")
    {
        nt = n1 / n2;
        alert("La división entre "+n1+" y "+n2+" ha dado como resultado "+nt);
    }
    else
    {
        alert("No has elegido ningún tipo de operación...");
    }
}