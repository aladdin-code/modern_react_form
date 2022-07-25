import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";

const BoxContainer = styled.div`
  width: 55Opx;

  height: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;
 /*radio mta3 dora eli tet7arek*/
const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 30%;
  transform: rotate(60deg);
  top: -620px;
  left: 10px;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    #02B897,
    #2e94b9
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 20px;
  font-weight: 500;
  text-align: right;
  line-height: 1.24;
  color: #ffff;
  z-index: 10;
  margin: 0;
`;

// const SmallText = styled.h5`
//   color: #a7bcb9;
//   font-weight: 500;
//   font-size: 11px;
//   z-index: 10;
//   margin: 0;
//   margin-top: 7px;
// `;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "950px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "40%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  // const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  /*
  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  */
  const signupAnimation = () => {
    playExpandingAnimation();
  }
  const contextValue = { signupAnimation,  };



  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {/* {active === "signin" && (
            // <HeaderContainer>
            //   <HeaderText>Envoyez-nous</HeaderText>
            //   <HeaderText>votre</HeaderText>
            //   <HeaderText>canditature</HeaderText>
            // </HeaderContainer>
          )} */}
           
              <HeaderContainer>
              <HeaderText > Envoyez-nous </HeaderText>
              <HeaderText>votre</HeaderText>
              <HeaderText>canditature</HeaderText>
            </HeaderContainer>
          
        </TopContainer>
        <InnerContainer>
          
           <SignupForm />
        </InnerContainer>
      </BoxContainer>
      </AccountContext.Provider>
     
  );
}
