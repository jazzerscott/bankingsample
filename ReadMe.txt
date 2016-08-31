To install / setup:

1:  I'm using visual studio 2015 Community (for asp.net web api), Visual Studio Code 1.4 (for angular dev) - both are free for learning projects.  Also install node js to get node package manager.

2: Create virtual directory in IIS names "BankingApi" for .net 4.0 and map to the /Prototype.Banking folder (ie. the one with the web.config).  This is a normal asp.net site.

3:  The Web folder contains the angular project.  Open this folder in Visual Studio Code

4: In the web folder from a command line run "npm install"

5: If all goes well with that run "npm start"  This should start the angular project on localhost:3000.  The asp.net web api uses CORS to allow ajax requests from localhost:3000.