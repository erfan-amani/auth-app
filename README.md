# Authentication app

#### Try live preview of app [here](https://auth-app-psi.vercel.app/signin)

This app allow you to login to your created account or create a new account.
There is three way to do that:
* With your email and password
* With your google account
* With your github account

##### *Note: I use firebase authentication in this app so if you are livivng in coutries that you can't access to googles sevices like firebase this app doesn't work properly for you ( It should work if you change your IP Adrress)


## Study case of project
- Context
  - Used context for passing user data to the others commponent and using app-wide state without drilling states throught props. It's possible to use redux in this situation to but redux needs some configuration and extra packages to install and in this app isn't neccessary to use here.
- Firebase
  - firebase allows you to use authentication SDK or API to handle login or signup in your apps without struggling with server and back-end code.
- Tailwind CSS
  - I use Tailwind CSS for styling and word with CSS stuff.
- React-Router-DOM
  - react router handles are routing between diffrent part of app without reloading the page. It helps to create a SPA.
- create-react-app
  - I used create react app to create the project and it did all the configuration for react and created a boiler plate for react app.

