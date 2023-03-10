import { useState } from "react";
import Button from 'react-bootstrap/Button';

const App = () => {

  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  }

  return (<div>
    <h1>Count: {count}</h1>
    <Button variant="primary" onClick={handleButtonClick}>Increment</Button>
  </div>)
}

export default App;