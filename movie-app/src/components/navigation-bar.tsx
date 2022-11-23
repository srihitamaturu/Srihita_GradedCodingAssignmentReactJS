import { Nav, Form, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FAVORITE_MOVIES, MOVIES_COMING, MOVIES_IN_THEATERS, TOP_RATED_MOVIES, TOP_RATED_MOVIES_INDIA } from '../constants/constants';
import MoviesByCategory from './movie-by-category';

const NavigationBar = () => {

    return (
        <>
                        <Navbar collapseOnSelect bg='primary' variant='dark' expand="lg">
                <Container>

                    <Navbar.Brand to="/" as={NavLink} exact>
                        {/* <FontAwesomeIcon icon={faVideoCamera} className="me-2" /> */}
                        Home
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-links" />

                    <Nav className="me-auto">
                        <Nav.Link to={MOVIES_IN_THEATERS} as={NavLink}>Movies in theater</Nav.Link>
                        <Nav.Link to={MOVIES_COMING} as={NavLink}>Coming soon</Nav.Link>
                        <Nav.Link to={TOP_RATED_MOVIES_INDIA} as={NavLink}>Top rated Indian Movies</Nav.Link>
                        <Nav.Link to={TOP_RATED_MOVIES} as={NavLink}>Top rated</Nav.Link>
                        <Nav.Link to={FAVORITE_MOVIES} as={NavLink}>Favorites</Nav.Link>
                    </Nav>
                    
                    
                    {/* <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-6"
                        aria-label="Search"
                        onChange={MoviesByCategory.updateValue}
                        style = {{width:'25em'}}
                        />
                    </Form> */}
                </Container>
            </Navbar>

        </>
    );
}

export default NavigationBar;