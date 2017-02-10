# HTTP's Request/Response Cycle

## HTTP Requests

HTTP format for client/server communication

Example HTTP Request, only first two lines are mandatory

```
GET /pictures/kitty.jpg HTTP/1.1
Host: www.google.com
User-agent: Mozilla/5.0
Connection: keep-alive
Accept: text/html
If-None-Match: b2arb0a1r6a
```

Method or verb: get, add, delete, update
Header section: everything below the method - can just be host

Example HTTP Response, only first two lines are mandatory

```
HTTP/1.1 200 OK
Content-Length: 16824
Server: Apache
Content-Type: text/html
Date: Wed, 06 Apr 2016
Etag: fd87e67989

<binary data>
```

[Converting HTML to the DOM](https://classroom.udacity.com/courses/ud884/lessons/1464158642/concepts/15290985490923)

Index document returned if no file specified in request path

## Sending data with a POST Request

POST requests are destructive operations, should respond to POST request server 
side with redirect

## Fetch Requet

[JavaScript Promises Udacity Course](https://www.udacity.com/course/javascript-promises--ud898)
[Promises | Web Fundamentals on Google Developers](https://developers.google.com/web/fundamentals/getting-started/primers/promises?hl=en)

[Introduction to Fetch on Google Developers](https://developers.google.com/web/updates/2015/03/introduction-to-fetch?hl=en)
[That's so Fetch! blog post by Jake Archibald](https://jakearchibald.com/2015/thats-so-fetch/)
[JavaScript Promises on Google Developers](https://developers.google.com/web/fundamentals/getting-started/primers/promises?hl=en)
[Using Fetch on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

