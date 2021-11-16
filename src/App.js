// import background from './materials/backgroundImg.png'
import './App.css'
import Regi from './Regi';
import Introduction from './Introduction';
import Instruction from './Instructions';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';

function App() {
  const container = {
    //  backgroundImage: `url(${background})`,
     top: 0,
     left: 0,
     right: 0,
     bottom: 0,
     zIndex: -1,
     backgroundSize: 'cover',
     backgroundRepeat: 'no-repeat',
 };

  const open_annotator = () => {
    window.open("http://34.122.132.125:5000/#/auth")
  }

  const user_steps = [
    {
      label: 'Introduction',
      name: 'step 1',
      content: <Introduction/>
    },
    {
      label: 'Register and Upload',
      name: 'step 2',
      content: <Regi/>,
      // validator: step2Validator
    },
    {
      label: 'Go Annotating',
      name: 'step 3',
      content: <Instruction/>
      // <a href="http://35.238.183.90:5000/#/auth">Annotator</a>,
      // validator: step3Validator
    }
  ]





  return (
    <div className="App" style={container}>
        <StepProgressBar
          startingStep={2}
          steps={user_steps}
          onSubmit={open_annotator}
          submitBtnName="Go to annotator!"
        />
    </div>
  );
}

export default App;
