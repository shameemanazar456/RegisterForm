
import { FormControl } from '@mui/material';
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {useState} from 'react'
import Modal from 'react-bootstrap/Modal';

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false); setUser('');setEmail('');setPass('');setrePass(false);setisvaluee(false)}


  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [userName, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [repass, setrePass] = useState('');
  const [email, setEmail] = useState('')
  

  //conditionaly render

  const [isUser, setIsUser] = useState(true)
  const [isPass, setIsPass] = useState(true)
  const [isEmail, setIsEmail] = useState(true)
  const [isrepass , setisrepass] = useState(true)
  const [isvalueu, setisvalueu] = useState(false)
  const [isvaluep, setisvaluep] = useState(false)
  const [isvaluee, setisvaluee] = useState(false)
  const [isvaluer, setisvaluer] = useState(false)


  const handleShow = () => {setShow(true); }

   
  

  const validateUser=(e)=>{
    
    const {name,value}=e.target
    console.log(name);
    console.log(value);
    
    if(!!value.match(/^[a-zA-Z][a-zA-Z0-9]*$/)){
      if(name=='user'){
        setisvalueu(true)
        setIsUser(true)
        setUser(value)
      }
      
    }
    else{
      
      setIsUser(false)
      setUser(value)
    }
    
  }
  const validatePassword = (e)=>{
    const {name,value}=e.target
    if(!!value.match(/^[a-zA-Z0-9]*$/)){
        if(value.length>8){
          setisvaluep(true)

        setIsPass(true)
        setPass(value)
        }
        else{
          setIsPass(false)
          setPass(value)
        }
    }
      
    
    else{
      setIsPass(false)
      setPass(value)
    }
  
  }
  const checkPassword =(e)=>{
    const {name,value}=e.target
    if(value==pass){
      setisvaluer(true)

      setisrepass(true)
      setrePass(value)
    }
    else{
      setisrepass(false)
      setrePass(value)
    }


  }
  const validateEmail = (e)=>{
    const {name,value}=e.target
    if(!!value.match(/^[a-zA-Z0-9_=+]*[@][a-zA-Z0-9]*[.][a-zA-Z0-9_=+]*$/)){
      setisvaluee(true)

        setIsEmail(true)
        setEmail(value)
      
        
    }
      
    
    else{
      setIsEmail(false)
      setEmail(value)
    }
  
  }
  const reset =()=>{
    setEmail(' ')
    setPass(' ')
    setUser(' ')
    setIsEmail(true)
    setIsPass(true)
    setIsUser(true)
  }

  return (
    <>
      <div className='main'>
        <div className='sub p-5'>
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <img src="https://media.istockphoto.com/id/1468757785/photo/human-resources-and-management-concept-employee-must-complete-the-online-survey-form-marked.webp?b=1&s=170667a&w=0&k=20&c=b9QV98XaaziiO9Poaxhp5v13CQvdoEF15kTL8ylC6Wo=" alt="" style={{width:'100%'}} />
            <h1 className='mt-3'>Register Now</h1>
          </div>
          <div>
          <form className='mt-3'>
          <TextField
          required
          id="outlined-required" name="user"
          label="User Name "
         className='w-100' value={userName||""} onChange={(e)=>validateUser(e)}
        />
       {!isUser && <p className='text-danger'>Start with Letter, Only Letters and Number are allowed</p>}
        <TextField
          id="outlined-password-input" name='passw'
          label="Password *"
          type="password"
          autoComplete="current-password" className='w-100 mt-3' value={pass || ""}  onChange={(e)=>validatePassword(e)}
        />
               {!isPass && <p className='text-danger'>Only Letters and Number are allowed & Min 8 char is required</p>}

               <TextField
          id="outlined-password-input" name='passwre'
          label="Re-enter Password *"
          type="password"
          autoComplete="current-password" value={repass || ""}  className='w-100 mt-3'  onChange={(e)=>checkPassword(e)}
        />
        {!isrepass && <p className='text-danger'>Password should be matched</p>}

            <TextField id="outlined-basic" name='email' label="Email Id *" value={email || ""} variant="outlined" className='w-100 mt-3'  onChange={(e)=>validateEmail(e)} />
            {!isEmail && <p className='text-danger'>Please enter valid EmailId</p>}

            
            <FormControlLabel control={<Checkbox defaultChecked />} label="I Accept all Privacy Policy" />
       
           <div className='d-flex justify-content-between mt-4'> 
            <Button disabled={(isvaluee && isvaluep && isvaluer && isvalueu && isEmail&&isPass&&isUser )?false:true } variant="contained" color='success' className=' w-50  ' onClick={handleShow}>Register</Button>
            <Button onClick={reset} variant="contained" color='warning' className='ms-2 w-50'>Reset</Button>
            <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Successfully Registered</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thankyou For Registering!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
            
           
            </div>      
            </form>
         

          </div>
          
        </div>
      </div>
    </>
  )
}

export default App


