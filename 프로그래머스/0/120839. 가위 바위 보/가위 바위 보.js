function solution(rsp) {
    var answer = '';
    
    for(let i = 0; i < rsp.length; i++) {
        let ch = rsp.charAt(i);
        if ( ch === '2') {
            answer += 0;
        } else if ( ch === '0') {
            answer += 5;
        } else {
            answer += 2;
        }
    }
    
    return answer;
}