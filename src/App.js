import iphone from './assets/iphone.svg';
import './App.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";


function App() {
  const editor = useRef(null)
    const [content, setContent] = useState('')

    const config = {
        readonly: false // documentation : https://xdsoft.net/jodit/doc/
    }
  return (
    <div className="App">
        <div className='Left__Part'>
         <div className='Left__Part_main'>
          <div className='Left__Part__Title'>
            <div className='Left__Part__Title__Title'>Customisation</div>
            <div className='Left__Part__Title__SubTitle'>The text will reflect mobile view</div>
            <br></br>
         </div>
        <div className='Left__Part__Editor'> 
      <Accordion className='Summery'>
        <AccordionSummary className='slidebartext'
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel1a-content"
         id="panel1a-header">Text
        </AccordionSummary>
        <JoditEditor 
          ref={editor}
          value={content}
          config={config}
          tabIndex={1} // tabIndex of textarea
          editor={FocusEvent}
          //onChange={content => setContent(content)}
          onBlur={newContent => setContent(newContent)} 
        />
      </Accordion>
      </div>
      <div className='Left__Part__Publish__Btn'> 
      <button   className='Left__Part__Publish__Btn__Style' >Publish {'>'}</button>
      </div>
    </div>
  </div>
        
        {console.log({content})}
       
  <div className='Right__Part'>
    <div className='containerIphone'>
      <div className='textarea'> 
        <div className='Header'>Text</div>
          <div className="top-left" dangerouslySetInnerHTML={{__html:content}} />
       </div>
        <img src={iphone} alt="Logo" className="Right__Part__Image"/>
      </div>    
    </div>
   </div>
     
  );
}


export default App;
