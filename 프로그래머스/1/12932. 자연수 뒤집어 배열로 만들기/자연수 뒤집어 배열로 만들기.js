function solution(n) {
    var answer = [];
    answer = n.toString().split('').reverse().map(Number);
    return answer;
}