import './App.scss';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import HeaderContainer from "./components/header/HeaderContainer";
import React, {Component} from "react";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {HashRouter, withRouter} from "react-router-dom";
import {initializedApp} from "./redux/reducers/appReducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/reduxStore";

class App extends Component {

    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className="wrapper">
                <HeaderContainer/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializedApp})
)(App);

const MainApp = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
    );
}

export default MainApp;