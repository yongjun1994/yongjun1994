function solution(n) {
    var answer = 0;
    var arr = n.toString().split("");
    
    for (i in arr) {
        answer += parseInt(arr[i]);
    }
    return answer;
}