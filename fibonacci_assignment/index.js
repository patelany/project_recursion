//program to display fibonacci sequence using iteration 
function fibs(n) {
    let arr = [0,1];
    for(i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]); 
    }
    return arr;
}

console.log(fibs(2)); //returns [0, 1, 1, 2, 3, 5, 8, 13, 21]

// program to display fibonacci sequence using recursion
function fibsRec(n) {
    if (n === 0) {
        return 'Please enter a positive integer';
    }
    else if (n === 1) {
        return [0, 1]; 
    } else {
        var a = fibsRec(n - 1);
        a.push(a[a.length - 1] + a[a.length - 2]);
        return a;
    }
}
console.log(fibs(2)); //returns [0, 1, 1, 2, 3, 5, 8, 13, 21]