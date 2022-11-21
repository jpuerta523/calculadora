import React from "react";
import "../estilos/Clear.css"

const Clear = (props)=> (
    <div className="clear" 
    onClick={props.manejarClear}>
        {props.children}
    </div>
);

export default Clear;