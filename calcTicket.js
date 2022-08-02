ticketForm.addEventListener('submit', calcPrice);

function calcPrice(submit)
{
    submit.preventDefault();
    //console.log("sono collegato");

    //Mi prendo gli input
    const tripLenghtKm = document.getElementById('tripLenghtKm').value;
    const userAge = document.getElementById('userAge').value;
    //console.log(tripLenghtKm);
    //console.log(userAge);

    //Prezzo default e sconti
    const pricePerKm = 0.21;
    const childrenDiscount = 0.20;
    const elderDiscount = 0.40;

    //Calcolo il prezzo
    let ticketPrice = tripLenghtKm * pricePerKm;
    if (userAge < 18) 
    {
        ticketPrice -= (ticketPrice * childrenDiscount);
    } 
    //Applicazione dello sconto per over65
    if (userAge >= 65) 
    {
        ticketPrice -= (ticketPrice * elderDiscount);
    } 
    //Restituisco l'output
    const ul = document.getElementById('ticketData');
    // creo un elemento li
    const li = document.createElement('li');
    li.innerHTML = 'Lunghezza Percorso: ' + tripLenghtKm + '; ' + 'Età passeggero: ' + userAge + '; ' + 'Prezzo: ' + ticketPrice + "€";
    // aggiungo li a ul
    ul.appendChild(li);

    //console.log(ticketPrice);
}