import background from './materials/backgroundImg.png'
import './App.css'

function App() {
  const container = {
       backgroundImage: `url(${background})`,
      //  width: Dimensions.get('window').width,
      //  height: Dimensions.get('window').height,
       position: "absolute",
       top: 0,
       left: 0,
       right: 0,
       bottom: 0,
       zIndex: -1,
      //  backgroundPosition: 0,
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
      //  width: '100vw',
      //  height: '100vh'
   };
  return (
    <div className="App" style={container}>
        <footer className='App-footer' style={{fontFamily: 'Share Tech', fontSize:64}}> <p> CVNetworking Project </p> </footer>
        <span style={{fontFamily: 'Share Tech', fontSize:36}}> Introduction: </span>
        <div className='introduction'>
          <div>
            Networking topologies are an essential tool used by people to design network architectures and guide configuring the network environments like Local Area Network. So far people need to manually
            modify the configuration of deveices inside a network environment, which may cause delay and extra power consumption in situations that need to change the topology more frequently.
          </div>
          <div style={{marginTop: 10}}>
            To tackle this
            kind of problem, our team tried to apply computer vision to recognize hand-written networking topologies and automatically configure network environments.
          </div>
        </div>
    </div>
  );
}

export default App;
