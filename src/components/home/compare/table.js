import React from 'react';
import {  Table } from 'semantic-ui-react'

const CompaniesTable = (props) => {
    const {list} = props;
    return (<div  className="spacy"><Table striped definition celled>
        <Table.Header fullWidth>
            <Table.Row textAlign='center'>
            <Table.HeaderCell/>
                {list.map(c => <Table.HeaderCell key={c.id} >
                    <h1 className="ui sub header">{c.logo && <img src={c.logo} alt="logo" className="ui minileft spaced image" />} {c.name || c.domain}</h1>
                </Table.HeaderCell>)}
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell>Type</Table.Cell>
                    {list.map(c => <Table.Cell key={c.id} >
                   {c.type || 'n/a'}
                </Table.Cell>)}
            </Table.Row>
            <Table.Row>
            <Table.Cell>Industry</Table.Cell>
                    {list.map(c => <Table.Cell key={c.id} >
                   {c.category.industry || 'n/a'}
                </Table.Cell>)}
            </Table.Row>
            <Table.Row>
            <Table.Cell>Annual Revenue</Table.Cell>
                    {list.map(c => <Table.Cell key={c.id} >
                   {c.metrics.estimatedAnnualRevenue || 'n/a'}
                </Table.Cell>)}
            </Table.Row>
            <Table.Row>
            <Table.Cell>Market Cap</Table.Cell>
                    {list.map(c => <Table.Cell key={c.id} >
                   {c.metrics.marketCap || 'n/a'}
                </Table.Cell>)}
            </Table.Row>
            <Table.Row>
            <Table.Cell>Money Raised</Table.Cell>
                    {list.map(c => <Table.Cell key={c.id} >
                   {c.metrics.raised || 'n/a'}
                </Table.Cell>)}
            </Table.Row>
            <Table.Row>
            <Table.Cell>Number of Employees</Table.Cell>
                    {list.map(c => <Table.Cell key={c.id} >
                   {c.metrics.employees || 'n/a'}
                </Table.Cell>)}
            </Table.Row>
        </Table.Body>
    </Table>
    </div>
    )
}

export default CompaniesTable;
