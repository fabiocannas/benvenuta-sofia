import React, { Component } from 'react'  
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'
import { StaticImage } from "gatsby-plugin-image"

export class BootstrapCarousel extends Component {  
        render() { 
            return (
                <div style={{ display: 'block', maxWidth: '800px', margin: 'auto' }}>
                        <Carousel nextLabel={''} prevLabel={''}>
                            <Carousel.Item>
                            <StaticImage
                                src="../images/benvenuta-sofia.jpeg"
                                width={800}
                                quality={100}
                                formats={["AUTO", "WEBP", "AVIF"]}
                                alt="Benvenuta-Sofia"
                                style={{ marginBottom: `1.45rem` }}
                                />
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
                            </Carousel.Item>
                    </Carousel>
                </div>
        );
    }
}

export default BootstrapCarousel
