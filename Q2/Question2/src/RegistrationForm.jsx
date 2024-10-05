import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const validateUsername = (username) => {
    if (username.length < 3) {
      return 'Username must be at least 3 characters.';
    }
    return '';
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return 'Email must follow a valid format.';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      return 'Password must be at least 8 characters.';
    }
    if (!/\d/.test(password)) {
      return 'Password must contain at least one number.';
    }
    return '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setUsername(value);
        setErrors((prevErrors) => ({ ...prevErrors, username: validateUsername(value) }));
        break;
      case 'email':
        setEmail(value);
        setErrors((prevErrors) => ({ ...prevErrors, email: validateEmail(value) }));
        break;
      case 'password':
        setPassword(value);
        setErrors((prevErrors) => ({ ...prevErrors, password: validatePassword(value) }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
        />
        {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;