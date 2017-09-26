import React from 'react';
import ReactDOM from 'react-dom';
import '../Css/index.css';
//import SidebarSelf from './Sidebar';
import MainRegion from './MainRegion';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Modal, Grid, List } from 'semantic-ui-react';


class MyApp extends React.Component {

    constructor() {
        super();
        this.state = { currentSelectedWidget: 'Forest', modalVisable: true, SidebarVisible: true, titleText: 'Fill in the following form to create a new Forest' };
    }


    render() {
        return (
            <div >
                <Modal style={{ height: 350, fontSize: 17 }} open={this.state.modalVisable} onClose={this.ModalClose} >
                    <Modal.Content >
                        <Modal.Description >
                            <Header>AECOM BTS Data Collector Demo Site</Header>
                            <p>This website demonstrates the capability of collecting data for three types of assets.</p>

                            <List style={{ marginLeft: 20 }}>
                                <List.Item>
                                    <List.Icon size='large' name='tree' />
                                    <List.Content style={{ paddingTop: 5 }}>Forest</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon size='large' name='bug' />
                                    <List.Content style={{ paddingTop: 5 }}>Bug</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon size='large' name='settings' />
                                    <List.Content style={{ paddingTop: 5 }}>Plants</List.Content>
                                </List.Item>
                            </List>

                            <p style={{ marginTop: 40 }}>For more infomation, please contact <a href="mailto:Joseph.Weyl@aecom.com">Joseph Weyl</a> or <a href="mailto:wei.liang@aecom.com">Wei Liang</a>.</p>

                            <Button primary onClick={(e) => this.setState({ modalVisable: false })} floated={'right'} style={{ position: 'absolute', bottom: 20 }}>Got it</Button>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>

                {/*The head Navigation Bar*/}
                <nav className="navbar navbar-default" style={{ marginBottom: 0,height: '5vh', background: '#808082' }} >
                    <Grid  >
                        <Grid.Row>
                            <Grid.Column width={2} textAlign={'center'} style={{ marginTop: 10 }}>
                                <img style={{ height: 30, width: 120 }} src={require('../Image/AecomNew.png')} />
                            </Grid.Column>
                            <Grid.Column textAlign={'center'} width={14} style={{ marginTop: 10, color: 'White' }}>
                                <h2>Business Technology Solutions (BTS) - Web Collector Demo</h2>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </nav>


                <Sidebar.Pushable as={Segment} style={{ height: '94.5vh', marginTop: 0 }}>
                    <Sidebar as={Menu} animation='push' width='thin' visible={this.state.SidebarVisible} icon='labeled' vertical inverted style={{ background: '#808082' }}>
                        <Menu.Item name='tree' onClick={(e) => { this.setState({ currentSelectedWidget: "Forest", titleText: "Fill in the following form to create a new Forest" }); }}>
                            <Icon name='tree' />Forest
                        </Menu.Item>
                        <Menu.Item name='bug' onClick={(e) => this.setState({ currentSelectedWidget: "Bug", titleText: "Fill in the following form to create a new Bug" })}>
                            <Icon name='bug' />Bug
                        </Menu.Item>
                        <Menu.Item name='settings' onClick={(e) => this.setState({ currentSelectedWidget: "Plant", titleText: "Fill in the following form to create a new Plant" })}>
                            <Icon name='settings' />Plants
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                            <div className="container-fluid" >

                                <div className="row">
                                    <div className="col-sm-12">
                                        {/*<SidebarSelf sideBarDivRef={et => this.sideBarDivRef = et} sideBarWidgetItemIconClick={this.sideBarWidgetItemIconClick} />*/}
                                        <MainRegion currentSelectedWidget={this.state.currentSelectedWidget} titleText={this.state.titleText}
                                            mainDivRef={el => this.mainDivRef = el} onThreeLineIconClick={(e) => this.setState({ SidebarVisible: !this.state.SidebarVisible })}
                                            onShowResultTable={(e) => this.setState({ currentSelectedWidget: "ViewAllData", titleText: "View all the " + e + " data." })} />
                                    </div>
                                </div>
                            </div>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>

            </div>
        );
    }
}

export default MyApp;