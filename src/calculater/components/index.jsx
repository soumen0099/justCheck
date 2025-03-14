import Input from './input';
import './style.css'
import Button from './button';
import { useState } from 'react';
const plus = '+'
const minus = '-'
const multiplication = '*'
const division = '/'
const equal = '='

function Calculater (){
  const nums = new Array(10)
  const operations = [plus,minus,multiplication,division,equal]
  const [operandA,setOperandA] = useState('');
  const [operandB,setOperandB] = useState('');
  const [result,setResult] = useState('');
  const [operation,setOperation] =useState('')
  const [currentNumber,setCurrentNumber] =useState('')
  
  function onInput(value){
    if(operandA){
      if(!operandB){
        const lastChar = value.split("").at(1);
        setOperandB(Number(lastChar))
        setCurrentNumber(lastChar)
      }
      else{
        console.log('2',value);
        setCurrentNumber(value);
        setOperandB(Number(value));
      }
    }
    else{
      setCurrentNumber(value)
    }
  }

function handleNumberClick(number){
  return ()=>{
    const newValue = `${currentNumber}${number}`
    if(operandA){
      if(!operandB){
        setOperandB(Number(number))
        setCurrentNumber(number)
      }
      else{
        setCurrentNumber(newValue);
        setOperandB(Number(newValue));
      }
    }
    else{
      setCurrentNumber(newValue)
  }
    }
}

  function handleOperationSelect(type) {
    return () => {
      if (type === equal) {
        let res = 0;
        if (operation === plus) {
          res = operandA + operandB;
        } else if (operation === minus) {
          res = operandA - operandB;
        } else if (operation === multiplication) {
          res = operandA * operandB;
        } else if (operation === division) {
          res = operandA / operandB;
        }
        setResult(res);
        setOperandA(res);
        setOperandB('');
        setCurrentNumber(String(res));
        setOperation('');
      } else {
        setOperation(type);
        setOperandA(Number(currentNumber));
        setCurrentNumber('');
      }
    };
  }
  


  


  return <div><Input value={currentNumber} placeholder='Enter Number' onInput={onInput}/>
  
  <div>{[...nums].map((_,index) =>{
    return <Button onClick={handleNumberClick(index)} key={index} label={index}></Button>
  })}</div>
    <span>Selected Operation {operation}</span>
  <div>
    {operations.map(o => {
      return <Button 
      onClick={handleOperationSelect(o)}
      key={o}
      label={o}
      dataOperation={o}/>
    })}
  </div>
  {/* Result{result} */}
  </div>
}
export default Calculater