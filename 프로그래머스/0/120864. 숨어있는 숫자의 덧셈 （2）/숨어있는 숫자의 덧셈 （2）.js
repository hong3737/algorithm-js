function solution(my_string) {
    return my_string.split(/[a-z|A-Z]/g).reduce((acc, cur)=> acc += Number(cur), 0);
    
}