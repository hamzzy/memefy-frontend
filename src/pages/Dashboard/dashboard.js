import React, {Component} from 'react';
import Header from "../../components/Header";
import {Tabs,Tab} from "react-bootstrap";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Home">

                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                        </Tab>

                    </Tabs>
                </div>

            </div>
        );
    }
}

export default Dashboard;