import './App.scss';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';


function App(props) {
    return (
        <div className="wrapper">
            <Header/>
            <Content
                profileState={props.appState.profilePage}   // profile
                dialogsState={props.appState.dialogsPage}   // dialogs
                dispatch={props.dispatch}
            />
            <Footer/>
        </div>
    )
}

export default App;
