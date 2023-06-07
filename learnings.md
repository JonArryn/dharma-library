# navigation tabs and routing using Link and NavLink from react-router-dom

> All MUI routing solutions supr off from this page https://mui.com/material-ui/guides/routing/
>
> > I found that in order to get the styling and behavior your want out of using react-router-dom Link and NavLink components, you need to use the component prop properly on the components that you want to use as a react-router Link component in the component={} prop of the MUI component
> >
> > > Detailed explanantion of component prop is found here https://mui.com/material-ui/guides/composition/
> >
> > For my top navigation In this project I ended up using the TABS MUI component in my navigation bar, which required a utility hook that loops through all possible routes to determine which tab to highlight
> >
> > > Tabs routing solution https://mui.com/material-ui/guides/routing/#tabs
> > > The solution above proved to be overdone, I ended up just grabbing the locaiton.pathname value from the location object returned by the useLocation() hook provided by react-router
