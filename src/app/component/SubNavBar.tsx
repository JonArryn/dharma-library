import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { INavItem } from "../../constant/NavItems";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface IProps {
  navItems: INavItem[];
  buttonList?: { buttonText: string; handleClick: () => void }[];
}

const SubNavBar = ({ navItems, buttonList }: IProps) => {
  const location = useLocation();
  const currentTab = location.pathname;

  return (
    <Paper sx={{ mb: 4, px: 4, flexGrow: 1 }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Tabs
            value={currentTab}
            textColor="secondary"
            indicatorColor="secondary"
          >
            {Object.values(navItems).map((item, index) => (
              <Tab
                key={`${index}:${item.name}`}
                label={item.name}
                value={item.route}
                to={item.route}
                component={Link}
              />
            ))}
          </Tabs>
        </Grid>
        {/* SUB_NAV_OPTIONS */}

        <Grid item>
          <Stack>
            {buttonList?.map((buttonObj) => (
              <Button
                variant="contained"
                color="secondary"
                onClick={buttonObj.handleClick}
              >
                {buttonObj.buttonText}
              </Button>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SubNavBar;
