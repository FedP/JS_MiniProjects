function solution(A) {
    let count = 0;
    //console.log(A);
    for (let i = 0; i < A.length; i++){
        count = 0;
        for (let j = 0; j < A.length; j++){
            if (A[i] === A[j]) {
                count++;
                //console.log("count is " +count);
            }
        }
        if(count%2 ==1){
        //console.log("result is " +A[i]);
        return A[i];
    }
    }
}
