# HTTP/2

## Head of Line Blocking

Average site require ~100 requests

Head-of-line blocking compounded by increasing number of requests

[Rising number of requests](http://httparchive.org/trends.php?s=All&minlabel=Nov+15+2010&maxlabel=May+15+2016)

## Uncompressed Headers

Request headers are highly repeated but often uncompressed, take around 800 
bytes per header per request

[gzip in HTML5 Boilerplate project](https://github.com/h5bp/html5-boilerplate/blob/master/dist/.htaccess#L709-L795)
[White paper on SPDY](https://dev.chromium.org/spdy/spdy-whitepaper)

## Security

Browsers have not chosen to support unsecured HTTP/2

## Improvements

HTTP/2 does not use plaintext, human readable headers

Multiplex use single connection, with each request broken up into streams. When 
one stream is blocked, another can take over

Multiplex: a system or signal involving simultaneous transmission of several 
messages along a single channel of communication

Headers are compressed using a optimised compression algorithm. Headers are not 
sent more than once if possible

[HPACK - Header Compression for HTTP/2](https://http2.github.io/http2-spec/compression.html)

## Working with HTTP/2

Concatenation is no longer required due to compression and multiplex - better 
for cache invalidation

[Check out our course on Service Worker](https://www.udacity.com/course/offline-web-applications--ud899)
[Current support of HTTP/2 from caniuse.com](http://caniuse.com/#feat=http2)

## Development Techniques

* Minify JS, CSS, Markup
* Use (single) CDN rather than sharding - sharding makes header compression 
less efficient
* Avoid concatenation/sprites as multiple requests can be made more efficiently

