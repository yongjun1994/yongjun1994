function solution(my_string, n) {
    let answer = '';
    let size = my_string.length;

    for (let i = size - n; i < size; i++) {
        answer += my_string[i];
    }
    return answer;
}