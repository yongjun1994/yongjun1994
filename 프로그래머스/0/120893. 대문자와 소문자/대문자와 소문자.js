function solution(my_string) {
    var answer = '';
    
    for (let i = 0; i < my_string.length; i++) {
        let char = my_string[i];
        if (char === char.toUpperCase()) {
            answer += char.toLowerCase();
        } else {
            answer += char.toUpperCase();
        }
    }
    
    return answer;
}