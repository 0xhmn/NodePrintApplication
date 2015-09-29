# NodePrintApplication
This is a Node.js-based Printing Application based on [JsonResume](https://jsonresume.org/)
### Dependencies
First, clone the repo, then you need to install all the npm dependencies:
```sh
$ git cloen [git-repo-url]
$ npm install
```

### Hosting on Native Node Server
This app eventually will be used in IIS but for testing purposes you can run it:
use
```sh
$ npm start
```
or
```sh
$ node server/app.js
```
####Note: 
if you run this app through node server you need to change path to 'css' and 'handlbar' template in `lib/render/index.js`.

### Hosign on IISNode
##### Installing for IIS 7.x/8.x
Follow [these steps](https://github.com/tjanczuk/iisnode#hosting-nodejs-applications-in-iis-on-windows)
Then create a new appliation. The default App name used in this applicaiton is `nodeprint`.
##### Sending Requests
you can send get/post to these urls:
Sending Get to Homepage:
```
http://localhost/nodeprint/server/
```
Sending Json data via POST:
```
http://localhost/nodeprint/server/
```
Sending test Json data via POST:
```
http://localhost/nodeprint/server/test/
```

Generated 'HTML' will be sent as a part of `Response` to `Post` Requests.