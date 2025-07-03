function solution(my_string) {
    var answer = '';
    answer = my_string.replace(/[aeiou]/g, '');
    return answer;
}