import React from 'react';
import { store } from '../../redux/store';
import { Icon, Statistic } from 'semantic-ui-react';
import Map from './map';
import { Link } from 'react-router-dom';

const OneCompany = (props) => {
    const { match: { params } } = props;
    const company = store.getState().companies.find(e => e.id === params.id);
    return (<div className="ui raised very padded text segment black w80">
        <h1 className="ui header">
            {company.logo && <img alt="logo" className="ui small image" src={company.logo} />}
            <div className="content">
                {company.name || company.domain}
                <div className="sub header">{company.domain}</div>
            </div>
        </h1>
        <p>{company.description}</p>
        {company.category.industry && <p className="meta"><i className="suitcase icon"></i> {company.category.industry}</p>}
        <Statistic.Group size={window.innerWidth < 768 ? "small" : null}>
            {company.metrics.marketCap && <Statistic>
                <Statistic.Value>{Math.round(company.metrics.marketCap / 1000000) + 'M'}</Statistic.Value>
                <Statistic.Label><Icon name='money bill alternate outline' />Market Cap</Statistic.Label>
            </Statistic>}
            {company.metrics.estimatedAnnualRevenue && <Statistic>
                <Statistic.Value>
                    {company.metrics.estimatedAnnualRevenue}
                </Statistic.Value>
                <Statistic.Label>Annual Revenue</Statistic.Label>
            </Statistic>}

            {company.metrics.employees && <Statistic>
                <Statistic.Value>
                    {company.metrics.employees}
                </Statistic.Value>
                <Statistic.Label><Icon name='users' />Employees</Statistic.Label>
            </Statistic>}

            {company.metrics.raised && <Statistic>
                <Statistic.Value>
                    {company.metrics.raised}
                </Statistic.Value>
                <Statistic.Label><Icon name="usd" />Money raised</Statistic.Label>
            </Statistic>}
        </Statistic.Group>
        <Map lat={company.geo.lat} lng={company.geo.lng} />
        <p className="meta">{company.location}</p>
        <Link to="/">Back to home page</Link>
    </div>);
}

export default OneCompany;