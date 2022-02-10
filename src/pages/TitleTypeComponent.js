import { Button, Card } from 'react-bootstrap';
import MoviesComponent from '../component/MoviesComponent';
import { useEffect, useState } from 'react';
import axios from "axios"
import { Navbar, Container, Row, Col, Form, Alert, NavDropdown, Nav } from 'react-bootstrap';
import {useParams} from "react-router-dom";

function TitleTypeComponent(props) {
             const [moviesData, setMovieData] = useState([]);

             const param=useParams()
            console.log(param)   //useparam  return obj params key

             useEffect(() => { const init = async () => {
                try {
                const response = await axios.get('http://fsimdbbackend-env.eba-6xb8tzsg.ap-south-1.elasticbeanstalk.com/title-basics/?filter[where][titleType]='+param.type);//remove ?filter[where][titleType]=tvSeries
                console.log(response);
                setMovieData(response.data)
                } catch (error) {
                  console.error(error);}}
                  
                init()}, [param.type])  //param.type for rerendor when variable change

             return (
              <>
            <h6> Showing {param.type}</h6>
            <Row>
             {moviesData.map(
            (movie, index) => {
            return (
                    <Col xs={12} md={3} >
                    <MoviesComponent mve={{ id: index + 1, ...movie }} />
                    </Col>
                    )})}[]
                    </Row>
                    </>)}

export default TitleTypeComponent;