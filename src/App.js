import './App.scss';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import HeaderContainer from "./components/header/HeaderContainer";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {initializedApp} from "./redux/reducers/appReducer";
import Preloader from "./components/common/preloader/Preloader";

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

export default compose(
    withRouter,
    connect(mapStateToProps, {initializedApp})
)(App);
