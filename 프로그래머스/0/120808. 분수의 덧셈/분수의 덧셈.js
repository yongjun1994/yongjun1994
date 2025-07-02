function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    let denom = denom1 * denom2;
    let numer = numer1 * denom2 + numer2 * denom1;
    
    let gcd= (x, y) => (x % y === 0 ? y : gcd(y, x % y));
    let gcdValue = gcd(numer, denom);
    
    answer = [numer / gcdValue, denom / gcdValue];
    
    return answer;
}