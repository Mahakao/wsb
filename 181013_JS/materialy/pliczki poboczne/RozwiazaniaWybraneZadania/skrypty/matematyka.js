function NWD(liczba1, liczba2) {
    var lMniejsza = 0;
    if (liczba1 > liczba2) {
        lMniejsza = liczba2;
    }
    else {
        lMniejsza = liczba1;
    }

    for (var i = lMniejsza; i > 0; i--) {
        if (liczba1 % i == 0 && liczba2 % i == 0) {
            return i; //zwrócenie wartości                  
        }
    }    
}

function NWD_Euklides(liczba1, liczba2) {

}