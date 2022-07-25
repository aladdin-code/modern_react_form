import React, { useContext } from "react";
import {
 // BoldLink,
  BoxContainer,
 
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { signupAnimation } = useContext(AccountContext);

  return (
    <BoxContainer>
        <Input type="text" placeholder="Nom" />
        <Marginer direction="vertical" margin={20} />

        <Input type="text" placeholder="Prénom" />
        <Marginer direction="vertical" margin={20} />

        <Input type="email" placeholder="Email" />
        <Marginer direction="vertical" margin={20} />
        <div class="ta-left mT10"> 
        <label>Votre CV</label>  <Input type="file" />
        
        </div>
        <MutedLink href="#">Format autorisé : PDF. Poids maximum : 2 Mo</MutedLink>
        <Marginer direction="vertical" margin={20} />

         <textarea name="Text1" cols="40" rows="5"  placeholder="Votre message" ></textarea>
     



      <Marginer direction="vertical" margin={30} />
      <SubmitButton type="submit" onClick={signupAnimation}>Envoyez</SubmitButton>
      <Marginer direction="vertical" margin="10em" />
      {/* <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink> */}
    </BoxContainer>
  );
}
