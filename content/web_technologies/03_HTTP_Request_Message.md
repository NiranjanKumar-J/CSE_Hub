# HTTP Request Message

## 1. Introduction

HTTP (HyperText Transfer Protocol) is an application layer protocol used for communication between a web browser (client) and a web server.

When a user requests a web page, the browser sends an HTTP request message to the server. The server processes the request and sends an HTTP response.

## 2. Structure of HTTP Request Message

An HTTP request message has four main parts:

1. Request Line
2. Header Fields
3. Blank Line
4. Message Body

### Neat Structure

```text
HTTP REQUEST MESSAGE
        |
        +-- Request Line
        |      Method + URL + HTTP Version
        |
        +-- Header Fields
        |      Host
        |      User-Agent
        |      Accept
        |      Content-Type
        |
        +-- Blank Line
        |
        +-- Message Body (Optional)
               Data sent to the server
```

## 3. Request Line

The request line is the first line of an HTTP request.

It contains:

```text
Method + URI + HTTP Version
```

### Example

```http
GET /index.html HTTP/1.1
```

### Components

- **Method:** Specifies the action to be performed.
- **URI:** Specifies the requested resource.
- **HTTP Version:** Specifies the HTTP version used.

### Common HTTP Methods

| Method | Purpose |
|---|---|
| `GET` | Requests data from the server |
| `POST` | Sends data to the server |
| `PUT` | Updates or replaces a resource |
| `DELETE` | Deletes a resource |
| `PATCH` | Partially updates a resource |
| `HEAD` | Requests headers without the response body |

Common versions include HTTP/1.0, HTTP/1.1, HTTP/2 and HTTP/3.

## 4. Header Fields

Header fields provide additional information about the request.

General format:

```text
Header-Name: Header-Value
```

### Common Headers

#### 1. Host

Specifies the server name.

```http
Host: www.example.com
```

#### 2. User-Agent

Provides information about the browser or client.

```http
User-Agent: Mozilla/5.0
```

#### 3. Accept

Specifies the type of content accepted by the client.

```http
Accept: text/html
```

#### 4. Content-Type

Specifies the type of data in the message body.

```http
Content-Type: application/json
```

#### 5. Content-Length

Specifies the size of the message body.

```http
Content-Length: 25
```

## 5. Blank Line

A blank line is placed after the header fields.

It separates the headers from the message body.

```text
Host: www.example.com
Content-Type: application/json

{"name":"Niranjan"}
```

## 6. Message Body

The message body contains the actual data sent to the server.

It is optional and is mainly used with methods such as `POST` and `PUT`.

For example, when a user submits a registration form, the entered details can be sent in the message body.

## 7. Example of HTTP Request

```http
POST /login HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

username=student&password=1234
```

## 8. Working of HTTP Request

```text
Web Browser (Client)
        |
   HTTP Request
        |
   Web Server
        |
   HTTP Response
        |
Web Browser
```

### Steps

1. User enters a URL or submits a form.
2. The browser creates an HTTP request.
3. The request line specifies the required operation.
4. Headers provide additional information.
5. If necessary, data is added to the message body.
6. The request is sent to the web server.
7. The server processes the request.
8. The server sends an HTTP response to the browser.
