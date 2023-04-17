import './App.css'
import { useRef } from 'react';
import RandomBlob from './RandomBlob/RandomBlob';

function App() {
    const windowWidth = useRef(window.innerWidth);
    const windowHeight = useRef(window.innerHeight);

    let width = windowWidth.current
    let height = windowHeight.current

    var scheme: string[];
    scheme = ["#f5e0dc", "#f2cdcd", "#f5c2e7", "#cba6f7", "#f38ba8", "#eba0ac", "#fab387", "#f9e2af", "#a6e3a1", "#94e2d5", "#89dceb", "#74c7ec", "#89b4fa", "#b4befe"];
    return (
        <div className='App w-full h-full bg-cbase' id="App">
            <RandomBlob num_of_blob={25} fill_color_scheme={scheme} canvas_width={width * 0.9} canvas_height={height * 5.8} />
        </div>
    );
}

export default App
