function CountZeros(arr,i) {
    let count = 0;
    while (arr[i+1] == 0) {
        count++;
        i++;
    }
    return count;
}

function toBinary(a){
    let bin = a.toString(2);
    return bin;
}  


function solution(N) {
    let count = 0;
    let bin = toBinary(N);
    for(let i = 0; i <= bin.length; i++) {
        let count2 = 0;
        if (bin[i] == 1){
            count2 = CountZeros(bin,i);
        }

        if (count2 > count && checkOne(bin, i,count2)) {
            count = count2;
        }   
    }
    return count;
}

function checkOne(bin, i,count) {
    if(bin[i+count+1]==1) {
        return true
    }
    else{
        return false;
    }
}
