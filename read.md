We are going to use sass instead of css here.

yarn add sass: Our application now will be able to render sass styling.

scss vs css?
scss : it follows the hierrarchy of the DOM. It makes our Css code much more legible and a lot easier to write.


Self-closing tags like <div className="my-class" /> can be used for components that don't have any children or content inside them. They are a shorthand way of writing the opening and closing tags together,
like this: <div className="my-class"></div>.


Routing: We can use one of the 2 main libraries: React Router or Rich Router.

It helps us to determine based off the url, ie, the navigation on a website what pages to render.

Clicking on the website -some button, website will route to www.websitecom/route-1 , entire oage that just got rendered when we navigate it to route-1 is a brand new componnet that we mount onto to the page in response to navigating to route-1

website.com/route-2/subroute-1.. here also we want some components to remain static and some will re render.

npm install react-router-dom@6 : Install React Router

Now, we need to wrap entire application(app.js) in a router component that react router gives us.
This we will do it index.js becaue here we render the app as its entirety

import { BrowserRouter } from 'react-router-dom';

The browser router is the hgeneric router it leverages the URL in order to keep track of the history of where the user is navigating through and it behaves as we typically expect any kind of routing based on our URL to behave.

<BrowserRouter> <App /> </BrowserRouter>

Now we can access all of the different features that come in react router dom specific to this browser router that is now going to control all of the roting inside of our nested application.

Create Routes folder : It will hold all of our route , top level components.


IN appjs:
import { Routes, Route } from 'react-router-dom';

what Routes does?
anything that is routable should come under <Routes> <Home /> <Routes/>  'Routes component/


What Route compoennt does?
It allows this application to register these route level compoenents that will in turn render a specifi compoenent when it matches this specific route that we are looking for. We give a specifc path variable that is going to be string and the string is going to tyr to match whatever we give inside.

 <Routes> <Route path= '/' element={<Home/>} /></Routes>

 path it is at the base URL level, when we just land on the URL , then I am going to match. the moment it matches the relative path, we want to render this elemennt. Element is the componnet


 React Outlet:

 import { Outlet } from 'react-router-dom'

We can outlet where the code that we want to render should come out from and whereever we render the outlet is where this root matches is going to render the element .

Outlet allows us to leverage the pattern matching and this nesting structurre in order to dynamiclly change portions of our code based oon the routes and the nested routes

Index: It is an attribute, if we pass index in the Route , its actually equivalent to saying index is equal to true. It tells the route that wyou match just the '/' so with noting on it, then this should be with home component

