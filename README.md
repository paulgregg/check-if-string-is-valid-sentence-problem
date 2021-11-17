# Checking if a string is a valid Sentence based on simple rules
 
To Run tests:
* `npm install`             install project dependencies
* `npm run test`             run the unit tests
<br />

# Problem Statement

Can you determine if a string is a “valid” sentence, based on a simple set of rules?
For the purposes of this problem, a “valid” sentence is defined as:
*	String starts with a capital letter.
*	String has an even number of quotation marks.
*	String ends with one of the following sentence termination characters: ".", "?", "!"
*	String has no period characters other than the last character.
*	Numbers below 13 are spelled out (”one”, “two”, "three”, etc…).

Write a function that determines if an input string is a “valid” sentence.

# Valid Sentence Examples
* The quick brown fox said “hello Mr lazy dog”.
* The quick brown fox said hello Mr lazy dog.
* One lazy dog is too few, 13 is too many.
* One lazy dog is too few, thirteen is 

# Invalid sentences
* The quick brown fox said "hello Mr. lazy dog".
* the quick brown fox said “hello Mr lazy dog".
* "The quick brown fox said “hello Mr lazy dog."
* One lazy dog is too few, 12 is too many.
* Are there 11, 12, or 13 lazy dogs?
* There is no punctuation in this sentence
