import React, {useState} from 'react';
import './auth.css';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { faUser, faKey, faPlus } from '@fortawesome/free-solid-svg-icons';

  const Register = ({ username, password, setUsername, setPassword }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  return (
    <div className="register">
      <p>Create a new account</p>
      <Input
        type="text"
        className="Username"
        value={username}
        setValue={setUsername}
        onChange={(e) => setUsername(e.target.value)}
        icon={faUser}
      />
      <Input
        type="password"
        className="Password"
        value={password}
        setValue={setPassword}
        icon={faKey}
        showPasswordToggle={true}
        isPasswordVisible={isPasswordVisible}
        togglePassword={togglePasswordVisibility}
      />
      <Button
        label="Sign Up"
        type="submit"
        className="register-button"
        icon={faPlus}
      />
    </div>
  );
};

export default Register;
