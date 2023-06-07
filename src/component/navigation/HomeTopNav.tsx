import { useState } from 'react';
import { TOP_NAV_ITEMS, TOP_NAV_USER_ITEMS } from './NavItems';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const HomeTopNav = () => {
	// > State

	const [responsiveMenuAnchorEl, setResponsiveMenuAnchorEl] =
		useState<null | HTMLElement>(null);
	const [userMenuAnchorEl, setUserMenuAnchorEl] = useState<null | HTMLElement>(
		null
	);

	// > Hook
	const navigate = useNavigate();
	const location = useLocation();
	const currentTab = location.pathname;

	// > Local Fn

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
		setResponsiveMenuAnchorEl(event.currentTarget);
	};

	const handleNavMenuClick = (route: string): void => {
		setResponsiveMenuAnchorEl(null);
		navigate(route);
	};

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void => {
		setUserMenuAnchorEl(event.currentTarget);
	};

	const handleUserMenuClick = (route: string): void => {
		setUserMenuAnchorEl(null);
		navigate(route);
	};

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					{/* Standard Nav */}
					<AutoStoriesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='/'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'Khand',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}>
						DHARMA LIBRARY
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Tabs value={currentTab} textColor='secondary' indicatorColor='secondary'>
							{Object.values(TOP_NAV_ITEMS).map((item) => (
								<Tab
									key={item.name}
									label={item.name}
									value={item.route}
									to={item.route}
									component={Link}
									className={`${item.route === currentTab && 'primary-glow'}`}
									sx={{ color: 'white' }}
								/>
							))}
						</Tabs>
					</Box>
					{/* Responsive Nav */}
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={responsiveMenuAnchorEl}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(responsiveMenuAnchorEl)}
							onClose={handleNavMenuClick}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}>
							{Object.values(TOP_NAV_ITEMS).map((item) => (
								<MenuItem key={item.name} onClick={() => handleNavMenuClick(item.route)}>
									<Typography textAlign='center'>{item.name}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<AutoStoriesIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant='h5'
						noWrap
						component='a'
						href=''
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'Khand',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}>
						DHARMA LIBRARY
					</Typography>
					{/* User Avatar Nav */}
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton onClick={handleOpenUserMenu}>
								<Avatar sx={{ bgcolor: 'secondary.main', color: 'white' }}>OP</Avatar>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={userMenuAnchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(userMenuAnchorEl)}
							onClose={handleUserMenuClick}>
							{Object.values(TOP_NAV_USER_ITEMS).map((item) => (
								<MenuItem key={item.name} onClick={() => handleUserMenuClick(item.route)}>
									<Typography textAlign='center'>{item.name}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default HomeTopNav;
