# Cookies 
Cookies are small text files stored on a user's computer by a website.
They are used to remember information about the user's activities on the website,
such as their login status, preferences, or shopping cart contents.

`document.cookie`:  A string representing all of the cookies for a specific document.

Method                         Description
------                         ----------
setCookie(name, value, days)   Creates a new cookie with a specified name, value, and number of days until it expires.
getCookie(name)                Returns the value of a cookie with a specified name.
deleteCookie(name)             Deletes a cookie with a specified name.

## Memory / Permanent Cookies
Cookies are deleted when browser closes, unless they have an expire time.
Method            Description
------            -----------
setCookie(name, value, {maxAge: 60*60*1000})         one hour.
setCookie(name, value, {maxAge: 60*60*1000*24})      one day.
setCookie(name, value, {maxAge: 60*60*1000*24*365})  one year.

## common usage
### Personalization:
- user preferences
- theme
- other settings
### Tracking:
Recording and analyzing of user behavior:
- res.cookie('lastVisitedCarId',carId)
### Session management:
- logins
- shopping cart
- game score score

## CookieParer
```javascript
const cookieParer = require('cookie-parser')
app.use(cookieParer())
```

```javascript
// from the request on the server
req.cookies.lastVisitedCarId 

// from the service
res.cookie('lastVisitedCarId',car.id,{maxAge: 60*60*1000})
```