import music from './music.mp3'
import bee from './bee.png'
import './App.css';

function App() {

    return <>
        <div className="musicOn" style={{ marginLeft: "30%"}}>
            <h1>Bzz Project</h1>
            <audio id="audio" controls loop>
                <source src={music}/>
            </audio>

        </div>
        <div id="bee">
            <img src={bee} width="100px" height="100px"/>
        </div>
    </>
;
}

export default App;
