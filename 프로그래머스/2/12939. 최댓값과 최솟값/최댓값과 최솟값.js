function solution(s) {
    var answer = '';
    let arr = s.split(' ').map(Number);
    arr.sort((a, b) => a - b);
    
    let min = arr[0];
    let max = arr[arr.length - 1];
    
    answer = `${min} ${max}`;
    return answer;
}