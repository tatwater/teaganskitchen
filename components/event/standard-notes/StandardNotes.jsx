import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container, PetNote, PetIconWrapper, PetIcon, FAQs, Lockup, Icon, Question, Answer } from './styles';


export default () => (
  <Container>
    <PetNote>
      <PetIconWrapper>
        <PetIcon background>
          <FontAwesomeIcon icon={['fas', 'dog']} />
        </PetIcon>
        <PetIcon>
          <FontAwesomeIcon icon={['fal', 'dog']} />
        </PetIcon>
      </PetIconWrapper>
      Wearing clean clothes that haven’t come into contact with pet dander is always appreciated :)
    </PetNote>
    <FAQs>
      <Lockup>
        <Icon />
        <Question>Can I bring something?</Question>
        <Answer>You can bring whatever you’d like to share! Food, drinks, dessert, you name it.</Answer>
      </Lockup>
      <Lockup>
        <Icon />
        <Question>Can I pitch in?</Question>
        <Answer>If you feel like Venmoing $5-10 (as you’re able) to keep these going, I wouldn’t say no!</Answer>
      </Lockup>
    </FAQs>
  </Container>
);
