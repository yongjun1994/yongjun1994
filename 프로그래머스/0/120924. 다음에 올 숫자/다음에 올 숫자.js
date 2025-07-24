function solution(common) {
    let answer = 0;
    let num1 = common[1] - common[0];
    let num2 = common[2] - common[1];
    let size = common.length;
    
    if (num1 === num2 ) { // 등차수열 경우
        answer = common[size - 1] + num1;
    } else { // 등비수열 경우
        let rate = common[1] / common[0];
        answer = common[size - 1] * rate;
    }
    
    return answer;
}