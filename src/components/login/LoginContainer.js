import React from 'react';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';

export default class LoginContainer extends React.Component {

  onFinish(data) {
    console.log("FormData: ", data);
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