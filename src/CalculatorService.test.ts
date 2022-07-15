import React from 'react';
import CalculatorService from './CalculatorService';

describe("CalculatorTestSuite", () => {
  const service = new CalculatorService();
  test.each([
    [1,1,2],
    [1,2,3],
    [567,4567, 5134],
  ])("%p + %p should be %p", (number1,number2,result) => {
    expect(service.sum(number1,number2)).toBe(result)
  })

  test.each([
    [1,1, 0],
    [1,2, -1],
    [567, 4567, -4000],
  ])("%p - %p should be %p", (number1,number2,result) => {
    expect(service.sub(number1,number2)).toBe(result)
  })
})