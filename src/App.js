import logo from './logo.svg';
import music from './music.mp3'
import './App.css';

function App() {

    return <>
        <div className="musicOn" style={{ marginLeft: "30%"}}>
            <h1>Bzz Project</h1>
            <audio id="audio" controls loop>
                <source src={music}/>
            </audio>
        </div>
    </>
;
}

export default App;
