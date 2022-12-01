import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import NavBar from './components/ui/navBar'
import Main from './layouts/main'
import Login from './layouts/login'
import Rooms from './layouts/rooms'
import User from './layouts/user'
import AdminPage from './layouts/admin'
import {RoomsProvider} from './hooks/useRooms'
import {CategoryProvider} from './hooks/useCategory'
import AuthProvider from './hooks/useAuth'
import {ImageProvider} from './hooks/useImage'
import LogOut from './layouts/logOut'
import ProtectedRoute from './components/common/protectedRoute'

function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <RoomsProvider>
          <CategoryProvider>
            <ImageProvider>
              <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/rooms/:roomId?/:edit?" component={Rooms} />
                <Route path="/admin" component={AdminPage} />
                <Route path="/logout" component={LogOut} />

                <ProtectedRoute path="/user" component={User} />

                <Redirect to="/" />
              </Switch>
            </ImageProvider>
          </CategoryProvider>
        </RoomsProvider>
      </AuthProvider>
    </>
  )
}

export default App
