//引入从上到下为 react
import React,{memo,useState} from 'react'

//react组件
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

//css
import {LoginWrap} from "./style";

//antd
import {Tabs} from "antd";

const {TabPane} =Tabs

export default function Login(){
  const [Tab,setTab]=useState('1')

  const tabChange=(value)=>{
    setTab(value)
  }

  return (
      <LoginWrap>
        <div className="wrap">
          <Tabs activeKey={Tab} onChange={tabChange}>
            <TabPane tab="登录" key="1">
              <LoginForm />
            </TabPane>
            <TabPane tab="注册" key="2">
              <RegisterForm />
            </TabPane>
          </Tabs>
        </div>
      </LoginWrap>
  )
}