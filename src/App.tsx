import 'App.css';
import GlobalsProvider from 'provider/GlobalsProvider';
import HomeTopNav from 'component/navigation/HomeTopNav';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<>
			<GlobalsProvider>
				<HomeTopNav />
				<Outlet />
			</GlobalsProvider>
		</>
	);
}

export default App;
