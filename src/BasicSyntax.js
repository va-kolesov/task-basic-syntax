const ROMAN_DIGITS = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

export function romanToInteger(str) {
    let result = 0;
    let sameInRow = 0;
    let currentSymbol = '';
    for (let i = 0; i < str.length; i++) {
        if (!currentSymbol) {
            currentSymbol = str[i];
            sameInRow = 1;
        } else {
            if (currentSymbol !== str[i]) {
                if (ROMAN_DIGITS[currentSymbol] > ROMAN_DIGITS[str[i]]) {
                    result += ROMAN_DIGITS[currentSymbol] * sameInRow;
                } else {
                    result -= ROMAN_DIGITS[currentSymbol] * sameInRow;
                }
                currentSymbol = str[i];
                sameInRow = 1;
            } else {
                sameInRow += 1;
            }
        }
    }
    result += ROMAN_DIGITS[currentSymbol] * sameInRow;
    return result;
}
