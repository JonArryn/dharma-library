import { useEffect, useState } from 'react';
import axios from 'axios';
const Library = () => {

	const [libraries, setLibraries] = useState<{id: number, name: string}[]>([])

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
		const  getLibraries = async () : Promise<void> => {
			const libraries = await getData()
			setLibraries(libraries);
		};

		getLibraries();
	}, [] )

	return (
		<>
			{libraries.map(library => <h1 key={library.id}>{library.name}</h1>)}
		</>
	);
};

export default Library;
