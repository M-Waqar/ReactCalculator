import React, {useState} from 'react';
import Button from './components/Button';
import { evaluate } from 'mathjs';

function App() {
  const [value, setValue] = useState("");

  const equalclick = () => {
    if(value)
      setValue(evaluate(value));
  }

  const btnclick = (e) => {
    setValue(value + e.target.innerText);
    console.log();
  }

  const handleClear = () => {
    setValue("");
  }
  return (
    <div className="container">
      <h1 className="text-center">Calculator</h1>
      <table className="table table-borderless">
        <tbody>
          <tr>
            <td colSpan="4">
              <div style={{height:85 + 'px'}} className="p-2 font-weight-bold border display-4">
                {value}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Button handleClick={btnclick}>7</Button>
            </td>
            <td>
              <Button handleClick={btnclick}>8</Button>
            </td>
            <td>
              <Button handleClick={btnclick}>9</Button>
            </td>
            <td>
              <Button handleClick={btnclick}>/</Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button handleClick={btnclick}>4</Button>
            </td>
            <td>
              <Button handleClick={btnclick}>5</Button>
            </td>
            <td>
              <Button handleClick={btnclick}>6</Button>
            </td>
            <td>
              <Button handleClick={btnclick}>*</Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button handleClick={btnclick}>1</Button>
            </td>
            <td>
              <Button handleClick={btnclick}>2</Button>
            </td>
            <td>
              <Button handleClick={btnclick}>3</Button>
            </td>
            <td>
              <Button handleClick={btnclick}>-</Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button handleClick={btnclick}>0</Button>
            </td>
            <td>
              <Button handleClick={btnclick}>.</Button>
            </td>
            <td>
              <Button handleClick={equalclick}>=</Button>
            </td>
            <td>
              <Button handleClick={btnclick}>+</Button>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <button onClick={handleClear} className="btn btn-block btn-lg border">Clear</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
