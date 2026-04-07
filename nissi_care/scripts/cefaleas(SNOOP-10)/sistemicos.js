const seccion = document.querySelector("#cefaleas");

const boton_tension = document.querySelector("#btn__tension");

boton_tension.addEventListener("click", function(e) {
    e.preventDefault();
    estadoTension();
});
function estadoTension() {
    /*
        args:
        PAS -> Presion Arterial Sistólica
        PAD -> Presión Arterial Distólica
        return:
        la funcion devuelve el estado de la presion arterial según la guía ESC 2026
    */
//NOTA: Preguntarle a Manu si el rango de presión es inclusivo o exclusivo en cuanto al intervalo mayor o menor

    const PAD = Number(seccion.querySelector('input[name="PAS"]').value);
    const PAS = Number(seccion.querySelector('input[name="PAD"]').value);

    try{ 
        if(PAS >= 140 && PAD >= 90){

           alert('Hipertension');

        } else if ((PAS >= 120 && PAS < 140) && ((PAD >= 70) && PAD < 90)) {

            alert('Tensión Elevada');

        } else if (PAS < 120 && PAD < 70) {

            alert('Tensión no elevada');
        }
       
    } catch(error){
        console.log("Error: " + error);
    }
       
        
}

