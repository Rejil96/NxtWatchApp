import './App.css'
import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'

// Replace your code here
class App extends Component {
  state = {darkTheme: false, savedVideos: []}

  onUpdateTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  onSavedVideos = videosData => {
    const {savedVideos} = this.state
    if (savedVideos.length === 0) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, videosData],
      }))
    } else {
      this.setState(prevState => ({
        savedVideos: prevState.savedVideos.filter(eachData => {
          if (eachData.id !== videosData.id) {
            return eachData
          }

          return null
        }),
      }))
    }
  }

  render() {
    const {darkTheme, savedVideos} = this.state

    return (
      <ThemeContext.Provider
        value={{
          darkTheme,
          savedVideos,
          onUpdateTheme: this.onUpdateTheme,
          onSavedVideos: this.onSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
