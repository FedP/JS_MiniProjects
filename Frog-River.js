function solution(X, A) {
    //console.log(A, typeof(A));
    let count = 0;
    for (let element of A) {
        //console.log(element) 
        if (element == X) {
            return count;
        }
        count++;
    }
    return -1;
}
