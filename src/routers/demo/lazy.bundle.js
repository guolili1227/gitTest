import reducers from './reducers';
import sagas from './sagas';
import view from './view';
const module = {
    reducers: {demo: reducers},
    sagas: {demo: sagas},
    view: view

}
export default module

