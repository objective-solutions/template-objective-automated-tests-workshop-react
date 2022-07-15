import { useState } from "react";
import CalculatorService from "./CalculatorService";

interface CalculatorComponentProps{
  service:CalculatorService
}

export default function CalculatorComponent(props:CalculatorComponentProps){
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [result, setResult] = useState(0)
  const service = props.service;

  return(
    <div>
      <input data-testid="input-number-1" value={number1} onChange={e => setNumber1(Number.parseInt(e.target.value))}/>
      <input data-testid="input-number-2" value={number2} onChange={e => setNumber2(Number.parseInt(e.target.value))}/>
      <button data-testid="button-sum" onClick={e => setResult(service.sum(number1, number2))}/>
      <button data-testid="button-sub" onClick={e => setResult(service.sub(number1, number2))}/>
      <span data-testid="label-result">{result}</span>
    </div>
  )
}