import React,{useState} from "react";

class User{
    constructor(firstname,email,number){
        this.firstname=firstname;
        this.email=email;
        this.number=number
    }
}
const userArray=[]
const Login = () => {
  const [inputval, setInputval] = useState({
    fname: "",
    email: "",
    number: "",
  });
  const [show,setShow]=useState(true);
  const inputevent=(event)=>{
      const name=event.target.name;
      const value=event.target.value;
setInputval((prevalue)=>{
return {
    ...prevalue,
    [name]:value,
}
})
  }
  const submitForm = (event) => {
    event.preventDefault();
    if(inputval.fname==""){
      alert("* Required")
      return;
    }
    const user = new User(inputval.fname,inputval.email,inputval.number)
    userArray.push(user);
    console.log(userArray)
    setInputval({
        fname: "",
        email: "",
        number: "",
      })
      setShow(false)
    };
  return (
    <>
      <div>
        <form onSubmit={submitForm}>
        <h1>Create New Account</h1>
          { (show===false ) ? null :
          <>
          <input
            type="text"
            name="fname"
            placeholder="Enter your Name"
            value={inputval.fname}
            onChange={inputevent}
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={inputval.email}
            onChange={inputevent}
          />
          <br /> 
          </>}
          <input
            type="number"
            name="number"
            placeholder="Enter your Number"
            value={inputval.number}
            onChange={inputevent}
          />
          <br />
          <button type="submit"> Proceed Next</button>
        </form>
      </div>
    </>
  );
};
export default Login;
