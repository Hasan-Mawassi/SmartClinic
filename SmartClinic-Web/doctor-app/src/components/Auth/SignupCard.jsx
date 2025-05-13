import React, { useState } from "react";
import InputField from "../../components/Basic/inputField";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import CustomCard from "../../components/Basic/authCard";
import CustomButton from "../../components/Basic/Button";
import { Link,Typography  } from "@mui/material";
const SignupCard = ({ onSignup, onLinkClick, loading  ,message, showMessage}) => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignupClick = () => {
    onSignup({ name, email, password });
  };
  return (
    <CustomCard title="Register">
        {showMessage && (
        <Typography
          variant="body2"
          color="error"
          sx={{  textAlign: "center" }}
        >
          {message}
        </Typography>
      )}
      <InputField
        inputLabel="Username"
        value={name}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        type="text"
        variant="outlined"
        fullWidth={true}
        icon={PersonIcon}
      />
      <InputField
        inputLabel="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        type="email"
        variant="outlined"
        fullWidth={true}
        icon={EmailIcon}
      />
      <InputField
        inputLabel="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        type="password"
        variant="outlined"
        fullWidth={true}
        icon={LockIcon}
      />
       

      <CustomButton
        className="register-button"
        label="Register"
        onClick={handleSignupClick}
        loading={loading}
      />
      <div className="link">
        Already have an account?{" "}
        <Link
          component="button"
          variant="body2"
          onClick={onLinkClick}
          sx={{ textDecoration: "underline", cursor: "pointer" }}
        >
          Login
        </Link>
      </div>
    </CustomCard>
  );
};

export default SignupCard;
