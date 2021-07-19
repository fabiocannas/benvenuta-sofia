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
                                src="../images/messages/ivan.PNG"
                                width={400}
                                quality={100}
                                formats={["AUTO", "WEBP", "AVIF"]}
                                alt="ivan"
                                style={{ marginBottom: `1.45rem` }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                            <StaticImage
                                src="../images/messages/lavinia.PNG"
                                width={400}
                                quality={100}
                                formats={["AUTO", "WEBP", "AVIF"]}
                                alt="lavinia"
                                style={{ marginBottom: `1.45rem` }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                            <StaticImage
                                src="../images/messages/marco.PNG"
                                width={400}
                                quality={100}
                                formats={["AUTO", "WEBP", "AVIF"]}
                                alt="marco"
                                style={{ marginBottom: `1.45rem` }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                            <StaticImage
                                src="../images/messages/enrico.PNG"
                                width={400}
                                quality={100}
                                formats={["AUTO", "WEBP", "AVIF"]}
                                alt="enrico"
                                style={{ marginBottom: `1.45rem` }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                            <StaticImage
                                src="../images/messages/maurizio.PNG"
                                width={400}
                                quality={100}
                                formats={["AUTO", "WEBP", "AVIF"]}
                                alt="maurizio"
                                style={{ marginBottom: `1.45rem` }}
                                />
                            </Carousel.Item>
                    </Carousel>
                </div>
        );
    }
}

export default BootstrapCarousel
