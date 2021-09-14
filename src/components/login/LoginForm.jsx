import React from "react";

const LoginForm = () => {
    return (
        <form>
            <div>
                <input placeholder={"Login"} type={"text"}/>
            </div>
            <div>
                <input placeholder={"Password"} type={"password"}/>
            </div>
            <div>
                <input type={"checkbox"}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

export default LoginForm;