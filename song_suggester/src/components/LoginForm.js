import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import axios from "axios";
import {
  Form,
  FormDiv,
  FormLabel,
  FormInput,
  FormButton,
  LinkButton,
  FormContainer,
  FormCenter,
  FormValidationWarning
} from "../stylesheets/Form";

import { login } from "../store/actions/dashboardActions";

// const LoginForm = (props) => {
//   const [formData, setFormData] = useState({});
//   const { register, handleSubmit, errors } = useForm();

//   // const handleInput = e => {
//   //   setFormData({ ...formData, [e.target.id]: e.target.value });
//   // };

//   // // const handleSubmit = data => {
//   // //   login({ username: data.login, password: data.password });
//   // //   console.log(data);
//   // };
//   const onSubmit = e => {
//     e.preventDefault();
//     console.log(register)
// axiosWithAuth()
// //axios
// axios.post("https://spotify-song-suggester-be.herokuapp.com/api/auth/login", {
//   user: formData.login,
//   password: formData.password
// }, {
   
 
//     }
// )
// // .post('/users/login', login)
// .then(res => {
//     console.log(res.data)
//     localStorage.setItem('token', res.data.payload);
//     props.history.push('/Dashboard');
// })
// .catch(err => console.log(err));
// }

//   return (
//     <FormContainer>
//       <FormDiv>
//         <Form onSubmit={onSubmit}>
//           <h2>Welcome to Symphinity</h2>
//           <p>Please Login</p>
//           <FormLabel htmlFor="login">
//             Email/Username:
//             <FormInput
//               type="text"
//               id="login"
//               name="login"
//               onChange={e => handleInput(e)}
//               ref={register({
//                 required: true,
//                 pattern: {
//                   value: /^(?:[A-Z\d][A-Z\d_-]{7,}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i,
//                   message: "Please enter a valid email address or username."
//                 }
//               })}
//             />
//           </FormLabel>
//           {errors.login && (
//             <FormValidationWarning>
//               {errors.login.message}
//             </FormValidationWarning>
//           )}
//           <FormLabel htmlFor="password">
//             Password:
//             <FormInput
//               type="password"
//               id="password"
//               name="password"
//               onChange={e => handleInput(e)}
//               ref={register({
//                 required: true,
//                 pattern: {
//                   value: /^(?=.{8,}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*/,
//                   message: "Invalid password."
//                 }
//               })}
//             />
//           </FormLabel>
//           {errors.password && (
//             <FormValidationWarning>
//               {errors.password.message}
//             </FormValidationWarning>
//           )}
//           <FormButton>Login</FormButton>
//           <FormCenter>- OR -</FormCenter>
//           <LinkButton href="/register">Sign Up</LinkButton>
//         </Form>
//       </FormDiv>
//     </FormContainer>
//   );
// };

// export default LoginForm;

const LoginForm = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('https://cors-anywhere.herokuapp.com/https://spotify-song-suggester-be.herokuapp.com/api/auth/login', {
                username: username,
                password: password
            })
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('');
            })
            .catch(err => console.log(err));
    };
    console.log (username, password)
    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <h2>Welcome to Symphinity</h2>
                <p>Please Login</p>
                <FormInput
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <FormInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Log In</button>
                {/* <Button type="submit" className={classes.logIn}>Log In</Button> */}
            </Form>
        </FormContainer>
    );
};
export default LoginForm;