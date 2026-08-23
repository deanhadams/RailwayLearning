import { useState } from "react";
import "./App.css";
import { getHello } from "./services/api";

function App() {
    const [message, setMessage] = useState(
        "Click the button to test the API."
    );

    const testApi = async () => {
        try {
            const data = await getHello();

            setMessage(data.message);
        } catch (error) {
            console.error(error);
            setMessage("Could not connect to the API.");
        }
    };

    return (
        <div className="app">
            <div className="card">
                <h1>Railway Learning App</h1>

                <p>
                    React + TypeScript
                    <br />
                    ASP.NET Core API
                </p>

                <div className="status">
                    <span className="status-dot"></span>
                    API Test
                </div>

                <button onClick={testApi}>
                    Test API
                </button>

                <p className="message">
                    {message}
                </p>
            </div>
        </div>
    );
}

export default App;