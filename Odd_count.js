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

//-----------Another Solution----------------//

function countElement(element, A) {
    let count = 0;
    for(let value of A) {
        if (element === value) {
            count += 1
        }
    }
    return count;
}



function solution(A) {
    for (let element of A) {
        if (countElement(element, A) %2 ===1) {
            return element;
        }
    }
    return -1;
}


//-----------Another Solution----------------//


function solution(A) {
let sol = [];
while(A.length > 0) {
    //console.log("A is "+A);
    //console.log("Sol is "+sol);

    for( element of sol) {
        if (element === A[0]){
            A = A.slice(1, A.length);
            sol = sol.slice(1, sol.length);
            //console.log("Slice");
        }
    }
    if(A[0] === A[1]) {
        A = A.slice(2, A.length);
        //console.log("Couple");
    }
    else {
        sol.push(A[0]);
        A = A.slice(1, A.length);
        //console.log("Push");
    }

}
return sol[0];
}

//-----------Another Solution----------------//

function solution(A) {
    A.sort((a,b) => a-b);
    for (let i = 0; i < A.length; i += 2){
        if (A[i] !== A[i+1]) {
            return A[i];
        }
    }
    return -1;

}

//-----------Another Solution----------------//

function solution(A) {

    const map = {};
    for (let element of A){
        console.log(map);
        if(map[element]){
            delete map[element];
        } else{
            map[element] = true;
        }
    }

    for(let key in map){
        return +key;
    }
}

//-----------Another Solution----------------//

function solution(A) {

    const map = {};
    for (let element of A){
        console.log(map);
        if(map[element]){
            delete map[element];
        } else{
            map[element] = true;
        }
    }

    return +Object.keys(map)[0]
}

//-----------Another Solution----------------//

function solution(A) {
    return A.reduce((acc, x) => acc ^ x, 0);
}
