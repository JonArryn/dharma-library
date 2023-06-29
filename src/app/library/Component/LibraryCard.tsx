import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ILibrary } from "type/Library";
import { useTheme } from "@mui/material";
import { tokens } from "theme/theme";

const LibraryCard = (library: ILibrary) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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

export { LibraryCard as default };
