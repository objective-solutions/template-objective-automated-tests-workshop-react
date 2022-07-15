/**
 * Exercise 4 - Greeting Component
 * 
 * For this exercise we must implement a component
 * 
 * This component must have a text input for the name that will be used in a greeting service
 * This component must also have a call service button that will execute the greeting service
 * This component must also have a label to place the greeting service response
 * 
 * Acceptance tests 
 * 
 * Given a name placed at the text input when we execute the call service button then it should replace the content of the label with the service return
 * Given an empty name at the text input when we execute the call service button then it should replace the content of the label with the service return
 * 
 * Predicted Completion time - 25m
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import GreetingComponent from './GreetingComponent';

describe("GreetingComponentTestSuite", () => {
  const inputId = "input-greeting-name"
  const labelId = "label-greeting-service-result"
  const buttonId = "button-execute-greeting-service"
  
  test.each([
    [inputId], 
    [labelId], 
    [buttonId]
  ])("Component must be rendered with %p", (id:string) => {
      render(<GreetingComponent />)
      expect(screen.getByTestId(id)).toBeInTheDocument()
  })
  
  test.each([
    {name: "Eric", result:"Hello Eric!"},
    {name: "", result: "Hello World!" }
  ])("Given a name `$name` placed in it's input when execute service button is clicked then it should fill the label with `$result`", ({name, result})=>{
    render(<GreetingComponent />);
    
    fireEvent.change(screen.getByTestId(inputId), { target: { value: name }})
    fireEvent.click(screen.getByTestId(buttonId))

    expect(screen.getByTestId(labelId).innerHTML).toBe(result)
  })
})