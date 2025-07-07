function solution(n)
{
    let str = n.toString();
    let answer = 0;

    for (let i = 0; i < str.length; i++) {
        answer += parseInt(str[i]); 
    }

    return answer;
}