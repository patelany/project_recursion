var array = prompt("Enter your numbers").split(",");

//recursive mergeSort function to return sorted array 
const mergeSort = (array) => {

    if (array.length === 0) {
        return "Please provide a non empty array";
    }
    if (array.length === 1) {
        return array; 
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, array.length);
    
    return merge(mergeSort(left), mergeSort(right));
};

const merge = (leftArray, rightArray) => {
    //to merge both incoming arrays
    const resultArray = [];
    let leftPointer = 0;
    let rightPointer = 0; 
    

    while (leftPointer < leftArray.length && rightPointer < rightArray.length) {
        if(leftArray[leftPointer] < rightArray[rightPointer]) {
            resultArray.push(leftArray[leftPointer]);
            leftPointer++;
        }
        else {
            resultArray.push(rightArray[rightPointer]);
            rightPointer++;
        }
    }

    while (leftPointer < leftArray.length) {
       resultArray.push(leftArray[leftPointer]);
        leftPointer++;
    }

    while (rightPointer < rightArray.length) {
        resultArray.push(rightArray[rightPointer]);
        rightPointer++;
    }
    return resultArray;
};


console.log(mergeSort(array));





