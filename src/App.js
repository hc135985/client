import React, { Component } from 'react'
import { connect } from 'dva';
import RouterView from '@/router';

@connect((store) => store)
class App extends Component {

  render() {
    const { history, routes } = this.props;
    return <>
      <RouterView history={history} routes={routes}></RouterView>
    </>
  }
}
export default App;
