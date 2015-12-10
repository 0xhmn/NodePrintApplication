# NodePrintApplication
This is a Node.js-based Printing Application written for Carlson School of Management

### Easy Setup
Just run `NodeOnBoot.exe` and follow the steps. Node server will run in background even after rebooting the system, so you don't need to set it up again.

![NodeOnBoot](https://github.com/hmny/NodeOnBoot/raw/RegEdit/nodeonboot.png)

### Dependencies
First, clone the repo, then you need to install all the npm dependencies:
```
$ git clone [git-repo-url]
# In the project root
$ npm install
```
Also to run the server, you need to install pm2 on your machine:
### Install pm2 globally
```
$ npm install pm2 -g
```

### running for development
Use `$ node server\bin\www  -h` to see all of requried parameters.

run the server using
```
pm2 start server\bin\www --  -p pfxPassword -a "Path\to\pfxFile.pfx"
```

### check logs for any issues
pm2 node logs can be found by default in your use account dotfiles at `C:\Users\%%user%%\.pm2\logs`
or by `pm2 logs` command


### running for production
In order to use all the resources available:
```
pm2 start server\bin\www -i 0 --  -p pfxPassword -a "Path\to\pfxFile.pfx"
```
or -i <number> for any other desired number of instances. e.g. `pm2 start server\bin\www -i 2 -- -p pfxPassword`

### Sending Requests
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

### Authors
----------
- Hooman Yar <yar00001@umn.edu>
