import React from 'react';
import ReactDOM from 'react-dom';
import '../Css/index.css';
import '../Css/sidebar.css';
 
class Sidebar extends React.Component {
    constructor() {
        super();     
        this.sideBarWidgetItemIconClick = this.sideBarWidgetItemIconClick.bind(this);
    }
  
    sideBarWidgetItemIconClick(e){
        this.props.sideBarWidgetItemIconClick(e);
    }

    render() {     
        return (
            <div ref={this.props.sideBarDivRef} className="sidenav" >

                <div className="container-fluid" style={{marginBottom:20}}>  
                   
                    <div className="row">
                        <div className="col-sm-8">                            
                            <img style={{height:40, width:150}} src={require('../Image/AecomNew.png')}/>
                        </div>                      
                      
                    </div>
                </div>
                <a href="#"  onClick={this.sideBarWidgetItemIconClick}>Introduction</a>
                <a href="#"  onClick={this.sideBarWidgetItemIconClick}>Layers Widget</a>
                <a href="#" onClick={this.sideBarWidgetItemIconClick}>Bookmarks Widget</a>
                <a href="#" onClick={this.sideBarWidgetItemIconClick}>Identify Widget</a>
                <a href="#" onClick={this.sideBarWidgetItemIconClick}>Query Widget</a>
                <a href="#" onClick={this.sideBarWidgetItemIconClick}>Feature Data List Widget</a>
                <a href="#" onClick={this.sideBarWidgetItemIconClick}>Draw Widget</a>
                <a href="#" onClick={this.sideBarWidgetItemIconClick}>Attachment Manager Widget</a>
                <a href="#" onClick={this.sideBarWidgetItemIconClick}>Measurement Widget</a>
                <a href="#" onClick={this.sideBarWidgetItemIconClick}>Print Widget</a>
                <a href="#" onClick={this.sideBarWidgetItemIconClick}>Google Street View Widget</a>
            </div>
        );
    }
}

export default Sidebar;