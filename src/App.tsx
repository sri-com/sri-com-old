import './App.css'
import './RandomBlob/Blob.css'
import RandomBlob from './RandomBlob/RandomBlob';

function App() {
    var scheme: string[];
    scheme = ["#f5e0dc", "#f2cdcd", "#f5c2e7", "#cba6f7", "#f38ba8", "#eba0ac", "#fab387", "#f9e2af", "#a6e3a1", "#94e2d5", "#89dceb", "#74c7ec", "#89b4fa", "#b4befe"];
    return (
        <div className='App w-full h-full bg-cbase'>
            <RandomBlob num_of_blob={50} fill_color_scheme={scheme} />
        </div>
    );
}

export default App
