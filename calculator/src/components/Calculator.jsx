import React, { useState } from 'react'
import './calc.css';

const Calculator = () => {
    const [result, setResult] = useState("")

    const handleClick = (e) =>{
        let reg = new RegExp("^([a-z0-9]{5,})$");
        if (reg.test(result)) {
            setResult(result.concat(e.target.name))
        }
    }
    const calcPercent = () =>{
        setResult(eval(result) / 100)
    }
    const calcExpo = () =>{
        setResult(eval(result) ** eval(result))
    }
    const resultCalc = () =>{
        try{
            setResult(eval(result))
        } catch(error){
            setResult("error")
        }
    }

    const clear = ()=>{
        setResult("")
    }
    const back = ()=>{
        setResult(result.slice(0,-1))
    }
  return (
    <div className='calculator'>
        <div>
            <input type="text" value={result} />
        </div>
        <div>
            <button onClick={handleClick} name="1">1</button>
            <button onClick={handleClick} name="2">2</button>
            <button onClick={handleClick} name="3">3</button>
            <button onClick={handleClick} name="4">4</button>
        </div>
        <div>
            <button onClick={handleClick} name="5">5</button>
            <button onClick={handleClick} name="6">6</button>
            <button onClick={handleClick} name="7">7</button>
            <button onClick={handleClick} name="8">8</button>
        </div>
        <div>
            <button onClick={handleClick} name="9">9</button>
            <button onClick={handleClick} name="0">0</button>
            <button onClick={clear}>C</button>
            <button onClick={back}>B</button>
        </div>
        <div>
            <button onClick={handleClick} name=".">.</button>
            <button onClick={resultCalc} name="=">=</button>
            <button onClick={calcPercent} name="%">%</button>
            <button onClick={calcExpo} name="Exp">Exp</button>
        </div>
        <div>
            <button onClick={handleClick} name="+">+</button>
            <button onClick={handleClick} name="-">-</button>
            <button onClick={handleClick} name="*">*</button>
            <button onClick={handleClick} name="/">/</button>
        </div>
    </div>
  )
}

export default Calculator