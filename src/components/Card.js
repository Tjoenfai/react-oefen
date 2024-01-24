import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({title, text, buttonText, buttonColor}) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant={buttonColor}>
            {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}
