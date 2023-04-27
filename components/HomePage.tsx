import Content from './HomePage/comp/Content';
import NavBar from './HomePage/comp/NavBar/NavBar';
import RandomBlob from './HomePage/RandomBlob/RandomBlob';
import { useState, useRef, useEffect } from 'react';
import useWindowSize from "@rooks/use-window-size"
import { Html, Main } from 'next/document';

function HomePage() {
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
    let a = useWindowSize();
    let width = a.innerWidth
    let height = a.innerHeight * 5.5
    console.log(width, height)
    var scheme: string[];
    scheme = ["#f5e0dc", "#f2cdcd", "#f5c2e7", "#cba6f7", "#f38ba8", "#eba0ac", "#fab387", "#f9e2af", "#a6e3a1", "#94e2d5", "#89dceb", "#74c7ec", "#89b4fa", "#b4befe"];
    return (
        <body className={`App w-[100vw] h-[550vh] bg-c-base ${theme} overflow-hidden`} id="App">
            <RandomBlob num_of_blob={50} fill_color_scheme={scheme} canvas_width=
                {width * 0.98} canvas_height={height * 0.98} />
            <Content />
            <NavBar changeTheme={changeTheme} />
        </body>
    );
}

export default HomePage;
