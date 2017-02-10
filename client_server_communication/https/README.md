# HTTPS

Modern browser APIs require website to be served over HTTPS

## Sercing HTTP

[Firesheep](https://codebutler.github.io/firesheep/)
[Wikipedia](https://en.wikipedia.org/wiki/Firesheep)

HTTPS ensures file encryption and server authentication

Proxies can be used for additional compression, interacting with received 
resources

Invalid Certificate Clarification: An invalid certificate is where the URL for 
the certificate does not match the URL in the browser's address bar.

HTTPS = HTTP + TLS

TLS: Transprot Layer Security
Not specific to HTTP

Cryptography Primer: Separate encryption and decryption keys, or public and 
private keys - anyone can encrypt a file, but only those with correct key can 
decrypt

TLS Hashing: hashes will change for small changes in source files
Cannot be revered
Cannot be identical
Example: SHA

## Certificate Authority Signatures

Server signs and encrypts documents, returns a signed document
For a large file, only the hash of the file is encrypted - then check by 
encrypting and then hashing original file from you side

## The TLS Handshake

Certificates include public key, domain, and signature

All browsers have directory of certificate authority signatures and their 
public keys stored locally

Symmetric encryption

Faster, more effecient, scales better, sever will only be able to continue if it 
has valid private key - which effectively validates that you are talking to the 
right server

Client generates random key, this is encypted with public key, this will be used 
for communication with server

HTTP protocol takes over from this point

[SSL errors](https://badssl.com/)

Main errors:
* Signature is invalid
* Server cannot continue when symmetri encryption begins

Chrome will block access to sites with either an expired certificate or a 
certificate from another host

## Mixed Content

Other assets are not served over secured origins

Self-signed certificates will not be accepted by browser as a regular 
certificate

[Mixed Content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content)
