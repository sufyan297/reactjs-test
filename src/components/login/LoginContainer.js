import React from 'react';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import { inject, observer } from 'mobx-react';

class LoginContainer extends React.Component {

  componentDidMount() {
    console.log("userStore: ", this.props.userStore);
  }
  async onFinish(data) {
    console.log("FormData: ", data);
    const resp = await this.props.userStore.onLogin(data);
    
    // this.props.history.push('/');
  }

  onFinishFailed(data) {
    console.log("Form Failed: ", data);
  }

  render() {
    return (
      <>
      <div className="login-container">
        <div style={{padding: 30, backgroundColor: '#fff', borderRadius: 5}}>
          <Row style={{flexDirection: 'column'}}>
            <Col style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <h1>Login</h1>
            </Col>
            <Col>
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={(data) => this.onFinish(data)}
                onFinishFailed={(data) => this.onFinishFailed(data)}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}} name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
      </>
    )
  }
}
export default inject(['userStore'])(observer(LoginContainer));