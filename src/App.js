import './App.scss';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import {BrowserRouter} from "react-router-dom";


function App(props) {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Content posts={props.posts} dialogs={props.dialogs} messages={props.messages}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;
