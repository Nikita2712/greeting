import react from 'react';
import reactDOM from 'react-dom';
import "./index.css";

let curDate = new Date();
curDate = curDate.getHours();
let greeting = ' ';
const cssStyle = {};

if (curDate >= 1 && curDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
} else if (curDate >= 12 && curDate < 17) {
    greeting = "Good Afternoon";
    cssStyle.color = "yellow";
} else if (curDate >= 17 && curDate < 20) {
    greeting = "Good Evening";
    cssStyle.color = "orange";
} else {
    greeting = 'Good Night';
    cssStyle.color = "black";
}
reactDOM.render(
    <>
        <div>
            <h1>Hello Everyone,<span style={cssStyle}>{greeting}</span> </h1>
        </div>
    </>,
    document.getElementById('root')
);