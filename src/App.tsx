import 'App.css';
import Typography from '@mui/material/Typography';
import GlobalsProvider from 'provider/GlobalsProvider';
import HomeTopNav from 'component/navigation/HomeTopNav';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<>
			<GlobalsProvider>
				<HomeTopNav />
				<Typography variant='h2'>Dharma Library</Typography>
				<Typography>My App Code</Typography>
				<Outlet />
			</GlobalsProvider>
		</>
	);
}

export default App;
