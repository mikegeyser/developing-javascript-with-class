Developing Javascript with Class
================================
A talk on ECMAScript 6 and Google's Traceur compiler.

By <a href="https://twitter.com/mikegeyser">@mikegeyser</a> for <a href="http://www.jsinsa.com/jsinsa/2014/index.htm">JSinSA 2014</a>.

Stop pretending that the Javascript we're writing is object-oriented - because it's not. Stop hacking around prototypal inheritance and embrace "Harmony" - ECMAScript 6. This talk will take a detailed look at writing Javascript with the first class Object-Oriented support coming in the near future, and illustrate the use of Google's Traceur compiler to degrade gracefully into currently executable Javascript.

<a href="http://mikegeyser.github.io/developing-javascript-with-class/#/title">Take a look at the slides</a>, and follow through the steps in the commit log to see a demo of a simple class structure converted from current javascript to ECMAScript 6 in the browser using the traceur compiler.

1.  <a href="https://github.com/mikegeyser/developing-javascript-with-class/commit/a4dddce">Copying old.html to new.html to work from.</a>
2.  <a href="https://github.com/mikegeyser/developing-javascript-with-class/commit/1bcc11b">Create a blank vehicles2.js to work  from.</a>
3.  <a href="https://github.com/mikegeyser/developing-javascript-with-class/commit/fa786b9">Implement the Vehicle base class.</a>
4.  <a href="https://github.com/mikegeyser/developing-javascript-with-class/commit/cdc8de1">Implement the Car class that inherits from Vehicle.</a>
5.  <a href="https://github.com/mikegeyser/developing-javascript-with-class/commit/9f673e9">Implement the Truck class that inherits from Vehicle.</a>
6.  <a href="https://github.com/mikegeyser/developing-javascript-with-class/commit/925ff1f">Implement the Scooter class that inherits from Vehicle.</a>
7.  <a href="https://github.com/mikegeyser/developing-javascript-with-class/commit/0fcf412">Explicitly export Car, Truck, and Scooter from the module.</a>
8.  <a href="https://github.com/mikegeyser/developing-javascript-with-class/commit/0d9b4de">Add references to the traceur compiler and bootstrapper.</a>
9.  <a href="https://github.com/mikegeyser/developing-javascript-with-class/commit/721f3f7">Take out the vehicle reference.</a>
10. <a href="https://github.com/mikegeyser/developing-javascript-with-class/commit/b133daf">Import the module, and initialise the VehicleFactory.</a>
11. <a href="http://www.tumblr.com/tagged/self-high-five">Win the game.</a>

References:

- <a href="https://github.com/google/traceur-compiler">https://github.com/google/traceur-compiler</a>
- <a href="http://wiki.ecmascript.org">http://wiki.ecmascript.org</a>