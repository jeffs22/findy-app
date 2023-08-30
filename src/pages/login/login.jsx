import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import logo from "../../assets/logo.png";
import './login.scss';
import { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    return (
        <main className="login">
            <figure>
                <img src={logo} alt="findy" />
            </figure>
            <form>
                <input type="text" placeholder="Ingrese su correo electrónico" />
                <div>
                    <input type={showPassword ? "text" : "password"} placeholder="Ingrese su contraseña" />
                    {
                        showPassword ?
                            <BsFillEyeFill onClick={toggleShowPassword} className="form__iconPass" /> :
                            <BsFillEyeSlashFill onClick={toggleShowPassword} className="form__iconPass" />
                    }

                </div>
                <button type="submit"> Log In</button>
            </form>
        </main>
    )
}

export default Login;