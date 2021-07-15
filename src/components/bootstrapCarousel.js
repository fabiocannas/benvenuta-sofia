import React, { Component } from 'react'  
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'
import { StaticImage } from "gatsby-plugin-image"

export class BootstrapCarousel extends Component {  
        render() { 
            return (
                <div style={{ display: 'block', width: 800, padding: 30, margin: 'auto' }}>
                        <Carousel>
                            <Carousel.Item>
                            <StaticImage
                                src="../images/benvenuta-sofia.jpeg"
                                width={800}
                                quality={100}
                                formats={["AUTO", "WEBP", "AVIF"]}
                                alt="Benvenuta-Sofia"
                                style={{ marginBottom: `1.45rem` }}
                                />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <StaticImage
                                src="../images/benvenuta-sofia.jpeg"
                                width={800}
                                quality={100}
                                formats={["AUTO", "WEBP", "AVIF"]}
                                alt="Benvenuta-Sofia"
                                style={{ marginBottom: `1.45rem` }}
                                />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <StaticImage
                                src="../images/benvenuta-sofia.jpeg"
                                width={800}
                                quality={100}
                                formats={["AUTO", "WEBP", "AVIF"]}
                                alt="Benvenuta-Sofia"
                                style={{ marginBottom: `1.45rem` }}
                                />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                            </Carousel.Item>
                    </Carousel>
                </div>
        );
    }
}

export default BootstrapCarousel
