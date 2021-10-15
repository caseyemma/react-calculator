import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0');
  const [firstVal, setFirstVal] = useState('');
  const [nextVal, setNextVal] = useState('');
  const [operatorFlag, setOperatorFlag] = useState(0);
  const [result, setResult] = useState('')

  
  const handleClick = (input) => {

    if ((input === "." && (firstVal.slice(-1) == "."))
    || (display.indexOf('.') != -1) && input === ".") {
      return;
    }

    if (input === "0" && display === "0") {
      return;
    }

    if (!operatorFlag) {
      if (input == ('+') || input == ('/') || input == ('*') || input == ('-')) {
        setOperatorFlag(1);
        setFirstVal(firstVal + nextVal);
        setNextVal(input);
        setDisplay(input);
      } else {
        setNextVal(nextVal + input);
        setDisplay(nextVal + input);
      }
    } else {
      if (input !== ('+') && input !== ('/') && input !== ('*') && input !== ('-')) {
        if (nextVal.length > 1) {
          if (nextVal.slice(-1) == "-") {
            setFirstVal(firstVal + nextVal.slice(-2));
            setNextVal(input);
            setDisplay(input);
            setOperatorFlag(0);
          } else {
            setFirstVal(firstVal + nextVal.slice(-1));
            setNextVal(input);
            setDisplay(input);
            setOperatorFlag(0);
          }
        } else {
          setFirstVal(firstVal + nextVal);
          setNextVal(input);
          setDisplay(input);
          setOperatorFlag(0);
        }
      } else {
        setNextVal(nextVal + input);
        setDisplay(nextVal + input);
      }
    }
  }

  const calculate = () => {
    // console.log('equals pressed');
    let answer = eval(firstVal + nextVal);
    setFirstVal(String(answer));
    setResult(String(answer));
    setDisplay(String(answer));
    setNextVal('');
    setOperatorFlag(0);

    
  }

  const clear = () => {
    setFirstVal('');
    setDisplay('0');
    setResult('')
    setNextVal('');
  }


  return (
    <div className="container">
      <div className="grid">
        <div id="display-area">
          <div id="display" className="total">{display}</div>
        </div>
          <div onClick={() => handleClick("7")} className="padButton inner-pad" value="7" id="seven">7</div>
          <div onClick={() => handleClick("8")} className="padButton inner-pad" value="8" id="eight">8</div>
          <div onClick={() => handleClick("9")} className="padButton inner-pad" value="9" id="nine">9</div>
          <div onClick={() => handleClick("4")} className="padButton inner-pad" value="4" id="four">4</div>
          <div onClick={() => handleClick("5")} className="padButton inner-pad" value="5" id="five">5</div>
          <div onClick={() => handleClick("6")} className="padButton inner-pad" value="6" id="six">6</div>
          <div onClick={() => handleClick("1")} className="padButton inner-pad" value="1" id="one">1</div>
          <div onClick={() => handleClick("2")} className="padButton inner-pad" value="2" id="two">2</div>
          <div onClick={() => handleClick("3")} className="padButton inner-pad" value="3" id="three">3</div>
          <div onClick={() => handleClick("0")} className="padButton inner-pad" value="0" id="zero">0</div>
          <div onClick={() => handleClick("/")} className="padButton operators" value="/" id="divide">/</div>
          <div onClick={() => handleClick("*")} className="padButton operators" value="*" id="multiply">x</div>
          <div onClick={() => handleClick(".")} className="padButton inner-pad" value="." id="decimal">.</div>
          <div onClick={clear} className="padButton alert-btn" value="c" id="clear">CLEAR</div>
          <div onClick={() => handleClick("-")} className="padButton operators" value="-" id="subtract">-</div>
          <div onClick={() => handleClick("+")} className="padButton operators" value="+" id="add">+</div>
          <div onClick={calculate} className="padButton operators" value="=" id="equals">=</div>
      </div>
    </div>
  )
}

export default App
