import Card from 'react-bootstrap/Card';

function GridExample({ title, text, children }) {
    return (
        <Card>
            <Card.Body>
                <h2 className="text-primary">{children}</h2>
                <Card.Title>{ title }</Card.Title>
                <Card.Text>{ text }</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default GridExample;