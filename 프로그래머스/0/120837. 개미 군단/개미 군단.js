function solution(hp) {
    let g = Math.floor(hp / 5);         // 장군개미 수
    let s = Math.floor((hp % 5) / 3);   // 병정개미 수
    let w = (hp % 5) % 3;               // 일개미 수 (나머지)

    return g + s + w; 
}