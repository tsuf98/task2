import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

class connectedSearchBox extends Component {
    constructor(props) {
        super(props);

        this.state = { error: '', query: '' }
    }

    search() {
        this.setState({ error: '' })
        let webApiUrl = `https://company-stream.clearbit.com/v2/companies/find?domain=${this.state.query}`;
        let tokenStr = 'sk_ea03da303b89777721f6effa553353bd';
        axios.get(webApiUrl, { headers: { "Authorization": `Bearer ${tokenStr}` } }).then((res) => { this.props.addCompany(res.data); this.clear() })
        .catch((err) => this.setState({ error: 'We couldn\'t find this domain... Try another one!' }));
    }

    inputHandle(e) {
        this.setState({ query: e.target.value });
    }

    clear() {
        this.setState({ query: '', error: '' });

    }

    render() {
        return (<div className="control">
            <Input className="control-input" type="text" placeholder="search for domain"
                onChange={this.inputHandle.bind(this)} onKeyUp={(e)=> { e.keyCode === 13 && this.search()}}value={this.state.query} />
            <Button color="teal" onClick={this.search.bind(this)}>Add</Button>
            {this.state.query && <Button basic inverted color="teal" onClick={this.clear.bind(this)}>clear search</Button>}
            <p className="err">{this.state.error}</p>
        </div>)
    }

}

const mapDispathToProps = dispatch => {
    return { addCompany: company => dispatch(actions.addCompany(company)) }
}

const SearchBox = connect(null, mapDispathToProps)(connectedSearchBox);

export default SearchBox;