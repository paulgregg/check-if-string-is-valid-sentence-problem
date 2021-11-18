const {isStringASentence} = require("../src/StringUtils")

//I like module tests to be scoped per function, personal preference
//I also like having strings as const's instead of inline for readability, personal preference
describe('isStringASentence', () => {
    test('does not error out if non string (e.g number or undefined) passed in', () => {
        isStringASentence(undefined)
        isStringASentence(1)
    })

    test('example sentences from brief return true', () => {
        const case1 = "The quick brown fox said \"hello Mr lazy dog\"."
        const case2 = "The quick brown fox said hello Mr lazy dog."
        const case3 = "One lazy dog is too few, 13 is too many."
        const case4 = "One lazy dog is too few, thirteen is too many."
        const case5 = "How many \"lazy dogs\" are there?"

        expect(isStringASentence(case1)).toEqual(true)
        expect(isStringASentence(case2)).toEqual(true)
        expect(isStringASentence(case3)).toEqual(true)
        expect(isStringASentence(case4)).toEqual(true)
        expect(isStringASentence(case5)).toEqual(true)
    })

    test('example non sentences from brief return false', () => {
        const case1 = "The quick brown fox said \"hello Mr. lazy dog\"."
        const case2 = "the quick brown fox said \"hello Mr lazy dog\"."
        const case3 = "The quick brown fox said \"hello Mr lazy dog."
        const case4 = "One lazy dog is too few, 12 is too many."
        const case5 = "Are there 11, 12, or 13 lazy dogs?"
        const case6 = "There is no punctuation in this sentence"

        expect(isStringASentence(case1)).toEqual(false)
        expect(isStringASentence(case2)).toEqual(false)
        expect(isStringASentence(case3)).toEqual(false)
        expect(isStringASentence(case4)).toEqual(false)
        expect(isStringASentence(case5)).toEqual(false)
        expect(isStringASentence(case6)).toEqual(false)
    })

    //personal preference to fire all working rules into one test, would split if large amounts but works for now
    test('returns true for strings matching rule criteria', () => {
        //string starts with a capital letter and period at the end only
        const capitalLetterString = "A."
        expect(isStringASentence(capitalLetterString)).toEqual(true)

        //string has an even number of quotation marks
        const evenQuotationMarksString = "B\"\"\"\"."
        expect(isStringASentence(evenQuotationMarksString)).toEqual(true)

        //string ends with a full stop or exclamation or question mark
        const fullStopString = "B."
        const exclamationString = "C!"
        const questionMark = "D?"
        expect(isStringASentence(fullStopString)).toEqual(true)
        expect(isStringASentence(exclamationString)).toEqual(true)
        expect(isStringASentence(questionMark)).toEqual(true)

        //numbers below 13 are spelt out
        const numberString = "One, Two, Three, hire me?"
        const numberStringDigits = "One 13."
        expect(isStringASentence(numberString)).toEqual(true)
        expect(isStringASentence(numberStringDigits)).toEqual(true)
    })

    test('returns false for strings not matching rule criteria', () => {
        //empty string edge case
        const emptyString = ""
        expect(isStringASentence(emptyString)).toEqual(false)

        //string doesn't start with a capital letter
        const lowerCaseString = "a."
        expect(isStringASentence(lowerCaseString)).toEqual(false)

        //string doesn't start with a capital letter
        const unevenQuoteMarks = "A\"."
        expect(isStringASentence(unevenQuoteMarks)).toEqual(false)

        //string ends with termination character
        const noTerminationCharacterString = "A"
        expect(isStringASentence(noTerminationCharacterString)).toEqual(false)

        //numbers below 13 are spelt out
        const positiveIntegerString = "A 1."
        expect(isStringASentence(positiveIntegerString)).toEqual(false)

        //numbers below 13 are spelt out
        const negativeIntegerString = "A -1."
        expect(isStringASentence(negativeIntegerString)).toEqual(false)

        //string doesn't start with a capital letter
        const periodAtStringEnd = "A.."
        expect(isStringASentence(periodAtStringEnd)).toEqual(false)
    })
})
