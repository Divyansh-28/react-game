import React, {useState} from 'react'
import Icon from './components/icons'

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import  {Card, CardBody, Container, Button, Col, Row} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'


const items = new Array(9).fill("empty");


const App = ()=> {

  const [iscross, setIscross] = useState(false);
  const [winmes, setWinmes] = useState("Circle wins");

  const reloadGame = ()=>{

    //
    setIscross(false);
    setWinmes("");
    items.fill("empty",0, 9);

  }

  const isWinner =()=>{
    //
    if(items[0]===items[1] && items[1]===items[2] && items[0]!== "empty")
    {
      setWinmes(`${items[0]} wins`)
    }
    else if(items[3]===items[4] && items[4]===items[5] && items[3]!== "empty")
    {
      setWinmes(`${items[3]} wins`)
    }
    else if(items[6]===items[7] && items[7]===items[8] && items[6]!== "empty")
    {
      setWinmes(`${items[6]} wins`)
    }
    else if(items[0]===items[3] && items[3]===items[6] && items[0]!== "empty")
    {
      setWinmes(`${items[0]} wins`)
    }
    else if(items[1]===items[4] && items[4]===items[7] && items[1]!== "empty")
    {
      setWinmes(`${items[1]} wins`)
    }
    else if(items[2]===items[5] && items[5]===items[8] && items[2]!== "empty")
    {
      setWinmes(`${items[2]} wins`)
    }
    else if(items[0]===items[4] && items[4]===items[8] && items[0]!== "empty")
    {
      setWinmes(`${items[0]} wins`)
    }
    else if(items[2]===items[4] && items[4]===items[6] && items[2]!== "empty")
    {
      setWinmes(`${items[2]} wins`)
    }


  }

  const changeitem = itemNumber => {
    
    //
    if(winmes){
      return toast(winmes, {type: "sucess"});
    }

    if(items[itemNumber]=== "empty"){
      
    items[itemNumber]= iscross? "cross": "circle";
    setIscross(!iscross);
    }

    else{
      return toast("already filled", {type: "error"})
    }
    isWinner();

  }
  
  return (
    <Container className="p-5">

      <ToastContainer position="bottom-center" />
      <Row>

        <Col md ={6} className="offset-md-3">
          {winmes ? (
            <div className="mb-2 mt-2">
              <h1 className="text-primary text-uppercase text-center">
                {winmes}
              </h1>
              <Button color="success" block onClick={reloadGame}>
                Reload the game
              </Button>

            </div>


          ):(
            <h1 className="text-center text warning">
              {iscross ? "cross": "circle"} turns
            </h1>
          )}
        
          <div className="grid">
            {items.map((item,index)=>(
               <Card color="warning" className="box" onClick={()=>changeitem(index)} >
               <CardBody >
                 <Icon name={item}/>
               </CardBody>
             </Card>
            )


            )}
            
             
          </div>
        
        </Col>
      </Row>
    </Container>

 
  )
}


export default App;
