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

[Preflight requests and CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#Preflighted_requests)
