import './App.scss';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;
