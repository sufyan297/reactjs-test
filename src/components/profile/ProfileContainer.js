import React from 'react';
import { Card, Input, Button, Row, Col } from 'antd';
import { get } from 'lodash';

export default class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null
    };
  }

  onSubmit() {
    const tmpUsername = this.state.username;
    this.props.userStore.setUser({ ...this.props.userStore.user, username: tmpUsername});
  }


  render() {
    return (
      <>
        <div>
          <Card style={{ width: 400 }} title={'User Profile'}>
            <Row>
              <Col>
                <span>Username</span>
                <Input placeholder={'Username'} onChange={(e) => this.setState({ username: e.target.value })} defaultValue={get(this.props, 'userStore.user.username', null)} />
              </Col>
            </Row>
            <Row style={{paddingTop: 20}}>
              <Col>
                <Button type="primary" onClick={() => this.onSubmit()}>Submit</Button>
              </Col>
            </Row>
          </Card>
        </div>
      </>
    )
  }
}