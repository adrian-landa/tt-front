import React from 'react';
import HomeLayout from './containers/HomeLayout'
import {Switch,Route} from 'react-router-dom'
import UploadFile from './components/upload/UploadFile';
import DeviceContainer  from './containers/DeviceContainer'
import DeviceDashboard from './containers/DeviceDashboard'
import AboutUsContainer from './containers/AboutUsContainer'

export default class extends React.Component{
  state = {}

  render(){
    return (
      <div>
        <HomeLayout>
          <Switch>
            <Route path='/' exact component={AboutUsContainer}/>
            <Route path='/device' exact component = {DeviceContainer}/>
            <Route path='/device/:id' exact component={DeviceDashboard}/>
            <Route path='/device/:id/upload' component={UploadFile}/>
          </Switch>
        </HomeLayout>
      </div>
    );
  }
}
