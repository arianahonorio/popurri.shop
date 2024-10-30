import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'


function CartWidget() {
    return (
    <Button variant="dark">
        Carrito <Badge bg="light">0</Badge>
        <span className="visually-hidden"></span>
    </Button>
    );
}

export default CartWidget
