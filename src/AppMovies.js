import React, { useEffect, useState } from "react";
import './MovieCard.css';
import { Form, Col, Button, Navbar, Nav, FormControl, Modal} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "./MovieList";
import MovieAdd from "./MovieAdd"
import Filtre from "./Filtre"
import Test from "./Test"



const AppMovies = () => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [movies, setMovies] = useState([
        {
            titre: "300",
            description: "The plot revolves around King Leonidas (Gerard Butler), who leads 300 Spartans into battle against the Persian Xerxes (Rodrigo Santoro) and his invading army of more than 300,000 soldiers.",
            url: "300.jpg",
            note: '5',
            imgSrc:'300.jpg'},
        {
            titre: "Assassin's Creed",
            description: "In the film, Callum Lynch explores the memories of his ancestor Aguilar de Nerha and gains the skills of a Master Assassin, before taking on the secret Templar society. Filming began in late August 2015 and concluded in January 2016.",
            url: "123456",
            note: 'lorem',
            imgSrc:"assasinscreed.jpg"
        },
        {
            titre: "Last Samurai",
            description: "In the film, Callum Lynch explores the memories of his ancestor Aguilar de Nerha and gains the skills of a Master Assassin, before taking on the secret Templar society. Filming began in late August 2015 and concluded in January 2016.",
            url: "123456",
            note: 'lorem',
            imgSrc:"download.jpg"
        },
        {
            titre: "Mission Impossble",
            description: "In the film, Callum Lynch explores the memories of his ancestor Aguilar de Nerha and gains the skills of a Master Assassin, before taking on the secret Templar society. Filming began in late August 2015 and concluded in January 2016.",
            url: "123456",
            note: 'lorem',
            imgSrc:"mission.jpg"
        },
        {
            titre: "Need For Speed",
            description: "In the film, Callum Lynch explores the memories of his ancestor Aguilar de Nerha and gains the skills of a Master Assassin, before taking on the secret Templar society. Filming began in late August 2015 and concluded in January 2016.",
            url: "123456",
            note: 'lorem',
            imgSrc:"need.jpg"
        },
        {
            titre: "The Mummy",
            description: "An ancient Egyptian princess is awakened from her crypt beneath the desert, bringing with her malevolence grown over millennia, and terrors that defy human comprehension.",
            url: "123456",
            note: 'lorem',
            imgSrc:"the_mummy.jpg"
        },
    ]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleMovieAdd = (newValue) => {
        setMovies([...movies, newValue]);
    };
    
    const handleChange = (searchTerm) => {
        setSearchTerm(searchTerm);
    };
    useEffect(() => {
        const results = movies.filter(movie =>
            movie.titre.toLowerCase().includes(searchTerm)
        );
    
        setSearchResults(results);
        console.log(searchResults.map(item => (
            { item }
        )))
    }, [searchTerm]);
    


    return (
        
        <div className='AppMovies'>

            <>
                <Navbar bg="light" variant="light" fixed="top">
                    <Navbar.Brand  href="#home">Movie Card</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Aboute</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Filtre searchTerm={searchTerm} handleChange={handleChange} />
                        
                        <Button variant="primary" class="btn btn-dark"onClick={handleShow}>Add Movie</Button>
                    </Form>
                </Navbar>



                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Movie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                        <MovieAdd handleMovieAdd={handleMovieAdd}></MovieAdd>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
          </Button>
                   
                    </Modal.Footer>
                </Modal>
            </>

            

            <MovieAdd handleMovieAdd={handleMovieAdd}></MovieAdd>
            

            <MovieList movies={movies.filter(movie => movie.titre.toLowerCase().includes(searchTerm))} />
        </div>
    );
};

export default AppMovies;
