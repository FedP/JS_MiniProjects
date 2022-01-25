function solution(A, K) {
    for (i=0; i < K; i++) {
        A = swap(A);
    }
    return A;
}

function swap(a) {
    let arr = [];
    arr[0] = a[a.length-1];
        for (let i = 1; i < a.length; i++) {
            arr[i] = a[i-1];
        }
        return arr;
    }
