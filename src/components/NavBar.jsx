import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'

function NavBar () {
    return (
        <Navbar bg= 'secondary' data-bs-theme='secondary' sticky='top'>
            <Container>
                <Navbar.Brand as={Link}>PupurriShop</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link as={Link} to='/category/beauty'>Beauty</Nav.Link>
                    <Nav.Link as={Link} to='/category/fragances'>Fragances</Nav.Link>
                    <Nav.Link as={Link} to='/category/womens-bags'>Bags</Nav.Link>
                    <Nav.Link as={Link} to='/category/womens-jewellery'>Jewellery</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar