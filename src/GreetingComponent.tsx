import React, { useState } from 'react';
import GreetingService from './GreetingService';


export default function GreetingComponent(){
    const [name, setName] = useState("")
    const [result, setResult] = useState("")
    
    const service = new GreetingService()

    return (
        <div>
            <input data-testid="input-greeting-name" onChange={e => setName(e.target.value)} />
            <button data-testid="button-execute-greeting-service" onClick={e => setResult(service.sayHello(name))}/>
            <span data-testid="label-greeting-service-result" >{result}</span>
        </div>
    );
}