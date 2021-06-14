import React, {memo, useState} from 'react'
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

import {Form, Input, Button, message} from "antd";
import {UserOutlined, LockOutlined} from "@ant-design/icons";


export default memo(function LoginForm() {
  const dispatch=useDispatch()
  const history=useHistory()
  const [Loading,setLoading]=useState(false)


  const onFinish=()=>{

  }

  return (
      <Form onFinish={onFinish}>
        <Form.Item
            name="account"
            rules={[
              {
                required: true,
                message: '请输入账号',
              },
            ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="账号"/>
        </Form.Item>
        <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
            ]}
        >
          <Input
              prefix={<LockOutlined className="site-form-item-icon"/>}
              type="password"
              placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit" className="login-form-button" loading={Loading}>
            登录
          </Button>
        </Form.Item>
      </Form>
  )
})