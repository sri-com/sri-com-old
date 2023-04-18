import './App.css'
import { useRef } from 'react';
import RandomBlob from './RandomBlob/RandomBlob';

function App() {
    let width = document.body.clientWidth
    let height = document.body.clientHeight

    console.log(width, height)
    var scheme: string[];
    scheme = ["#f5e0dc", "#f2cdcd", "#f5c2e7", "#cba6f7", "#f38ba8", "#eba0ac", "#fab387", "#f9e2af", "#a6e3a1", "#94e2d5", "#89dceb", "#74c7ec", "#89b4fa", "#b4befe"];
    return (
        <div className='App w-full h-full bg-cbase' id="App">
            <RandomBlob num_of_blob={80} fill_color_scheme={scheme} canvas_width={width * 0.98} canvas_height={height * 0.98} />
        </div>
    );
}

export default App
