import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as actions from '../../../redux/actions';
import { connect } from 'react-redux';

const connectedResult = (props) => {
    function toggleStar(id){
        if (!props.isStarred) {
            props.starCompany(id);
        } else {
            props.unStarCompany(id);
        }
    }

    function toggleCompare(id){
        if (!props.isCompared) {
            props.addToComparation(id);
        } else {
            props.removeFromComparation(id);
        }
    }

    

    const { company, isStarred, removeCompany, isCompared } = props;
    return (<div className="card">
        <div className="content">
            <div className="right floated meta pointer">
                <Icon name="delete" onClick={removeCompany.bind(this, company.id)} />
            </div>

            {company.logo && <img alt="logo" className="left floated mini ui image" src={company.logo} />}
            <div className="header">
                {company.name || company.domain}</div>
            <div className="meta">{company.type}</div>
        </div>
        <div className="extra content">
            <div className="flex">
                <i className={'star icon ' + (isStarred ? 'gold' : 'grey')} onClick={toggleStar.bind(this, company.id)} />
                <Link to={"/company/" + company.id}>More Info</Link>
                <Button color={isCompared ? 'green' : null} onClick={toggleCompare.bind(this, company.id)}>Compare</Button>
            </div>
        </div>
    </div>)
}

const mapDispatchToProps = dispatch => {
    return {
        removeCompany: id => dispatch(actions.removeCompany(id)),
        starCompany: id => dispatch(actions.starCompany(id)),
        unStarCompany: id => dispatch(actions.unStarCompany(id)),
        addToComparation: id => dispatch(actions.addToComparation(id)),
        removeFromComparation: id => dispatch(actions.removeFromComparation(id))
    }
}

const Result = connect(null, mapDispatchToProps)(connectedResult);

export default Result;