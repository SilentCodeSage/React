//creating nested elements using react

const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"chlid"},
            [
                React.createElement(
                    "h1", 
                    {},
                    "Hello i am Nandu"
                ),
                React.createElement(
                    "h2", 
                    {},
                    "Hello i am Nandu"
                )
            ]
        ),
        React.createElement(
            "div",
            {id:"chlid1"},
            [
                React.createElement(
                    "h1", 
                    {},
                    "Hello i am Nandu"
                ),
                React.createElement(
                    "h2", 
                    {},
                    "Hello i am Nandu"
                )
            ]
        )
    ]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);   
