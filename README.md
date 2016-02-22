## Ember.js lesson

[See the slideshow](http://slides.com/alexbennett/intro-to-ember-js)

___
### **Step One:** Get set up.
First, make sure you download node.js as well as ember.
```
$ sudo npm install npm -g
$ npm install -g ember-cli@2.3
```
Create a new ember app. Then navigate into the app directory and install any missing npm dependencies.
```
$ ember new emberritos
$ cd emberritos
$ npm i -S
```
Start the app by running it's rails server with:
```
$ ember s
// You will then see this in the terminal.
$ Serving on http://localhost:4200/
```
If everything is working, **"Welcome to Ember"** will appear in your browser at localhost:4200.

*Congratulations* -- You're all set up!
___
### **Step Two:** Add some markup + Define a route.
Use ember CLI to genereate a new route.
```
$ ember generate route emberritos
```
The command will automatically generate three new files:
1. templates/emberritos.hbs
2. routes/emberritos.js
3. tests/unit/routes/emberritos-test.js

Go to templates/application.hbs and type in something to the effect
```html
<h1> We got ourselves a list of emberritos :) </h1>
```
(you can do this above or below {{outlet}}

Then go to routes/emberritos.js, where we'll add some data. Add our array to the model like so:
```javascript
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Alex', 'Kyle', ' Ben'];
  }
});
```
In order to tell the browser how to turn this data into html, we will add some logic to our emberritos.hbs template that loops through the array and prints out a list item for each element.
```html
<h2>List of Emberritos</h2>

<ul>
  {{#each emberrito as |emberrito|}}
    <li>{{emberrito}}</li>
  {{/each}}
</ul>
```
Navigate to localhost:4200/emberritos

If everything is working, you should see the list of people on the page.
___
### **Step Three:** Add a Component to the view.
Use ember CLI to generate a Component file with:
```
$ ember generate component emberritos-list
```
Let's break the dynamic content out of our view and into this new component.

Copy the contents of emberritos.hbs and navigate to templates/components/emberritos-list.hbs

paste the code:
```html
{{yield}}
<ul>
  {{#each emberrito as |emberrito|}}
    <li>{{emberrito}}</li>
  {{/each}}
</ul>
```
If you can see the list of emberriots at localhost:4200/emberritos then you're right on track.

<!-- # Emburritos

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/) -->
