import { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "theme/theme";
// import { APP_NAV_ITEMS } from "component/navigation/NavItems";
import { Link } from "react-router-dom";

interface ILibrary {
  id: number;
  name: string;
}

const Library = () => {
  const [libraries, setLibraries] = useState<ILibrary[]>([]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const getData = async () => {
    try {
      const response = await axios.get("https://localhost:7135/api/Library", {
        headers: { "Access-Control-Allow-Origin": "http://localhost:3000" },
      });
      console.log(response);
      return response.data.data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getLibraries = async (): Promise<void> => {
      const libraries = await getData();

      if (libraries) {
        setLibraries(libraries);
      }
    };

    getLibraries();
  }, []);

  const LibraryCard = (library: ILibrary) => {
    return (
      <Grid
        item
        key={library.id}
      >
        <Card sx={{ minWidth: 275, backgroundColor: colors.primary[400] }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Maybe A Nickname
            </Typography>
            <Typography
              variant="h5"
              component="div"
            >
              {library.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }}>Trietary text</Typography>
            <Typography variant="body2">Long description of Library</Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              color="secondary"
            >
              Manage
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  };

  return (
    <Box>
      {/* SUB_NAV */}
      <Paper sx={{ mb: 4, px: 4, flexGrow: 1 }}>
        <Grid
          container
          justifyContent="space-between"
        >
          {/* SUB_NAV_ITEMS */}
          {/* <Grid item>
            <Tabs>
              {Object.values(APP_NAV_ITEMS).map((item, index) => (
                <Tab
                  key={index}
                  label={item.name}
                  value={item.route}
                  to={item.route}
                  component={Link}
                />
              ))}
            </Tabs>
          </Grid> */}
          {/* SUB_NAV_OPTIONS */}

          <Grid item>
            <Typography>Create New</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Container maxWidth={false}>
        <Grid
          container
          spacing={2}
        >
          {libraries.length > 0 ? (
            libraries.map((library) => LibraryCard(library))
          ) : (
            <h2>No Libraries Found</h2>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Library;
