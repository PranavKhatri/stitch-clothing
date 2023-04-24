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

Index: It is an attribute, if we pass index in the Route , its actually equivalent to saying index is equal to true. It tells the route that wyou match just the '/' so with noting on it, then this should be with home component.

So match this '/' with this base component i.e. home.



Fragment:
import { Fragment } from 'react';

It is essentially a componnet that actually renders to nothing when it actually gets mounted on the DOM.
The whole reason of using a fragment is because of Reacts rules where a component must have  aparent, a top level parent containing component. A fragment is useful if  we dont actually want to render some specific HTML element.

    <Fragment>
        <div>
            <h1> I am the Navigation bar</h1>
        </div>
        <Outlet />
    <Fragment>


Firebase: It is the Google Platform that allows us to spin up the database, It actually is pretty comprehensive suite of hoisting tools and different things of our website but the primary usage is that it helps us leverage some kind of databse.


Authentication :
SSO with Google.

We sign in in some application with Google Sign in, with our Username and Password. Google will verify us(with our Google Creds) and It will generate the auth_token. The auth_token is just a unique hashed string. Google will send the application(that we are trying to sign in) back the auth_token.

The Application will share the auth_token to backend, or the server (like Firebase), that firebase is representing in order for it to verify whether or not I can access some of the data that I am trying to acces specifically.

Now Firebase doesnt know whether or not this authtoken is valid. Firebase ant trustthe source where it got the authtken .It can be just a random auth token. SO, firebase need to confirm is this auth_token of valid auth_token? So, firebase will directly ask google to verify this auth_token. Google will take and and it will check.

If it is verfied by google, it will send the verification of token is correct or itsend the error. Google will send the verification_token to the firebase.

Now, firebase will create a access_token for the user, this access_token will be going to define what the user should be able to access the user being specific. So this access tells us what I will be access inside the databse.

So, now, firebae will send back to application the access_token and user receives the access_token. ANd now, I am going to send CRUD Request with the access_token received by the Firebase.

My send request will have [access_token + CRUD operations]. Firebase will then verify my access token to determine what different things access token has access to?  If it is valid, it will check the CRUD request and we check if we are allowed to do that specific operation, and we will be allowed to do that request. If we are authorised. I will be able to fetch/read the requested data, update the, according to apt request.


The initialisepp function creates an app instance for us based on of some tyoe of "config". This configis an object that allows us to attach the firebase app instance that we have online, because right now we have the librray installed , but there no way of us telling firebase , oh this instance that we are using should be referiing to the one that we have created inside of app.


Firebase Data Model:

It is comprising of 3 things: Data, Document, Collection