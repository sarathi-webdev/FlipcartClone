import { useState } from 'react'
import '../LoginModel/LoginModel.css'
import '../Navbar/Navbar'
import { RxCross2 } from 'react-icons/rx'
import supabase from '../../supabase'
import { useDispatch } from 'react-redux'
import { setUser } from '../../Slice/UserSlice'




const LoginModel = ({ isOpen, setIsOpen }) => {

       const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [logintype, setLogintype] = useState(false);

    const dispatch = useDispatch()

    const signup = async () => {

        const { data, error } = await supabase.auth.signUp({
            email,
            password
        });
        if (data.user) {
            alert("Account Created Succesfully. Please Verify Your Acoount")
        }
    }

    const login = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password

        });
        if (error) {
            alert(error?.message);
            return;
        }
        dispatch(setUser(data.user));
}

 


    return isOpen ? (

        <div className='overlay'>
            <div className='LoginModel'>
                <div className='left'>
                    <div className='left-container'>
                        <p className='Login-title'>Login

                        </p>
                        <p className='Login-des'>
                            Get access to your orders, whishlist and recommendations
                        </p>
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"></img>

                    </div>

                </div>
                <div className='right'>
                    <input type='email'
                        required
                        placeholder='Enter the Email'
                        className='Login-input'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input type='password'
                        required
                        placeholder='Enter the Password'
                        className='Login-input'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <p className='termsandcon'>
                        By continuing you agre to flipcart's{" "}
                        <span style={{ color: "blue" }} className=''>Terms of use</span> and
                        <span style={{ color: "blue" }}> Privacy Policy</span>
                    </p>
                    {logintype ? (
                        <button className='Login-btn' onClick={login}>Login</button>
                    ) : (
                        <button className='Login-btn' onClick={signup}>SignUp</button>
                    )}


                    {logintype ? (
                        <p className='Login-signup' onClick={() => setLogintype(false)}>
                            Now to Flipcard? Create an Account
                        </p>
                    ) : (
                        <p className='Login-signup' onClick={() => setLogintype(true)}>
                            Already an User? Login to an Account
                        </p>
                    )

                    }
                </div>
                <div className='close' onClick={() => setIsOpen(false)}>
                    <RxCross2 />
                </div>

            </div>


        </ div>
    ) : (<></>)



}

export default LoginModel