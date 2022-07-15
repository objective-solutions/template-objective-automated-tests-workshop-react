import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react"
import CalculatorComponent from "./CalculatorComponent"
import CalculatorService from "./CalculatorService"

describe("CalculatorComponentSuite", ()=> {
  
  describe("Dummy Object", ()=> {
    test.each([
      {attribute: "input-number-1"},
      {attribute: "input-number-2"},
      {attribute: "button-sum"},
      {attribute: "button-sub"},
      {attribute: "label-result"},
    ])("should have a input with data-testid: $attribute",({attribute})=>{
      const service = jest.createMockFromModule<CalculatorService>("./CalculatorService")
      render(<CalculatorComponent service={service}/>)
      expect(screen.getByTestId(attribute)).toBeInTheDocument()
    })
  })

  describe("Fake Implementation", () => {
    test.each([
      {number1:1, number2:1, operation:"button-sum", result:"2"},
      {number1:1, number2:2, operation:"button-sum", result:"3"},
      {number1:5, number2:2, operation:"button-sub", result:"3"}
    ])("Given `$number1` `$number2` when click at $operation the the result must be $result", ({number1,number2, operation, result})=>{
      const service:CalculatorService = {
        sum: jest.fn((n1,n2) => n1+n2),
        sub: jest.fn((n1,n2) => n1-n2)
      }
      render(<CalculatorComponent service={service}/>)
      
      fireEvent.change(screen.getByTestId("input-number-1"), {target: {value: number1}})
      fireEvent.change(screen.getByTestId("input-number-2"), {target: {value: number2}})
      fireEvent.click(screen.getByTestId(operation))
      
      expect(screen.getByTestId("label-result").innerHTML).toBe(result)
    })
  })

  describe("Stub/Spies", () => {
    test("Given `1` `4` when click at `button-sum` then the result must be `5`", () => {
      const service = new CalculatorService()
      jest.spyOn(service,"sum").mockReturnValue(5)
      render(<CalculatorComponent service={service}/>)
      
      fireEvent.change(screen.getByTestId("input-number-1"), {target: {value: 1}})
      fireEvent.change(screen.getByTestId("input-number-2"), {target: {value: 4}})
      fireEvent.click(screen.getByTestId("button-sum"))
      
      expect(screen.getByTestId("label-result").innerHTML).toBe("5")
      expect(service.sum).toHaveBeenCalled()
    })
  })


})