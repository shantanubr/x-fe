## Twitter Client React Micro-Frontend

This frontend application is built on React. This project can be easily hosted on Vercel. All you need to do is set these specific environmental variables. 

    REACT_APP_SECRET_CODE=<your-custom-secret-code>
    REACT_APP_BASE_URL=<your-backend-base-url>

- The secret code acts as a password to this frontend application of yours to make sure that it's just you who is able to get in. 
- The base URL will be the localhost URL of the server that you're running while running the project locally, and it will be your backend's base URL in production.

The backend for this application is written in Node. You can find the code for the backend [here](https://github.com/shantanubr/x-be).


### Run Locally
Install the node_modules
```
yarn install
```

Run the project
```
yarn start
```

#

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

