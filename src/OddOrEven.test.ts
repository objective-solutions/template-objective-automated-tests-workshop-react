/**
 * Exercise 1 - Odd or Even
 * For this exercise we must implement a service that returns whether a number is even or odd
 * Given a number
 * When we execute “isEvenOrOdd” method then it should return even or odd
 * When this service receive a non integer number it should throw an exception
 * Predicted Completion time - 10m
 */


import { NOT_IMPLEMENTED_YET } from "./Messages"


let isEven = (number:number):boolean => number %  2 === 0;
let isEvenOrOdd = (number:number):string => {
  if(!Number.isInteger(number))
    throw new Error(`Invalid Argument: ${number}`)
  return isEven(number) ? "even" : "odd"
}

describe("OddOrEvenTestSuite", () => {
  test.each([
    [1, false], 
    [2, true], 
    [3, false], 
    [4, true]
  ])("Given the number %p when execute isEven method then it should return `%p`", (number:number, result: boolean) => {
    expect(isEven(number)).toBe(result)
  })

  test.each( [
    {type: "odd", number: 1}, 
    {type: "even", number: 2}
  ])("Given an $type number when execute isEvenOrOdd method then it should return `$type`", ({ type, number } ) => {
    expect(isEvenOrOdd(number)).toBe(type)
  })

  test.each([
    {number:1.1, error:"Invalid Argument: 1.1"},
    {number:1.2, error:"Invalid Argument: 1.2"}
  ])("Given the number $number when execute isEvenOrOdd method then it should raise an exception with error: `$error`", ({number, error}) => {
    expect(()=> {isEvenOrOdd(number)}).toThrow(error)
  })
})
