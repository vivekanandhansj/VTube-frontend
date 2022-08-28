import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
display:flex;
align-items:center;
flex-direction: column;
background-color: ${({ theme }) => theme.bgLighter};
border:1px solid: ${({ theme }) => theme.soft};
padding: 20px 50px;
gap: 10px;
`;
const Title = styled.h1`
font-size:24px;`;

const SubTitle = styled.h2`
font-weight:300;
font-size:20px;`;

const Input = styled.input`
border:1px solid ${({ theme }) => theme.soft};
border-radius:3px;
padding:10px;
background-color : transparent;
width:100%;
`;

const Button = styled.button`
border-radius: 3px;
border:none;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
background-color: ${({ theme }) => theme.soft};
color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
display: flex;
font-size:10px;
margin-top: 10px;
color: ${({ theme }) => theme.textSoft};`;

const Links = styled.div`
margin-left:50px;`;

const Link = styled.span`
margin-left:30px;`;
const SignIn = () => {
  
    let navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleClick = () => {
       
        setUserName(usernameRef.current.value);
      
        setPassword(passwordRef.current.value);
 
        navigate("/", { replace: true });}
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to VTube</SubTitle>
        <Input placeholder="username" />

        <Input type="password" placeholder="password" />

        <Button>Sign in</Button>
        <Title>or</Title>

        <Input placeholder="username" />
        <Input type="email" placeholder="email" ref={usernameRef} ref={passwordRef}  />
        <Input type="password" placeholder="password" />

        <Button  onClick={handleClick} >Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
