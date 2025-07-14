function solution(s) {
    let str = s.split(" ");
    let result = str.map((a) => a.charAt(0).toUpperCase() + a.slice(1).toLowerCase());
    return result.join(" ");
}