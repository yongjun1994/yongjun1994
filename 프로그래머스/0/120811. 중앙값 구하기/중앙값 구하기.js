function solution(array) {
    let center = Math.floor(array.length / 2); 
    let list = array.sort((a, b) => a - b);
    let answer = list[center];
    return answer;
}