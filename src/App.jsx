import Button from '@mui/material/Button';
import './App.css';
import { useState,useEffect } from 'react';
import { Container, Navbar } from 'react-bootstrap';


function App(){

  const [timer, setTimer] = useState(0); const [isActive, setIsActive] = useState(false); const [intervalId, setIntervalId] = useState(null);

const start = (e) => {
  setIsActive(true);
  const id = setInterval(() => {
      setTimer((prev) =>prev + 1);
  }, 1000);
  setIntervalId(id);
  setTimer(0);
};



const reset = (e) => {
  clearInterval(intervalId);
  setIsActive(false);
};

return (
  <div>


<Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">

          <i class="fa-solid fa-stopwatch fa-bounce fa-lg"></i>
            {' '}
            Stopwatch
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="total">
      <h1>00:{timer}</h1>
      <div className="buttons">
      <Button variant="contained" style={{backgroundColor:"green"}}   onClick={e=>start(e)} >Start</Button>
<Button variant="outlined" style={{marginLeft:'20px',backgroundColor:'red',color:'white'}}     onClick={e=>reset(e)}>Stop</Button>
</div>
</div>
  </div>
);
}








     
 

export default App;
