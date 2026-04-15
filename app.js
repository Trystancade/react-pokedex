function App() {
    return (
        <div>
            <h1 className="title"> Pokedex</h1>
            <Pokedex />
        </div>
    )
}

const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<App />);