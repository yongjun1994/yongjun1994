function solution(x, n) {
    var answer = [];
    answer[0] = x;
    for(let i = 1; i < n + 1; i++) {
        answer[i - 1] = answer[0] + x * (i - 1);
    }
    return answer;
}