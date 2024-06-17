const convertTo2dArr = (arr, size) => {
    const output = []
    const copiedArr = [...arr];

    while (copiedArr.length){
        output.push(copiedArr.splice(0, size));
    }
    // console.log("output: ", output);
    // console.log("arr: ", arr);
    return output;
}

const splitNumber = (num) => {
    const secondDigit = num % 10;
    const firstDigit = (num - secondDigit) /10
    return [firstDigit -1 , secondDigit -1];
}

const treasureHunt = (inputArr) => {
    const resultsArr = []
   
    const _2dArray = convertTo2dArr(inputArr, 5);

    let numberToSplit = 11;
    // console.log(numberToSplit !== resultsArr[resultsArr.length - 1])
    while(numberToSplit !== resultsArr[resultsArr.length - 1]){
        if (numberToSplit === 11) {
            resultsArr.push(numberToSplit)
        }
        const coordinates = splitNumber(numberToSplit);
        const row = coordinates[0];
        const column = coordinates[1];
        const nextNum = _2dArray[row][column];
        resultsArr.push(nextNum)
        numberToSplit = nextNum;
    }
    return resultsArr;

}

export {treasureHunt}

/*

TREASUREHUNT (INPUTARR)
    declare RESULTSARR

    convert INPUTARR into a 5x5 2d array, declared as NESTEDINPUTARR

    while (-----)
        numberToSplit = 11
        split number into [1, 1]
        Go to position [1, 1]
        get the number at that position,
        push to RESULTSARR and then replace numberToSplit
        continue until number is repeated
    return RESULTSARR


*/

