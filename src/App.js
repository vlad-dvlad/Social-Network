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
                <Content profileState={props.appState.profilePage}
                         dialogsState={props.appState.dialogsPage}
                         addPost={props.addPost}
                         updateNewPostText={props.updateNewPostText}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;
