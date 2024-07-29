import logo from '../assets/images/logo.svg'
import addTodos from '../utils/common.js'


function HelloApp() {
    return (
        <div className="HelloApp">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Todo app</p>
        </div>

    );
}

export default HelloApp;
