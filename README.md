
# Simple Github Icon
A custom HTML element to include the github icon in your webpage. Demo here: https://lnsy-dev.github.io/simple-github-icon/

## Notice
I am not associated with Github. The Github logo is trademarked. Download the original files  <a href="https://github.com/logos">here</a>.

## Purpose

I wanted an easy way to include a github link tag to my projects that didn't include downloading github's logo as a png and including it each time. 

## Prior Work

https://github.com/logos

## How to use

Include the github-icon.min.js code with a script tag and then use the github-icon tag:

```
<script src="./github-icon.min.js"></script>
<github-icon href="link to your github repo"></github-icon>

```

This defaults to a dark github icon. If you would like a light github icon, set the **light** attribute:

```
<github-icon light href="link to your github repo"></github>
```


# Development
## Instructions

```sh
npm install
npm start
```

This will start a live-server for editing.


## To build

```sh
npm build
```

This will
 - generate a file called bundle.min.js in the /dist folder that includes the css and js. 
 - mux and copy over the index.html file to /dist
 - copy /assets folder to /dist

## Change output name

To change the name of the built file create an **.env** file and add the variable 
OUTPUT_FILENAME to it, like so: 

```
OUTPUT_FILENAME=new-filename.min.js
```

## Custom HTML Elements

This project has an example of a custom HTML Element. For more information about custom HTML elements go to https://lnsy.dev/blog/custom-html-components.html

## A simple deployment on GitHub

Click "Use This Template" and create a new project. 

Clone the project, make your changes. 

Run

```sh
npm build
```

In Github go to settings/pages in the project and select deploy from branch. 

Link to /dist/bundle.js on the published pages. This will load the CSS and JS. 

## About

https://lnsy.dev 

Hire Me!  

