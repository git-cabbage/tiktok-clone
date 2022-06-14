import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { publicPath } from '~/routes'
import { DefaultLayout } from './components/Layouts'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicPath.map((route, index) => {
                        let Layout = DefaultLayout

                        if (route.layout) {
                            Layout = route.layout
                        } else if (route.layout === null) {
                            Layout = Fragment
                        }

                        const Page = route.component
                        console.log(Page)
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </div>
        </Router>
    )
}

export default App
