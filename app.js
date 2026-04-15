function App() {
    return (
        <Pokedex />
    )
}

const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<App />);