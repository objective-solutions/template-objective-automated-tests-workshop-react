/**
 * Exercise 2 - Prime Numbers
 * For this exercise we must implement a service that returns whether a number is a prime number or not
 * Given a number
 * When we execute “isPrime” method then it should return true or false
 * When this service receive a non integer number it should throw an exception
 * When this service receive a number less than 1  it should throw an exception
 * When this service receive a number equal to 1  it should throw an exception
 *
 * Predicted Completion time - 25m
 *
 */

import { NOT_IMPLEMENTED_YET } from "./Messages"

let isPrime = (number: number) => {
  if (!Number.isInteger(number))
    throw `${number} is not a natural number`

  if (number < 1)
    throw `${number} is not a prime number`

  if (number === 1)
    throw `${number} is neither prime nor composite number`

  for(let i=2; i<number; i++)
    if(number % i == 0)
      return false

  return true;
}
describe("PrimeNumbersTestSuite", () => {

  test.each([
    {number:2, result: true},
    {number:3, result: true},
    {number:4, result: false},
    {number:5, result: true},
    {number:6, result: false},
    {number:7, result: true},
    {number:8, result: false},
    {number:9, result: false},
    {number:10, result: false},
    {number:11, result: true}
  ])("Given the number `$number` when execute isPrime method then it should return `$result`", ({number, result}) => {
    expect(isPrime(number)).toBe(result)
  })

  test.each([
    {number: 1.1, message: "1.1 is not a natural number"},
    {number: 1, message: "1 is neither prime nor composite number"},
    {number: 0, message: "0 is not a prime number"},
    {number: -1, message: "-1 is not a prime number"}
  ])("Given the number `$number` when execute isPrime method then it should raise an exception `$message`", ({number, message}) => {
    expect(() => {isPrime(number)}).toThrow(message)
  })
})