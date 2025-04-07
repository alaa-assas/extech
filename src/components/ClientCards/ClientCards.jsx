import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ClientCard from '../ClientCard/ClientCard'
import './ClientCards.css'
import Title from '../../components/Title/Title'
import { ClientsData } from '../../Data/ClientsData'

export default function ClientCards({color}) {
  return (
    <section className="AA-sec-clients">
        <Container>
            <Title title="TESTIMONIALS" IsCenter={true} color="blue-color-text"></Title>
            <h2 className="text-center">Our Latest Client Feedback</h2>
            <Row>
                { ClientsData.map((e, index) => {
                    var countDelay = 400 * index;
                            return (
                                <Col className={e.class}>
                                    <ClientCard 
                                    img={e.img} 
                                    name={e.name} 
                                    isactive={e.isactive} 
                                    description={e.description} 
                                    position={e.position}
                                    delay={countDelay}
                                    ></ClientCard>
                                </Col>
                            )
                        })}
            </Row>
        </Container>
    </section>
  )
}
