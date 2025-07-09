function solution(s){
    var answer = true;
    s = s.toLowerCase();
    let p = s.split('p').length;
    let y = s.split('y').length;

    if ( p === y || p === 0 && y ===0) 
        answer = true;
    else
        answer = false;

    return answer;
}