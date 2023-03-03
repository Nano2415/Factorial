const num = document.querySelector(".numero")
const btn = document.querySelector(".btn")
const p = document.querySelector(".resultado")

btn.addEventListener('click',calcular)

function calcular() {
    let factorial = 0
if (Number(num.value) == Number(num.value)&& Number(num.value) > 0) {
  
  for (let i = 1; i < num.value; i++) {

    factorial = factorial + num.value * i

    if (i < num.value) {
        console.log(factorial)
 p.innerHTML = `El factorial de ${num.value} es ${factorial}`
    }
}
 
}

else{
    
    console.log("no es un numero/numero inferior a cero")
    p.innerHTML = "no es un numero/El numero no puede ser negativo "
}
}

