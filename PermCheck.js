function solution(A) {
    A.sort(function(a, b) {
        return a - b;
        }
    );

    for (let i =0; i < A.length-1; i++) {
        if(A[i+1] - A[i] !== 1) {
            return 0;
        }
    }
    return 1;

}
