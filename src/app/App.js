import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import NavBar from './components/ui/navBar'
import Main from './layouts/main'
import Login from './layouts/login'
import Rooms from './layouts/rooms'
import Contacts from './layouts/contacts'
import AdminPage from './layouts/admin'
import {RoomsProvider} from './hooks/useRooms'
import {CategoryProvider} from './hooks/useCategory'
import {ImageProvider} from './hooks/useImage'

function App() {
  return (
    <>
      <NavBar />
      <RoomsProvider>
        <CategoryProvider>
          <ImageProvider>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/login/:type?" component={Login} />
              <Route path="/rooms/:roomId?/:edit?" component={Rooms} />
              <Route path="/admin" component={AdminPage} />
              <Route path="/contacts" component={Contacts} />

              <Redirect to="/" />
            </Switch>
          </ImageProvider>
        </CategoryProvider>
      </RoomsProvider>
    </>
  )
}

export default App
