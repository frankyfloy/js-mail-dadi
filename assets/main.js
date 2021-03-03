// Controllo Mail
var mailAutorizzate = ["fsica171@gmail.com", "tizio@gmail.com", "boolean@gmail.com"];

var mailInput = prompt("Inserisci la mail");

for (var i = 0; i < mailAutorizzate.length; i++) {
    var checkMail = 0;
    var pointBreak = 0;

    if (mailInput == mailAutorizzate[i]) {
        checkMail = 1;
        pointBreak = 1;
        console.log("Mail trovata");

        if (pointBreak == 1) {
            break;
        }

    }else if(checkMail == 0 && i == mailAutorizzate.length -1){
        console.log("Mail non trovata");
    }
}
