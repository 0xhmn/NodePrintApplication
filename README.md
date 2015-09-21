# NodePrintApplication
This is a Node.js-based Printing Application based on [JsonResume](https://jsonresume.org/)
### Dependencies
First, clone the repo, then you need to install all the npm dependencies:
```sh
$ git cloen [git-repo-url]
$ npm install
```

### Running the Server
This app eventually will be used in IIS but for testing purposes you can run it:
use
```sh
$ npm start
```
or
```sh
$ node ./server/bin/www
```
### Sending JSON requests
Use `Curl` or a sample html page located in `./angularTest/index.html` to send JSON POST requests.
If your request is successful, you will find your `html` output in `./server/tmp/tmp.html`. Other output formats will be added.
