import React from 'react';
import {  Table } from 'semantic-ui-react'

const CompaniesChart = (props) => {
    const {list} = props;
    // console.log(list);
    return (<div  className="spacy"><Table striped definition celled>
        <Table.Header fullWidth>
            <Table.Row textAlign='center'>
            <Table.HeaderCell/>
                {list.map(c => <Table.HeaderCell key={c.id} width="2">
                    <h1 className="ui sub header">{c.logo && <img src={c.logo} alt="logo" className="ui minileft spaced image" />} {c.name || c.domain}</h1>
                </Table.HeaderCell>)}
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell width="1">Type</Table.Cell>
                    {list.map(c => <Table.Cell key={c.id} >
                   {c.type || 'n/a'}
                </Table.Cell>)}
            </Table.Row>
            <Table.Row>
            <Table.Cell>Industry</Table.Cell>
                    {list.map(c => <Table.Cell key={c.id} disabled={!c.category.industry}>
                   {c.category.industry || 'n/a'}
                </Table.Cell>)}
            </Table.Row>
            <Table.Row>
            <Table.Cell>Annual Revenue</Table.Cell>
                    {list.map(c => <Table.Cell key={c.id} positive={ ['$10B+', '$1B-$10B'].indexOf(c.metrics.estimatedAnnualRevenue) !== -1} disabled={!c.metrics.estimatedAnnualRevenue}>
                   {c.metrics.estimatedAnnualRevenue || 'n/a'}
                </Table.Cell>)}
            </Table.Row>
            <Table.Row>
            <Table.Cell>Market Cap</Table.Cell>
                    {list.map(c => <Table.Cell key={c.id} disabled={!c.metrics.marketCap}>
                   {c.metrics.marketCap || 'n/a'}
                </Table.Cell>)}
            </Table.Row>
            <Table.Row>
            <Table.Cell>Money Raised</Table.Cell>
                    {list.map(c => <Table.Cell key={c.id} disabled={!c.metrics.raised}>
                   {c.metrics.raised || 'n/a'}
                </Table.Cell>)}
            </Table.Row>
            <Table.Row>
            <Table.Cell>Number of Employees</Table.Cell>
                    {list.map(c => <Table.Cell key={c.id} disabled={!c.metrics.employees}>
                   {c.metrics.employees || 'n/a'}
                </Table.Cell>)}
            </Table.Row>
        </Table.Body>
    </Table>
    </div>
    )
}

export default CompaniesChart;
