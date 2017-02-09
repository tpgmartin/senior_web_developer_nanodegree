# HTTP/1

Netcat command: `nc` e.g. `nc google.com 80`

This will prompt us to enter the details of the HTTP request

[sourceforge](http://nc110.sourceforge.net/)
[wikipedia](https://en.wikipedia.org/wiki/Netcat)

## HTTP Verbs

Protocol uses plaintext

Methods: GET, POST, PUT, DELETE, HEAD, OPTIONS

HEAD: returns just the HTTP headers of the file e.g. to check caches, or 
overall file size. But for cache validation this will require a subsequent GET 
request as well

OPTIONS: returns list of methods available for given url supported by its server

### Quiz

1. GET
  * The client requests main.css
  * The client asks the server to send it the landing page for http://google.com
2. POST
  * The client sends data about a form submission
3. HEAD
  * The client verifies the last time logo.png was updated
4. OPTIONS
  * The client wants to know which verbs the server supports

## Common Response headers

Headers contain additional data about requests or responses. These are some of the important ones:

`Content-Length` is a header that must be contained in every response and tells the browser the size of the body in the response. This way the browser knows how many bytes it can expect to receive after the header section and can show you a meaningful progress bar when downloading a file.

`Content-Type` is also a non-optional header and tells you what type the document has. This way the browser knows which parsing engine to spin up. If it's an image/jpeg, show the image. It’s text/html? Let’s parse it and fire off the necessary, additional HTTP requests. And so on.

`Last-Modified` is a header that contains the date when the document was last changed. It turned out that the Last-Modified date is not very reliable when trying to figure out if a document has been changed. Sometimes developers will uploaded all files to the server after fixing something, resetting the Last-Modified date on all files even though the contents only changed on a subset. To accommodate this, most servers also send out an ETag. ETag stands for entity tag, and is a unique identifier that changes solely depending on the content of the file. Most servers actually use a hash function like SHA256 to calculate the ETag.

`Cache-Control` is exactly what it sounds like. It allows the server to control how and for how long the client will cache the response it received. Cache-Control is a complex beast and has a lot of built-in features. 99% of the time, you only need the “cacheability“ and the “max-age”.

`If-Modified-Since` permits the server to skip sending the actual content of the document if it hasn’t been changed since the date provided in that header. Is there something similar for ETags? Yes there is! The header is called If-None-Match and does exactly that. If the ETag for the document is still matching the ETag sent in the If-None-Match header, the server won’t send the actual document. Both If-None-Match and If-Modified-Since can be present in the same request, but the ETag takes precedence over the If-Modified-Since, as it is considered more accurate.

[list of HTTP headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)

## REST

`GET <collection name>/<item name>` should return the associated record
`PUT <collection name>/<item name>` should update the associated record
`POST <collection name>/<item name>` should add new record
`DELETE <collection name>/<item name>` should delete record

Server makes choice of name for updated record with `POST`

## Performance Basics

Network Architecture: HTTP -> TCP -> IP -> Ethernet

HTTP: Protocol, requires connection at other network levels

TCP: Multiple individual streams of data between machines, specified by port 
number
TCP handshake is costly - three round tips (+ potentially TLS)

IP: Allows us to talk to other machines

Ethernet: hardware

## Performance details

TTFB and head-of-line-blocking: browsers open up to six parallel connections 
This can still be costly due to individual TCP handshakes

HTTP/1.1 allows for `Connection: keep-alive`: server will not close connection 
after a successful response - but still means have to wait for response before 
sending new request. Useful to concatenate asset files to reduce total requests

