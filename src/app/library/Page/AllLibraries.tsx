import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import DharmaApi from "../../../util/DharmaApi";
import LibraryCard from "../Component/LibraryCard";
import { ILibrary } from "type/Library";

const AllLibraries = () => {
  const [libraries, setLibraries] = useState<ILibrary[]>([]);

  const getData = async () => {
    try {
      const response = await DharmaApi("/library");
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
  return (
    <Container maxWidth={false}>
      <Grid
        container
        spacing={2}
      >
        {libraries.length > 0 ? (
          libraries?.map((library) => LibraryCard(library))
        ) : (
          <h2>No Libraries Found</h2>
        )}
      </Grid>
    </Container>
  );
};

export default AllLibraries;
