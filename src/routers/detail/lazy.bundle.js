import reducers from "./reducers/reduces.js";
import sagas from './sagas/sagas.js';
import view from './view';
const module = {
    reducers:{detail:reducers},
    sagas:{detail:sagas},
    view:view
}
export default module