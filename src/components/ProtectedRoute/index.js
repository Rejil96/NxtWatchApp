import Cookies from 'js-cookie'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = props => {
  const cookiesSearch = Cookies.get('jwt_token')
  console.log(cookiesSearch)
  if (cookiesSearch === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
