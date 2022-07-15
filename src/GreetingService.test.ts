/**
 * 
 * Exercise 3 - Greeting Service
 * 
 * For this exercise we must create a greeting service.
 *
 * Given a name when we execute “sayhello” method it should return “Hello name!”
 * Given a empty input when we execute “sayhello” method it should return “Hello World!”
 *
 * Predicted Completion time - 5m
 *
 */

import { NOT_IMPLEMENTED_YET } from "./Messages"

let sayHello = (name:string) => `Hello ${name ? name : "World"}!`

describe("GreetingServiceTestSuite", () => {
  test("Given a name `Otavio` when execute sayHello method then it should return `Hello Otavio!`", () => {
    expect(sayHello("Otavio")).toBe("Hello Otavio!")
  })
 
  test("Given an empty name `` when execute sayHello method then it should return `Hello World!`", () => {
    expect(sayHello("")).toBe("Hello World!")
  }) 
})