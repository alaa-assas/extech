import React from 'react'
import ProcessCard from '../ProcessCard/ProcessCard'
import { Col, Container, Row } from 'react-bootstrap'
import './Processes.css'
import { ProcessData } from '../../Data/ProcessData'
export default function Processes() {
  return (
    <section class="AA-process-section">
        <Container>
            <Row className="gy-3">
                { ProcessData.map((e, index) => {
                    var countDelay = 400*index;
                        return (
                            <Col xl={3}>
                                <ProcessCard 
                                    step={e.step}
                                    title={e.title} 
                                    body={e.body}
                                    delay={countDelay}>
                                </ProcessCard>
                            </Col>
                        )
                    })}
            </Row>
        </Container>
    </section>
  )
}
