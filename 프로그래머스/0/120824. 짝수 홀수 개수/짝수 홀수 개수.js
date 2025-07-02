function solution(num_list) {
    var answer = [];
    let even = [];
    let odd = [];
    for(let i of num_list) {
        if( i % 2 === 0 ) {
            even.push(i);
        } else {
            odd.push(i);
        }
    }
    answer[0] = even.length;
    answer[1] = odd.length;
    
    return answer;
}