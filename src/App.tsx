import { useState, useEffect, useRef } from 'react';
import './App.css'
import Content from './comp/Content';
import NavBar from './comp/NavBar/NavBar';
import RandomBlob from './RandomBlob/RandomBlob';


function App() {

    let width = document.body.clientWidth
    let height = document.body.clientHeight

    const [theme, setTheme] = useState("c-mocha")
    const themeRef = useRef(theme)
    const setThemeRef = useRef(setTheme)
    useEffect(() => {
        themeRef.current = theme;
        setThemeRef.current = setTheme;
    }, [theme, setTheme]);

    const changeTheme = () => {
        if (themeRef.current === 'c-mocha') {
            setThemeRef.current('c-latte');
        } else if (themeRef.current === 'c-latte') {
            setThemeRef.current('c-mocha');
        }
    };
    var scheme: string[];
    scheme = ["#f5e0dc", "#f2cdcd", "#f5c2e7", "#cba6f7", "#f38ba8", "#eba0ac", "#fab387", "#f9e2af", "#a6e3a1", "#94e2d5", "#89dceb", "#74c7ec", "#89b4fa", "#b4befe"];
    return (
        <div className={`App w-full h-full bg-c-base ${theme} overflow-hidden`}
            id="App">
            <RandomBlob num_of_blob={50} fill_color_scheme={scheme} canvas_width=
                {width * 0.98} canvas_height={height * 0.98} />
            <Content />
            <NavBar changeTheme={changeTheme} />
        </div>
    );
}

export default App
