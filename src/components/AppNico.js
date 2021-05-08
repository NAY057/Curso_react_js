import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import BadgesNico from '../pages/BadgesNico'
import BadgeNewNico from '../pages/BadgeNewNico'
import Layout from '../components/LayoutNico'
import NotFound from '../pages/NotFoundNico'
import Home from '../pages/HomeNico'
import BadgeEditNico from '../pages/BadgeEditNico'
import BadgeDetails from '../pages/BadgeDetailsNicoContainer'
function App(){
    return (
      <BrowserRouter>
      <Layout>
        {/* todos estos son los props.children que se refecencian en el componente del layout */}
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path='/' component={Home}/>
          <Route exact path="/badges" component={BadgesNico} />
          <Route exact path="/badges/new" component={BadgeNewNico} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEditNico} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
      </BrowserRouter>
    )
}

export default App