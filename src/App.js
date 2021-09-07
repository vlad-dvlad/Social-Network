import './App.scss';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import HeaderContainer from "./components/header/HeaderContainer";


function App(props) {
    return (
        <div className="wrapper">
            <HeaderContainer />
            <Content
                // profileState={props.appState.profilePage}   // profile
                // dialogsState={props.appState.dialogsPage}   // dialogs
                // dispatch={props.dispatch}
                // store={props.appStore}
            />
            <Footer/>
        </div>
    )
}

export default App;
