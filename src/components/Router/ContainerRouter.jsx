import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'


const ContainerRouter = () => {
    return (
        <div>
            <Router>
                <Route exact path="/">
                    <h2>Home</h2>
                </Route>
                <Route exact path="/about">
                    <h2>About</h2>
                </Route>
                <Route path="*">
                    <h2>Not Found</h2>
                </Route>
            </Router>
        </div>
    )
}

export default ContainerRouter
