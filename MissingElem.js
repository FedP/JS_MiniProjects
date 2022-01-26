function solution(A) {
    Sort(A);
    sol = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i+1] - A[i] !== 1) {
            sol = A[i+1]-1;
            return sol;
        }
    }
}

function Sort(A) {
    A.sort((a,b) => a-b);
    for (let i = 0; i < A.length; i += 2){
        if (A[i] !== A[i+1]) {
            return A[i];
        }
    }
    return -1;

}
