document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("button").addEventListener("click", calcularDescuento);
});

function calcularDescuento(){
    let monto = parseFloat(document.getElementById("monto").value);
    let descuento = 0;

    if(monto >= 1000){
        descuento = 15;
    }else if(monto >= 500){
        descuento = 10;
    }else{
        descuento = 5;
    }

    let montoFinal = monto - (monto * (descuento / 100));
    document.getElementById("resultado").innerText = `Descuento aplicado: ${descuento}% - Total a pagar: $${montoFinal.toFixed(2)}`;
    alert(`¡Se ha aplicado un ${descuento}% de descuento! Total a pagar: $${montoFinal.toFixed(2)}`);
}

function limpiarCampos(){
    document.getElementById("monto").value = "";
    document.getElementById("resultado").innerText = "";
}