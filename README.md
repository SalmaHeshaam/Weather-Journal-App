# Weather-Journal App Project

## Overview
Asynchronous web app that uses Web API and user data to dynamically update the UI. 


## packages installed
- **Express** : to run the server and routes.
- **body-parser** : Extract the entire body portion of an incoming request stream and exposes it.
- **Cors** : Lets the server talk to each other without any security interruptions.

## Instructions 
After downloading or cloning this repo. to install the npm packages used in this app. 
1. Open the terminal.
2. make sure you are in the right directory.
3. Run the following commands:
```
npm install express
npm install cors
npm install body-parser
```

4. Finally to open the app in terminal write
```
node server.js
```
5. In your browser write ``` localhost:3000 ```




## How it works 
>### **Client side**
>1. Fetch temp data from openweathermap.org using zip code.
>2. Collect (user feeling) added from user. 
>3. Get Date.
>4. Event listener to Button Click to call these functions :
>     1.  Post this data to server endpoint.
>     2.  Get this data from the server and update UI.


>### **Server side**
>1. Setup empty the needed configurations.
>2. Initialize GET Route
>3. Initialize Post Route

## Dependencies

-  HTML 
- CSS
- JavaScript
- NodeJS
- Weather API used [openweathermap](https://openweathermap.org/api).


