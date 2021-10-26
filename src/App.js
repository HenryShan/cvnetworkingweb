import background from './materials/backgroundImg.png'
import './App.css'

function App() {
  const container = {
       backgroundImage: `url(${background})`,
       backgroundPosition: 0,
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       width: '100vw',
       height: '100vh'
   };
  return (
    <div className="App" style={container}>
      <div>
        <footer className='App-footer'> <p> <code> CVNetworking Project </code> </p> </footer>
      </div>
      
    </div>
  );
}

export default App;
