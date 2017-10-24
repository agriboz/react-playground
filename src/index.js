import React from 'react';
import { render } from 'react-dom';

import Root from './components/Root';
import { store } from './configStore';
import App from './App.css'
import registerServiceWorker from './registerServiceWorker';

render(<Root store={store} />, document.getElementById('root'));

registerServiceWorker();
