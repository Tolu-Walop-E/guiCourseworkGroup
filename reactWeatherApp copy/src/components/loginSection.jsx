
import '../componentStyles/loginSection.css'
function LoginSection(){
    return(
        <div className='userField'>

            <div className ="trackIcon">
                <img src='src/assets/bicycleIcon.png'></img>
                <h1> get back on track</h1>
            </div>
            <br></br>
            <div className = "loginSection">
                <div className='inputfields'>
                    <input id = "emailHolder" type='text' placeholder='username/email'></input>
                    <input id = "passHolder" type='text' placeholder='password'></input>
                </div>
                <div className='buttonFields'>
                    <button type='submit'>login</button>
                </div>
                <h3 id = "forgotPass">Not registered? Create an account!</h3>
                
            </div>

            
        </div>
    )
}


export default LoginSection