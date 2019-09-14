import React from 'react';
import HomeLayout from './containers/HomeLayout'
import {Switch,Route} from 'react-router-dom'
import UploadFile from './components/upload/UploadFile';

export default class extends React.Component{
  state = {}

  render(){
    return (
      <div>
        <HomeLayout>
          <Switch>
            <Route path='/' exact render={()=><div>Home</div>}/>
            <Route path='/upload' component={UploadFile}/>
          </Switch>
        </HomeLayout>
      </div>
    );
  }
}
