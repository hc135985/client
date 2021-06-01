import React, { Component } from 'react';
import { Button } from 'antd'
class Wq extends Component {
    login() {
        this.props.history.push('/login')
    }
    render() {
        return (
            <div>
                <h1>没有权限访问</h1>
                <p>
                    <Button type='primary'
                        onClick={() => { this.login() }}
                    >点击前往登录页</Button>
                </p>
            </div>
        );
    }
}

export default Wq;