import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import {HomeContainer} from './componentStyle'

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <HomeContainer bgColor={darkTheme}>
              <Header />
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
