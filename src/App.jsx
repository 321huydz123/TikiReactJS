import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './Routes'
import { DefaultLayout } from './Layout'
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout
            const Page = route.component
            return <Route
              key={index}
              path={route.path}
              element=
              {<Layout>
                <Page />
              </Layout>}
            />
          })}
        </Routes>
      </div>
    </Router>

  )
}
export default App
