// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let containCoins = {};
    let remainder = currency;
    let H, Q, D, N, P;
    if (currency <= 0){
        return containCoins;
    }
    else if (currency > 10000){
        containCoins.error = "You are rich, my friend! We don't have so much coins for exchange";
    }
    else if (currency < 10000) {
        while (remainder >= 50) {
            H = Math.trunc(remainder / 50);
            remainder %= 50;
            containCoins.H = H;
        }
        while (remainder >= 25) {
            Q = Math.trunc(remainder / 25);
            remainder %= 25;
            containCoins.Q = Q;
        }

        while (remainder >= 10) {
            D = Math.trunc(remainder / 10);
            remainder %= 10;
            containCoins.D = D;
        }

        while (remainder >= 5) {
            N = Math.trunc(remainder / 5);
            remainder %= 5;
            containCoins.N = N;
        }
        if (remainder > 0 ) {
            P = remainder;
            containCoins.P = P;
        }
            }

    return containCoins;

}
