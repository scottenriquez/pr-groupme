# Please Respond GroupMe Bot
A Node.js, ES6, Express 4 backend for a GroupMe bot to respond to my needy friends. It's hosted on Amazon Web Services and uses [GroupMe's bot callback system](https://dev.groupme.com/bots).

# Requirements
Presently the <code>configuration</code> service is tightly coupled with DynamoDB. I may make this more modular if there is interest.

# Start Up for Development
Per Express 4 standards, use <code>nodemon ./bin/www</code>. I will add a Gulp task for this at some point.

# Start Up for Production
Use <code>npm start</code>.
