function factorial(a) {

    if (a == 1 || a == 0){
        return 1;
    }


    let b =1;
    for (let i = 1; i <= a; i++) {
        
        b = b*i;   
    }

    return b;
}

console.log(2 + '2');

