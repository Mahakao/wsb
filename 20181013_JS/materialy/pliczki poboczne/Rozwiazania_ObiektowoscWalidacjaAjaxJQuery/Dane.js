function Euklides(a, b) {

    while (a * b !== 0) {
        if (a > b) {
            a %= b;
        } else {
            b %= a;
        }
    }
    return Number(a) + Number(b);
}