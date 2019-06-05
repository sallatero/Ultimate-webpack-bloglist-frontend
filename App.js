import React, { useEffect } from 'react'
import MenuComponent from './src/components/MenuComponent'
import Footer from './src/components/Footer'
import { initializeBlogs } from './src/reducers/blogReducer'
import { connect } from 'react-redux'
import { initializeUser } from './src/reducers/loggedUserReducer'
import { initializeUsers } from './src/reducers/userlistReducer'
import { BrowserRouter as Router } from 'react-router-dom'

const App = (props) => {
  console.log('app alkoi')
  //Haetaan kirjautuneen käyttäjän tiedot ekalla latauksella
  useEffect(() => {
    props.initializeUser()
  }, [])

  //Haetaan kannasta blogit
  useEffect(() => {
    props.initializeBlogs()
  }, [])

  //Haetaan kannasta käyttäjät
  useEffect(() => {
    props.initializeUsers()
  }, [])

  return (
    <Router>
      <MenuComponent />
      <Footer />
    </Router>
  )
}

const mapDispatchToProps = {
  initializeUser,
  initializeBlogs,
  initializeUsers
}
export default connect(null, mapDispatchToProps)(App)