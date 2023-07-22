var primeFactors = function (n) {
    for (var i = 2, res = "", f; i <= n; i++) {
        f = 0;
        while (n % i == 0) {
            f++;
            n /= i;
        }
        res += f ? "(" + (f > 1 ? i + "**" + f : i) + ")" : "";
    }
    return res || "(" + n + ")";
};
console.log(primeFactors(86240));
