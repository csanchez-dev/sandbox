const formulario = document.getElementById("form-cefaleas");
const estado = document.querySelector("#btn-tension")

function estado_tension(PAS, PAD) {

    /*
       args:
       PAS -> Presion Arterial Sistólica
       PAD -> Presión Arterial Distólica
       return:
       la funcion devuelve el estado de la presion arterial según la guía ESC 2026
   */
    //NOTA: Preguntarle a Manu si el rango de presión es inclusivo o exclusivo en cuanto al intervalo mayor o menor

    if (PAS >= 140 && PAD >= 90) {

        estado.textContent = "Hipertensión‼️"

    } else if ((PAS >= 120 && PAS < 140) && ((PAD >= 70) && PAD <= 89)) {

        estado.textContent = "Tensión elevada 🟡"

    } else if (PAS < 120 && PAD < 70) {

        estado.textContent = "Tensión no elevada 🟢"
    }
}

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const PAD = Number(document.querySelector('input[name="PAD"]').value);
    const PAS = Number(document.querySelector('input[name="PAS"]').value);

    if (PAD === 0 || PAS === 0) {
        alert("Ingrese datos")
    } else {
        try {
            estado_tension(PAS, PAD);
        } catch (error) {
            console.log("Error: " + error);
        }
    }



}
)



