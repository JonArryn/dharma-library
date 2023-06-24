import { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ILibrary {
    id: number;
    name: string;
}

const Library = () => {

    const [libraries, setLibraries] = useState<ILibrary[]>( [] )

    const getData = async () => {

        try {
            const response = await axios.get( 'https://localhost:7135/api/Library', {headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'}} );
            console.log( response );
            return response.data.data;

        } catch ( e ) {
            console.log( e );
        }

    }

    useEffect( () => {
        const getLibraries = async (): Promise<void> => {
            const libraries = await getData()

            if (libraries) {
                setLibraries( libraries );
            }
            ;


        };

        getLibraries();
    }, [] )

    const LibraryCard = (library: ILibrary) => {
        return (
            <>
                <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        Maybe A Nickname
                    </Typography>
                    <Typography variant="h5" component="div">
                        {library.name}
                    </Typography>
                    <Typography sx={{mb: 1.5}}>
                        Trietary text
                    </Typography>
                    <Typography variant="body2">
                        Long description of Library
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained">Manage</Button>
                </CardActions>
            </>
        )
    }

    return (
        <>
            <Container>
                {libraries.length > 0 ? libraries.map( library => LibraryCard(library) ) :
                    <h2>No Libraries Found</h2>}
            </Container>

        </>
    );
};

export default Library;
