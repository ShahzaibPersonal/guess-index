const number = document.getElementById("numInput")
const guessBtn = document.getElementById("guessBtn")

let alpArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let answer = []


let columnName = [];


// used recursion rest is same as GEEK FOR GEEKS SOLUTION 
// https://www.geeksforgeeks.org/find-excel-column-name-given-number/
// this solution is proper not mine. I dont own this one but other one is mine.

function printString(columnNumber) {

    if (columnNumber > 0) {

        let rem = columnNumber % 26;

        if (rem == 0) {
            columnName.push("Z");
            columnNumber = Math.floor(columnNumber / 26) - 1;
        }
        else // If remainder is non-zero
        {
            columnName.push(String.fromCharCode((rem - 1) + 'A'.charCodeAt(0)));
            columnNumber = Math.floor(columnNumber / 26);
        }

        printString(columnNumber)

    }
    else {
        columnName.reverse().join("")
        
    }

}


guessBtn.addEventListener('click', () => {

    printString(number.value)
    console.log(columnName)


    answer = []
    
    if (number.value == "" || number.value > 17576) {
        alert("Please Enter a value which range between 0 and 17576. Thanks !!")
    }
    else {

        let quotient = ~~(number.value / 26)
        let remainder = number.value % 26

        console.log("quotient " + ~~(number.value / 26) + " remainder is " + number.value % 26)


        if (quotient < 1 || (quotient == 1 && remainder == 0)) {

            console.log("level 1")

            let Alphabet = number.value - 1
            answer = [alpArray[Alphabet]]

            alert("Index for number " + number.value + " will be " + answer[0])


        }
        else if ((quotient >= 1 && quotient < 27) || (quotient >= 1 && (quotient <= 27 && remainder == 0))) {

            console.log("level 2")
            if (remainder == 0) {
                quotient -= 2
                remainder = 25
            } else {
                quotient -= 1
                remainder -= 1
            }

            answer[0] = alpArray[quotient]

            answer[1] = alpArray[remainder]

            alert("Index for number " + number.value + " will be " + answer[0] + answer[1])

        }
        else if ((quotient => 27 && quotient < (703)) || (quotient >= 27 && quotient == 703 && remainder == 0)) {

            console.log("level 3")

            // what ever we do answer will be in this range 
            answer = ["A", "A", "A"]




            let ans = number.value / 26;

            ans = ans - quotient
            let temp = ans * 26

            console.log("temp value was" + temp)



            if (temp == 0) {
                answer[2] = "Z"
            }
            else {

                answer[2] = alpArray[Math.round(temp) - 1]
            }

            let num = number.value


            while (quotient >= 27) {

                remainder = num % 26
                quotient = ~~(num / 26)
                console.log(quotient + " " + remainder + " " + num / 26)
                answer[0] = alpArray[quotient - 1]

                if (remainder == 0) {
                    answer[1] = "Z"
                }
                else {
                    answer[1] = alpArray[remainder - 1]
                }
                num = quotient;

            }




            alert("Index for number " + number.value + " will be " + answer)


        }

        // answer.forEach((entry) => {

        //     console.log(entry)

        // })



    }


})



