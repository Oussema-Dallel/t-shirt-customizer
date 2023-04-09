import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-unassigned-import
import './index.css';

// eslint-disable-next-line jest/require-hook, @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.querySelector('#root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
