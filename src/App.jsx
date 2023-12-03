import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";

function App() {
    return (
        <>
            <div id="app">
                <NavBar />
                <ItemListContainer saludo="´Bienvenidos a mi Ecommerce´" />
            </div>
        </>
    );
}

export default App;
