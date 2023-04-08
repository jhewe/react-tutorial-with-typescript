import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from 'components/App'

const rootEl = document.getElementById('root')
if (rootEl) {
	const root = createRoot(rootEl)
	root.render(
		<StrictMode>
			<App />
		</StrictMode>
	)
}
