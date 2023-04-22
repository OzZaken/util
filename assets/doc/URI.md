# Uniform Resource Identifier (URI)
A URI,  is a string of characters that identifies a resource or a group of resources on the internet. A URI can be used to identify any kind of resource, including web pages, images, videos, and more. URIs can be further divided into two types: URLs and URNs.


# Uniform Resource Name (URN)
A URN, is a type of URI that is used to identify resources by their name, rather than their location. Unlike URLs, which may change over time, URNs are intended to be persistent and remain valid even if the resource is moved or renamed. For example, the ISBN number of a book is a type of URN that can be used to identify the book, regardless of where it is located.

| Type of URI                                    | Format                                                                     | Example                                                                                         |
| ---------------------------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Uniform Resource Locator (`URL`)               | `protocol://domain/path`                                                   | `https://www.example.com/path/to/resource`                                                      |
| Uniform Resource Name (`URN`)                  | `urn:<namespace>:<identifier>`                                             | `urn:isbn:978-3-16-148410-0`                                                                    |
| Digital Object Identifier (`DOI`)              | `https://doi.org/<doi>`                                                    | `https://doi.org/10.1038/s41586-021-03357-9`                                                    |
| Lightweight Directory Access Protocol (`LDAP`) | `ldap://<hostname>:<port>/<dn>?<attributes>?<scope>?<filter>?<extensions>` | `ldap://ldap.example.com:389/dc=example,dc=com?uid,displayName?sub?(objectClass=inetOrgPerson)` |
| Session Initiation Protocol (`SIP`)            | `sip:<username>@<domain>`                                                  | `sip:alice@example.com`                                                                         |
| File Transfer Protocol (`FTP`)                 | `ftp://<username>:<password>@<hostname>/<path>`                            | `ftp://anonymous:password@example.com/pub/README`                                               |
| Telnet                                         | `telnet://<hostname>:<port>`                                               | `telnet://example.com:23`                                                                       |