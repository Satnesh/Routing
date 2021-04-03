import React from 'react'
import {BrowserRouter as  Router,Link,Route } from 'react-router-dom'
import Users from './Users'

function Dashboard() {
    const slides = [
        {
        id:1,
        title: "Satnesh",
        text: "We're gonna do 3 fundamental exercises."
        },
        {
        id:2,
        title: "Tony",
        text: "Do 10 reps. Remember about full range of motion. Don't rush."
        },
        {
        id:3,
        title: "Bade",
        text: "Squats are important. Remember to keep your back straight."
        },
        {
        id:4,
        title: "Phillips",
        text: "Slightly bend your knees. Remember about full range of motion."
        },
        {
        id:5,
        title: "Ritesh",
        text: "You made it, have a nice day and see you next time!"
        }
        ];
    return (
        
        <div>
            <Router>
          <h1>This Is Dashboard</h1>
          {slides.map((item) =>
          <div><h4><Link to={"/users/" + item.id + item.title}>{item.title} </Link> </h4> </div>
          )}

        <Route path="/users/:id:title"><Users/></Route>
          </Router>
          
          
        </div>

       
       
    )
}

export default Dashboard
