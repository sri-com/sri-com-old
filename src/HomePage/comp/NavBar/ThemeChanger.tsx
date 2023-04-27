import { useState } from "react";
import "./ThemeChanger.css";

interface ThemeChangerProp {
    themeChanger: any
}

function ThemeChanger(prop: ThemeChangerProp) {
    return (
        <label>
            <input className="" type="checkbox" onClick={prop.themeChanger} />
            <span className="check bg-c-text before:bg-c-base after:bg-c-base">
            </span>
        </label>
    )
}

export default ThemeChanger;
