import React from 'react';
import { connect } from 'react-redux';
import SearchBox from './searchBox';
import Result from './results/result';
import Compare from './compare/compare';
import * as actions from '../../redux/actions';



const ConnectedHome = (props) => {
    
    function isCompared(id){
        return props.compareBetween.indexOf(id) !== -1;
    }

    const {starredCompanies, companies, compareBetween, clearAll} = props;
        return (<div className="home">
            <SearchBox />
           { companies.length === 0 && <div className="dotted"/>}
            <div className="ui cards" >
                {companies.filter(c => starredCompanies.indexOf(c.id) !== -1).map((c, i) => <Result key={c.id + i} company={c}
                    isStarred={true} isCompared={isCompared(c.id)}
                />)}
                {companies.filter(c => starredCompanies.indexOf(c.id) === -1).map((c, i) => <Result key={c.id + i} company={c}
                    isStarred={false} isCompared={isCompared(c.id)} />)}
            </div>
            {compareBetween.length > 0 && <Compare list={compareBetween.map(id => companies.find(c => c.id === id))} clearAll={clearAll}/>}
            </div>);
    }


const mapStateToProps = state => {
    return {
        starredCompanies: state.starredCompanies,
        companies: state.companies,
        compareBetween: state.compareBetween
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearAll: () => dispatch(actions.removeAllFromComparation())
    }
}

const Home = connect(mapStateToProps , mapDispatchToProps)(ConnectedHome);

export default Home;