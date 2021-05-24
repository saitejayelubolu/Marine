import React, { Component } from 'react';
import * as ReactBootstrap from "react-bootstrap";
import '../App.css';

export default class About extends React.Component {
    render() {
        return (
            <div>
              <ReactBootstrap.Image src="banner2.jpg" style={{"height":"200px", "width":"100%"}} />
              <div >
                <ReactBootstrap.Card>
                  <ReactBootstrap.Card.Header as="h5">About Us</ReactBootstrap.Card.Header>
                  <ReactBootstrap.Card.Body>
                    <ReactBootstrap.Card.Text>
                      ARCS Marine Services is a subsidiary company of a three-generation old company Siri Agro 
                      Exports having a global presence in trading agro products. The trade-off grew with flying colours and it 
                      became the traditional family business in the Godavari Districts of Andhra Pradesh, India. Siri Agri 
                      Exports is the official vendor for McDerMott, Kakinada Sea Ports Ltd., Reliance Industries, ONGC and subcontractors like Sodexo and OCS.
                    </ReactBootstrap.Card.Text>
                    <ReactBootstrap.Card.Text>
                      Beginning its operations in 2020, ARC Marine Services is registered as a service provider for oil 
                      & gas and shipping industry clients in and around Kakinada which is now an evolving oil hub of India. 
                      Our prime deliveries include OEMs specialized fabrication services, machining capabilities, ship repair 
                      services like blasting, painting etc. and deliver all industry needs. Our team of engineers and highly 
                      trained technical staff meet our client's operational challenges with confidence and trust.
                    </ReactBootstrap.Card.Text>
                    
                    <hr></hr>
                    <ReactBootstrap.Card.Title>Our Goal</ReactBootstrap.Card.Title>
                    <ReactBootstrap.Card.Text>
                      Our goal is to work closely with our customers and exceed their expectations. We know that high quality 
                      products and service are best delivered through passionate people. The dedication to fabrication 
                      standards, quality control and transportation all show the personal responsibility our team takes for 
                      delivering great projects.
                    </ReactBootstrap.Card.Text>

                    <hr></hr>
                    <ReactBootstrap.Card.Title>Our Vision</ReactBootstrap.Card.Title>
                    <ReactBootstrap.Card.Text>
                      To become the trusted partner of our clients, investing in long-term collaborative relationships with 
                      employees, clients, and suppliers alike.
                    </ReactBootstrap.Card.Text>

                    <hr></hr>
                    <ReactBootstrap.Card.Title>Our Quality Policy</ReactBootstrap.Card.Title>
                    <ReactBootstrap.Card.Text>
                      We know that the relationship between the organisation and suppliers is interdependent and hence we 
                      aim to provide a mutually beneficial relationship that provides value to both the parties. To implement 
                      this policy, ARCS Marine Services will soon establish a Quality Management System in line with the 
                      requirements of the ISO 9001:2015 Standard or equivalent.
                    </ReactBootstrap.Card.Text>
                  </ReactBootstrap.Card.Body>
                </ReactBootstrap.Card>
              </div>  
            </div>  
        )
    }
}