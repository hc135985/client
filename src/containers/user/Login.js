import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
import { _login } from '../../api/user'
import { withRouter } from 'dva/router'
import { connect } from 'dva'
import './index.css'

@connect(store => store)
@withRouter
class Login extends Component {
    state = {
        layout: {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        },
        tailLayout: {
            wrapperCol: { offset: 8, span: 16 },
        },
        flag: false,
    }


    onFinish = async values => {
        let res = await _login(values)
        if (res.data.status === 1) {
            localStorage.setItem('token', res.data.token)
            this.props.dispatch({ type: 'user/TOKEN', payload: res.data.token })
            message.success(res.data.msg, 1, () => {
                window.location.href = '/index/home'
            })
        } else {
            message.error(res.data.message, 2)
        }
    };
    onOk = () => {
        console.log('ok');
        this.setState({
            flag: false
        })
    }
    ondel = () => {
        this.setState({
            flag: false
        })
        console.log('del');
    }
    render() {
        return (
            <div className='login'>
                <Form
                    {...this.layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.thisonFinishFailed}
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: '请输入你的用户名' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密    码"
                        name="password"
                        rules={[{ required: true, message: '密码不能为空' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item {...this.tailLayout}>
                        <Button type="primary" htmlType="submit">
                            登录
                       </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Login;
