document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("button").addEventListener("click", calcularDescuento);

    animateCSS('.container', 'fadeIn');

    document.getElementById("monto").focus();
});

function calcularDescuento(){
    let monto = parseFloat(document.getElementById("monto").value);

    if(isNaN(monto) || monto <= 0){
        mostrarError("Por favor ingrese un monto válido");
        return;
    }

    let descuento = 0;

    if(monto >= 1000){
        descuento = 15;
    }else if(monto >= 500){
        descuento = 10;
    }else{
        descuento = 5;
    }

    let montoFinal = monto - (monto * (descuento / 100));
    let montoAhorrado = monto * (descuento / 100);

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `
        <div class="resultado-contenido">
            <div class="resultado-item">Precio original: <span class="precio-original">$${monto.toFixed(2)}</span></div>
            <div class="resultado-item">Descuento aplicado: <span class="descuento-aplicado">${descuento}%</span></div>
            <div class="resultado-item">Ahorro: <span class="ahorro">$${montoAhorrado.toFixed(2)}</span></div>
            <div class="resultado-item total">Total a pagar: <span class="total-pagar">$${montoFinal.toFixed(2)}</span></div>
        </div>
    `;

    animateCSS('#resultado', 'fadeInUp');

    mostrarAlertaExito(`¡Se ha aplicado un ${descuento}% de descuento! Total a pagar: $${montoFinal.toFixed(2)}`);
}

function limpiarCampos(){
    document.getElementById("monto").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("monto").focus();

    animateCSS('.container', 'pulse');
}

function mostrarError(mensaje){
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<div class="error-mensaje"><i class="fas fa-exclamation-circle"></i> ${mensaje}</div>`;
    animateCSS('#resultado', 'shakeX');
}

function mostrarAlertaExito(mensaje){
    const alerta = document.createElement('div');
    alerta.className = 'alerta-personalizada';
    alerta.innerHTML = `
        <div class="alerta-contenido">
            <i class="fas fa-check-circle"></i>
            <p>${mensaje}</p>
        </div>
    `;

    document.body.appendChild(alerta);

    setTimeout(() =>{
        alerta.classList.add('mostrar');
    }, 10);

    setTimeout(() =>{
        alerta.classList.remove('mostrar');
        setTimeout(() =>{
            document.body.removeChild(alerta);
        }, 500);
    }, 4000);
}

function animateCSS(element, animation){
    const node = document.querySelector(element);
    node.classList.add('animated', animation);

    function handleAnimationEnd(){
        node.classList.remove('animated', animation);
        node.removeEventListener('animation', handleAnimationEnd);
    }

    node.addEventListener('animationed', handleAnimationEnd);
}