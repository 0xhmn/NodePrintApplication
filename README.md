# NodePrintApplication
This is a Node.js-based Printing Application for 

### Dependencies
First, clone the repo, then you need to install all the npm dependencies:
```
$ git clone [git-repo-url]
# In the project root
$ npm install
```
Also to run the server, you need to install pm2 on your machine:
# Install pm2 globally
$ npm install pm2 -g

### running for development
run the server using
```
pm2 start server\bin\www -- -p pfxPassword
```

### running for production
In order to use all the resources available:
```
pm2 start server\bin\www -i 0 -- -p pfxPassword
```
or -i <number> for any other desired number of instances. e.g. `pm2 start server\bin\www -i 2 -- -p pfxPassword`

##### Sending Requests
It is possible to send get/post to these urls:

- Sending Get to Homepage:
```
http://localhost:3000
```
- Sending Json data via POST:
```
http://localhost:3000
```
- Sending test Json data via POST:
```
http://localhost:3000
```

Generated 'HTML' will be sent as a part of `Response` to `Post` Requests.

