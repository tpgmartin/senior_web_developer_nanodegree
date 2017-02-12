# Security

## Origins

Origin composed of data scheme, hostname, and port e.g. "https://", 
"www.udacity.com", ":443"

This is why mixing HTTP and HTTPS content is problematic

Cross-origin fetch requests are disallowed by the browser: Same-origin policy

[Same origin policy](https://www.w3.org/Security/wiki/Same_Origin_Policy)

Interact with images from another origin differently, for security reasons - 
these are enforced by the browser not the server.

## Overriding Same Origin Same_Origin_Policy

CORS Cross Origin Resource Sharing

JSONP JSON with padding: Return script containing data e.g. 
`<script src="https://api.udacity.com/courses?status=enrolled&callback=f">` will 
wrap data by function `f` sent as callback

Message passing: Another technique that was explicitly designed to allow 
cross-origin communication is called **message passing**. `postMessage()` is a 
function that can be called to pass a message to other windows and iframes, 
even if they come from a different origin. This creates a message event you 
subscribe to like any other event. For security, the receiver can inspect the 
message’s origin and content.

While postMessage is much cleaner and allows more granular control than the 
other cross-origin options, it sadly hasn’t been as widely adopted by API 
providers.

[Overriding Same Origin Policy](https://jsbin.com/roxapu/3/edit?html,js,console)

## CORS

CORS headers allow for cross-origin requests but need server side code
Use header 'Access-Control-Allow-Origin: <origin>' in response header, should be 
same as 'Referer' header in request

Request may have already been executed by time response is received. Use 
preflight request.

Use OPTIONS method, only headers are sent. Only certain requests are preflighted

[Preflight requests and CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#Preflighted_requests)

## Security Exploit CSRF

Request from forms won't be preflighted
Can't read response if CORS doesn't allow it

Cross-site request forgery (CSRF)
CSRF token is often secure enough: additional field appended to form that is 
also stored server-side. Server will check token against stored token, and only 
execute request if these tokens match

## Security Exploit XSS

JavaScript can be injected into another site and executed in that context

Protect by validating user-input server side

[Cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting)

