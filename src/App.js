import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'


import zhCN from 'antd/lib/locale/zh_CN'

import {ConfigProvider} from 'antd'

import Login from '@/pages/Login'
import Home from '@/pages/Home'

function App() {
  return (
      <ConfigProvider locale={zhCN}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={()=><Login />} />
            <Route path="/home" component={Home} />
            <Redirect from='/' to='home' />
          </Switch>
        </BrowserRouter>
      </ConfigProvider>
  );
}

export default App;
