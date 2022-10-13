import styled from "@emotion/styled";
import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <LoginPage>
      <LoginContanier>
        <LoginImg />
        <LoginSection>
          <Title>로그인</Title>
          <InputWrap>
            <Label>아이디</Label>
            <LoginInput />
          </InputWrap>
          <InputWrap>
            <Label>비밀번호</Label>
            <LoginInput type="password" />
          </InputWrap>
          <SignIn>로그인</SignIn>
        </LoginSection>
      </LoginContanier>
    </LoginPage>
  );
};

const Title = styled.h1`
  font-size: 30px;
  margin: 0;
  margin-bottom: 60px;
`;

const SignIn = styled.button`
  width: 100%;
  height: 50px;
  background-color: #6c63ff;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.08s ease-in-out;

  &:active {
    transform: scale(0.99);
  }
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
`;

const Label = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-size: 18px;
`;

const LoginInput = styled.input`
  border: 1px #000 solid;
  border-radius: 3px;
  width: 350px;
  height: 45px;
  outline: none;

  font-size: 16px;
  padding: 0 7px;
`;

const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginPage = styled.main`
  background-color: #cdcafd;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContanier = styled.article`
  background-color: white;
  aspect-ratio: 1430/800;
  height: 80vh;
  padding: 0 150px 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LoginImg = styled.div`
  background-image: url(${"img/loginImg.svg"});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 47%;
  aspect-ratio: 6/5;
`;

export default Login;
