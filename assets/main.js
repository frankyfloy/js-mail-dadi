// Controllo Mail
var mailAutorizzate = ["fsica171@gmail.com", "tizio@gmail.com", "boolean@gmail.com"];

var mailInput = prompt("Inserisci la mail");

for (var i = 0; i < mailAutorizzate.length; i++) {
    var find_Mail = false;
    var pointBreak = false;

    if (mailInput == mailAutorizzate[i]) {
        find_Mail = true;
        pointBreak = true;
        console.log("Mail trovata");

        if (pointBreak == true) {
            i = --mailAutorizzate.length;
        }

    }else if(find_Mail == false && i == mailAutorizzate.length -1){
        console.log("Mail non trovata");
    }
}


// Dadi
var giocatore = Math.floor(Math.random() * 6 + 1);

var banco = Math.floor(Math.random() * 6 + 1);

if(giocatore > banco){
    console.log("Giocatore vince con " + giocatore);
}else if (banco > giocatore) {
    console.log("Banco vince con " + banco);
}else {
    console.log("Pareggio \nbanco : "  + banco + "\nGiocatore : " + giocatore);
}
