import { Button, Card } from 'react-bootstrap';
import MoviesComponent from '../component/MoviesComponent';
import { useEffect, useState } from 'react';
import axios from "axios"
import { Navbar, Container, Row, Col, Form, Alert, NavDropdown, Nav } from 'react-bootstrap';

function HomeComponent(props) {
    const [moviesData, setMovieData] = useState([]);


    useEffect(() => {
        const init = async () => {
            try {
                const response = await axios.get('http://fsimdbbackend-env.eba-6xb8tzsg.ap-south-1.elasticbeanstalk.com/title-basics');
                console.log(response);

                setMovieData(response.data)

            } catch (error) {

                console.error(error);
            }
        }
        init()
    }, [])
    return (
        <>

            <Row>
                {moviesData.map(
                    (movie, index) => {
                        return (
                            <Col xs={12} md={4} >
                                <MoviesComponent mve={{ id: index + 1, ...movie }} />
                            </Col>
                        )
                    }
                )
                }[]
            </Row>

        </>

    )
}

export default HomeComponent;