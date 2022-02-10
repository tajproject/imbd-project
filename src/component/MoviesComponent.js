import { Button, Card } from 'react-bootstrap';
function MoviesComponent(props) {
    return (
        <>
            <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/200" />
                <Card.Body>
                    <Card.Title>{props.mve.id + ":" + props.mve.primaryTitle}</Card.Title>
                    <Card.Text>
                    {props.mve.titleType}<br/>
                    {props.mve.startYear}
                    </Card.Text>
                    <Button variant="primary">show details</Button>
                </Card.Body>
            </Card>
        </>)}

export default MoviesComponent;