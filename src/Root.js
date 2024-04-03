import {store} from './Redux/index'
import { Provider } from 'react-redux';

export default Root = (props) =>{
    return(
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

