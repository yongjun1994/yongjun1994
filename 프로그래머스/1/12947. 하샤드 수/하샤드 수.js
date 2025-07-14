function solution(x) {
    
    let sum = 0;
    let n = x;

    while (n > 0) {
        sum += n % 10;            // 마지막 자리 더하기
        n = Math.floor(n / 10);   // 마지막 자리 제거
    }

    return x % sum === 0;
}