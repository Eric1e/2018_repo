import React, { Component } from 'react';
import { Row, Col, Card, List, Progress } from 'antd';

import PageFormat from '../components/PageFormat';

import { Link, withRouter } from 'react-router-dom';
import NotFound from './NotFound';

import moment from 'moment';

const users = [
	{
		_id: '21349',
		name: 'Joe Torraca',
		lastEvent: new Date('04/02/2018')
	},
	{
		_id: '1042890',
		name: 'Paul Dorsch',
		lastEvent: new Date('03/28/2018')
	},
	{
		_id: '1038392',
		name: 'Eric Sheen',
		lastEvent: new Date('04/01/2018')
	},
	{
		_id: '32174890',
		name: 'Luke Senseney',
		lastEvent: new Date('04/04/2018')
	},
	{
		_id: '1234125',
		name: 'Asher Kenerly',
		lastEvent: new Date('02/20/2018')
	}
]

class UserShow extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const user = users.filter(u => u._id === this.props.match.params.id)[0];
		if (!user) {
			return <NotFound/>;
		}
		return (
			<div>
				<PageFormat page="users" title={user.name}>
					<p><b>Last Activity Date:</b> {moment(user.lastEvent).format('MMMM Do, YYYY')}</p>
					<Row type="flex" justify="space-between" style={{width: '100%', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: 10}}>
						<Col xs={8} style={{textAlign: 'center'}}>
							<h3>Assignments Completed</h3>
							<Progress type="dashboard" percent={10} />
						</Col>
						<Col xs={8} style={{textAlign: 'center'}}>
							<h3>Some title Here</h3>
							<Progress type="dashboard" percent={98} />
						</Col>
						<Col xs={8} style={{textAlign: 'center'}}>
							<h3>Some Other Thing</h3>
							<Progress type="dashboard" percent={100} status="success" format={() => '100%'} />
						</Col>
					</Row>
				</PageFormat>
			</div>
		)
	}
}

export default withRouter(UserShow);