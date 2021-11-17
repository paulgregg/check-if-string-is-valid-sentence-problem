//function that takes a string and returns a boolean as to whether it is a valid sentence
export const isStringASentence = (string) => {
    let speechMarksCount = 0
    let currentNumber = ""
    const stringLength = string.length
    //could build an complicated regex for this but personal preference on maintainability means i've decided against regex
    //some allows us to return true to break out of loop early
    const isValidSentence = !string.split("").some((character, index) => {
        //check if first character is uppercase or a non letter character
        if (index === 0 && (character !== character.toUpperCase() || (character.toUpperCase() === character.toLowerCase()))) return true

        //build up count of speech marks to check if even at the end
        character === "\"" && (speechMarksCount++)

        //build up current number to check if below 13
        //spec didn't technically specify that the number had to be positive so accounting for negatives
        if (character === "-" || !isNaN(parseInt(character))) {
            currentNumber += character
        } else {
            if (parseInt(currentNumber) < 13) return true
            currentNumber = ""
        }
        //on last character check if either speech marks are odd or last character isn't correct.
        if (index === stringLength - 1) {
            if (character !== "?" && character !== "." && character !== "!") return true
            if (speechMarksCount % 2 > 0) return true
        }
        //no full stops apart from end of string
        if (index < stringLength - 1 && character === ".") return true
    })

    return stringLength > 0 ?
        isValidSentence :
        false
}


