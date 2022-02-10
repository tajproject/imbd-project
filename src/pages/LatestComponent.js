import { Button, Card } from 'react-bootstrap';
import MoviesComponent from '../component/MoviesComponent';
import { useEffect, useState } from 'react';
import axios from "axios"
import { Navbar, Container, Row, Col, Form, Alert, NavDropdown, Nav } from 'react-bootstrap';





function LatestComponent(props) {
    const [moviesData, setMovieData] = useState([]);


    useEffect(() => {
        const init = async () => {
            try {
                const response = await axios.get('http://fsimdbbackend-env.eba-6xb8tzsg.ap-south-1.elasticbeanstalk.com/title-basics?filter[order]=startYear DESC');//?filter[order]=startYear DESC From loopback
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

            <h2> Showing latest movies</h2>
            <Row>
                {moviesData.map(
                    (movie, index) => {
                        return (
                            <Col xs={12} md={3} >
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

export default LatestComponent;