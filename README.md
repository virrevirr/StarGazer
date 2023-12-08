Iprog project




Your project file structure 


# StarGazer our project
Short description of our project

Our project is for the people that love nature and love watching the stars.
Our app tells you, given a city, what the weather, moon phase as well as when the sunrise and sunset is so you can enjoy stargazing as long as possible. Another fun fact! is that it also gives you some details about different natural events occurring in the location you are at.
If it is that you lOOOVE the place you can also add it to your profile and save it there forever!


# What we have done!
We have done the basic structure of each page for our website so it shows what the user will see when they go to it.
Deployed the app as well as done some css to make it prettier
Connected the sites to each other so that there is some kind of interaction.
Connected one of the APIs we are going


# What we still have left to do! );
We still need to style the website and make it more user-friendly. We would like to connect the rest of the APIs, so we are able to show news regarding moon phases, sunrise and sunset. In profileView, we would like to add hyperlinks to the place that we have saved as "places I have been" and "places I would like to go", that would lead to more information about each place. 


# FILE STRUCTURE:
Withshort description/purpose of each file

STARGAZER [main repository file]
|
|---src---Presenter         [Where we keep the different presenters for the website]
|    |       |-----Information      [Information about the weather, sunrise, sunset, astronomical events will be displayed here]
          
|    |       |-----Login            [We present the log in page here]
|    |       |-----Profile          [Presenting the profile page, where we save different locations]
|    |       |-----Search           [Presenting the search bar and the results of the search input]
|    |-----View             [Where we keep the different views for the website]
|    |       |-----Information      [View for the information]
|    |       |-----Login            [View for the login]
|    |       |-----SearchForm       [View for the search bar]
|    |       |-----SearchResult     [View for the search results]
|    |-----style.css        [What gives us this awesome look of our website]
|    |-----index.jsx        [Deploying app, displaying the website]
|    |-----firebaseModel.js [Save to Firebase]
|    |-----root             [Connecting the presenters]
|    |-----resolvePromise   [Promise handling]
|    |-----starModel        [Saved locations, promiseState functions]
|    |-----starSource       [API calls, reading the data]
|
|---index.html      
|---firebase....    
|---package...      
|---Other....       