import { html, importCSS } from './framework.ts';
import Loginform from './loginform';

const App = () => {
    importCSS('./style.css');
    return html(`
    ${Loginform()}
    `);
}

export default App;
