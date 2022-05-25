const number = document.getElementById("numInput")
const guessBtn = document.getElementById("guessBtn")

let alpArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let answer = []

guessBtn.addEventListener('click', () => {

    answer = []
    if (number.value == "") {
        alert("Please enter some number")
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
        else if ((quotient >= 27 && quotient < (1 + 26 + 676)) || (quotient >= (1 + 26) && quotient == (1 + 26 + 676) && remainder == 0)) {

            console.log("level 3")

            let ans = number.value / 26;
            // console.log(quotient + " " + remainder + " " )


            ans = ans - quotient
            console.log("ans with quote subtract" + ans)

            let temp = ans * 26

            console.log("temp value " + Math.round(temp))
            answer = ["A", "A", "A"]

            answer[2] = alpArray[Math.round(temp) - 1]

            if (quotient - 27 > 27) {

                ans = quotient / 26
                console.log("ans again " + ans)


            }

            alert("Index for number " + number.value + " will be " + answer)

        }

        // answer.forEach((entry) => {

        //     console.log(entry)

        // })


        while (number.value != 0) {
            remainder = number.value % 26

        }
        number.value

    }


})
