import React, { Component } from 'react';
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

export default class OurServices extends React.Component {
    render() {
        return (
            <div>
                <ReactBootstrap.Image src="banner2.jpg" style={{"height":"200px", "width":"100%"}} />
                
                <ReactBootstrap.Container>

                <ReactBootstrap.Card className="text-center">
                    <ReactBootstrap.Card.Title className="text-#483D8B">What we do</ReactBootstrap.Card.Title>
                    <ReactBootstrap.Card.Body>ARCS Marine Services strongly believes in the ideology of investing in people, processes and technology.
                            Over the years we have shaped a business philosophy where partnerships, service quality, consistency 
                            and above all customer satisfaction are paramount.</ReactBootstrap.Card.Body>
                </ReactBootstrap.Card>

                  <ReactBootstrap.Row>
                    <ReactBootstrap.Col sm={8} className="bg-secondary">
                        <h3>What we do</h3>
                        <p >
                            ARCS Marine Services strongly believes in the ideology of investing in people, processes and technology.
                            Over the years we have shaped a business philosophy where partnerships, service quality, consistency 
                            and above all customer satisfaction are paramount.
                        </p>
                        {/* <h3>Provisions and other ship supplies</h3>
                        <p>
                            At Siri Agro Exports, we supply wide range of provisions for onshore and offshore facilities. Our provision 
                            supplies include dry and wet ration for all the on ship and off ship caterers. We are specialized in 
                            supplying fresh vegetables and fruits (direct from farmers) and frozen foods. We buy and stock 
                            intercontinental packaged foods to address the cravings for foreign personnel on board the ship. These 
                            foods include South East-Asian, European, Chinese, Korean and Japanese cuisines
                        </p>
                    
                        <p >
                            Our other deck supplies include deck and engine consumables. Under Raghuram Marine services we 
                            supply most comprehensive ranges of technical, industrial and navigation products for the marine market, 
                            ranging from electronic equipment, ropes, wires, loose paints and industrial tools, operating spares, and 
                            instruments. 
                        </p>

                        <p>
                            With a motto of swift delivery for emergency supplies we stock necessary items at our warehouse 
                            facilities and service our customer on demand. ARCS Marine Services is aimed to be one stop shop for 
                            deck stores and stocks.
                        </p> */}
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col sm={4} >
                        <img src="about us.jpg" />
                    </ReactBootstrap.Col>
                  </ReactBootstrap.Row>

                </ReactBootstrap.Container>
            </div>
        )
    }
}