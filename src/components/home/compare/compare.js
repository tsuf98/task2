import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import CompaniesTable from './table';

class Compare extends Component {
    constructor(props) {
        super(props);
        this.state = { showComperation: false }
    }

    toggleCompare() {
        this.setState((state) => { return { showComperation: !state.showComperation } })
    }

    render() {
        return (<div className="compare" style={{
            height: this.state.showComperation ? '90%' : 'fit-content',
            overflowY: this.state.showComperation ? 'auto' : 'hidden'}}>
            {!this.state.showComperation && <> <Button className="ui right floated" onClick={this.props.clearAll}>Clear</Button>
                <Button className="ui right floated" color="blue" disabled={this.props.list.length === 1} onClick={this.toggleCompare.bind(this)} >Compare</Button>
                <div className="ui horizontal list">
                    {this.props.list.map(c => {
                        return (<div className="item" key={c.id}>
                            {c.logo && <img src={c.logo} alt="logo" className="ui mini image" />}
                            <div className="content">
                                <div className="ui sub header">{c.name || c.domain}</div>
                            </div>
                        </div>)
                    })}
                </div>
            </>}

            {this.state.showComperation &&
                <>
                    <Button className="ui right floated" onClick={this.toggleCompare.bind(this)}><Icon name="delete" />close</Button>
                    <br />
                    <CompaniesTable list={this.props.list} />
                </>}

        </div>);
    }
}

export default Compare;