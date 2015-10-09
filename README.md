# NodePrintApplication
This is a Node.js-based Printing Application based on [JsonResume](https://jsonresume.org/)
### Dependencies
First, clone the repo, then you need to install all the npm dependencies:
```sh
$ git clone [git-repo-url]
$ npm install
```
Then install IISNode from [HERE (x64)](https://github.com/azure/iisnode/releases/download/v0.2.18/iisnode-full-v0.2.18-x64.msi)

##### Hosign on IISNode
Simply from the administrative command prompt call `printApplication.bat`. This will create a new Application on your IIS under 'Default Web Site', pointing to your cloned folder.

##### Sending Requests
It is possible to send get/post to these urls:

- Sending Get to Homepage:
```
http://localhost/nodeprint/server/
```
- Sending Json data via POST:
```
http://localhost/nodeprint/server/
```
- Sending test Json data via POST:
```
http://localhost/nodeprint/server/test/
```

Generated 'HTML' will be sent as a part of `Response` to `Post` Requests.

### Hosting on Native Node Server
This app eventually will be used in IIS but for testing purposes you can run with command line:
use
```sh
$ npm start
```
or
```sh
$ node server/app.js
```
#####Note: 
if you run this app through node server you need to change path to 'css' and 'handlbar' template in `lib/render/index.js`.
