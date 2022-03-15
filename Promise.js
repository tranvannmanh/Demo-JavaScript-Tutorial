
const calculate = (param1, param2) => {
    if (!isNaN(param1) || !isNaN(param2))
        return "";
    return param1 + param2;
}
let promise = new Promise(
    function (resolve, reject) {
       //success: resolve() if logic is ok
       //error: reject() 
        let result = calculate(2, '2') //lower than summation() ???

        if(result)
            resolve(result)
        else
            reject('Error1');
    }
)
// console.log(Boolean(car));

// then catch finally
promise
    .then((message) => {
        console.log(message) // resolve
    })
    .catch((error) => {
        console.log(error); // if reject
    })
    .finally(() => {
        console.log('Done1!'); // Always executed
    })



/**
 * Async/Await
 * make promise easier
 */
async function summation(param1, param2) {
    return param1 + param2;
}

// summation(1,2)
//     .then(result => {
//         console.log(result);
//     })
//     .catch(() => {
//         console.log('error2')
//     })
//     .finally(() => console.log('Done2!'));



const displayResult = async () => {
    const result = await summation(1, 5);
    console.log(result);
}

displayResult();