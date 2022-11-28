// If Statements



//Eine Funktion definiert die wir in der Index.html mit dem Button verankert haben. Drückt man diesen Button wird diese Funktion gestartet
function main() {
    //Console Log damit man in der Konsole sieht dass diese Funktion gestartet wurde.
    console.log("Funktion wurde aufgerufen")

    var input = document.getElementById("inputColor");

    var color = input.value;
    var lowerColorName = color.toLocaleLowerCase();

    // Pseudocode - AblaufF
    // Wenn grün -> fahren
    // Wenn gelb -> anfahren/bremsen
    // Wenn rot -> halten
    // allere anderen -> Fehlermeldung zurückgeben bei falscher Farbe


    //Wenn grün -> fahren
    if (lowerColorName == "grün")
        alert("Du darfst fahren");
    //Wenn gelb -> anfahren/bremsen
    else if (lowerColorName == "gelb")
        alert("Du darfst anfahren oder musst bremsen");
    //Wenn rot -> halten
    else if (lowerColorName == "rot")
        alert("Du musst halten");
    //Wenn keine Ampelfarbe eingegeben -> Fehlermeldung
    else
        alert("Keine gültige Ampel-Farbe eingetragen");
}