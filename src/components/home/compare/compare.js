import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import CompaniesChart from './charts';

class Compare extends Component {
    constructor(props) {
        super(props);
        this.state = { showComperation: false, cancel: false }
    }

    toggleCompare() {
        this.setState((state) => { return { showComperation: !state.showComperation } })
    }

    cancel() {
        this.setState({ cancel: true})
        window.setTimeout(() => this.props.clearAll(), 800);
    }

    render() {
        return (<div className="compare"
            style={
                {
                    maxHeight: this.state.showComperation ? '100vh' : (window.innerWidth / window.innerHeight > 1? '10vw' : '10vh' ),
                    overflowY: this.state.showComperation ? 'auto' : 'hidden',
                    bottom: this.state.cancel ? '-100vh' : '0'
                }
            } > {!this.state.showComperation && <> <Button className="ui right floated"
                onClick={this.props.clearAll}> Clear </Button> <Button className="ui right floated"
                    color="blue"
                    disabled={this.props.list.length === 1}
                    onClick={this.toggleCompare.bind(this)} > Compare </Button> 
                    {(window.innerWidth > 640 ? <div className="ui horizontal list" > {
                        this.props.list.map(c => {
                            return (<div className="item"
                                key={c.id} > {
                                    c.logo && < img src={c.logo}
                                        alt="logo"
                                        className="ui mini image" />
                                } <div className="content" >
                                    <div className="ui sub header" > {c.name || c.domain} </div> </div> </div>)
                        })
                    } </div> :
                    <h5 className="higher">{this.props.list.length} selected</h5>)}
                     </>
            }

            
                <div className="charts" style={
                {
                    opacity: this.state.showComperation ? '1' : '0',
                }}>
                    <Button className="ui right floated"
                        onClick={this.cancel.bind(this)} > < Icon name="delete" /> close </Button>
                    <br/>

                    <CompaniesChart list={this.props.list} /> <div/>
            
        </div></div>);
    }
}

export default Compare;