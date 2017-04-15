# Custom CSS
## Using Chrome Extensions and Custom Code to Make Websites More Responsive

###### Friday, 14 April 2017
----

## The problem

I'm currently working through Kyle Simpson's [*You Don't Know JS* book series](https://github.com/getify/You-Dont-Know-JS) on GitHub, and last Friday I decided that I'd *had it*. Not with the books. (They're challenging, but they're teaching me SO much.) No. What I'd had it with was *GitHub*.

See, I work through the books something like this: I open a chapter of *YDKJS* in Chrome on the left side of my screen, open a code editor on the right, and move back and forth between the two windows. Read a little, try to code up an example that works, then scan back and forth between the sample code and my own, trying to figure out why *my* code is throwing errors left and right, when *his* code (presumably) does not.

Up until Friday, I had been largely successful at containing my frustration with what really ought to have been only a minor annoyance: When I "shrunk" my browser window down to half the width of my screen, GitHub's website did *NOT* politely shrink down to my desired width. Nope. Instead, I got the dreaded horizontal scrollbar, which left me scrolling back and forth and back and forth as I progressed from one line of text to the next. Instead of quickly glancing from one side of my screen to the other, I was maximizing and minimizing windows, scrolling back and forth, and constantly losing and finding my place in both the book and my own code.

Like I said, though: I'd been putting up with it. Until Friday, when I decided I'd had it. And realized that this might be a problem that I could *fix*.

## Experimentation

I didn't know *how* to fix the problem - not in someone else's code! - but I did have an idea of where to start. I popped open Chrome's developer tools and started messing around with the CSS.

After a bit of experimentation - a *lot* of experimentation, actually - I found that I could hack a fix by making just three minor changes in two files. These are the code snippets that were controlling the width of the markdown section of the webpage:

#### In the first file


````
.container {
  width: 980px;
  margin-right: auto;
  margin-left: auto;
}
````

#### And in the second

````
body {
  min-width: 1020px;
  word-wrap: break-word;
}
````

### The fix?

* Add a `max-width` of `97%` (this required some experimentation) to the `.container` class
* Remove the `min-width: 1020px` on the body
* Give the body a `max-width` of `100%`

Here are those same sections of code *after* my changes:

#### In the first file

````
.container {
  width: 980px;
  max-width: 97%;
  margin-right: auto;
  margin-left: auto;
}
````

#### And in the second

````
body {
  max-width: 100%;
  word-wrap: break-word;
}
````

To be clear - this code fixes the markdown/readme container so that it shrinks and grows with the width of the screen. It *doesn't* fix anything else on the page. It's sloppy. But it did what I needed it to.

## Implementation

Except that I still needed a way to make the changes stick around. Because manually going in and editing the CSS files every time I go onto GitHub isn't an awesome solution. I needed something better.

The first alternative that came to mind was creating a Chrome extension... but a Chrome extension to change three lines of code seemed like overkill.

Fortunately, Google had a better solution, and it came in the form of... a Chrome extension. There exist a number of extensions that allow you to apply "User Stylesheets" to a webpage. You write your own CSS (or JavaScript), and the extension applies it for you whenever you visit that webpage. Exactly what I was looking for!

I installed [*Styler*](https://chrome.google.com/webstore/detail/styler/bogdgcfoocbajfkjjolkmcdcnnellpkb?hl=en) from the Chrome web store and retyped my changes into the CSS field:

````
body {
  min-width: 0; /* This overwrites the min width in the original css */
  max-width: 100%;
}

.container {
  max-width: 97%;
}
````

And it worked!

## Cleaning things up

Mostly.

If I were using GitHub *only* to read markdown files, this would have been a perfectly good solution. But my fix mucks up other parts of the layout. Profile pictures get squished. File containers and other page elements overflow the page or are partially hidden from view. Which is kind of less than ideal.

How to fix things?

### Selectively Applying Changes

As a first step, I decided to apply my changes *only* to pages with markdown files. That required Javascript, but it turned out to be fairly simple. A little more digging around in the developer tools, and I discovered that pages displaying markdown files have an HTML element with `id="readme"`. After a little bit of googling and experimenting, I came up with this:

````
// only change "readme" pages
if (document.getElementById("readme")) {

  // get body element and add custom styles
  var body = document.body;

  body.style.minWidth = "0";
  body.style.maxWidth = "100%";

  // get .container elements and add custom styles
  var containers = document.querySelectorAll(".container");

  for (var i = 0; i < containers.length; i++) {
    containers[i].style.maxWidth = "97%";
  }
}
````
Now pages without a readme section were rendered normally, and my fix was applied only to pages *with* readme sections. (Although I do often need to refresh the page for the changes to take effect.)

### Fixing the File Table Layout

The other change that I decided I really, really wanted to have was a fix for the file table. (This one took me a ridiculously long time to figure out.)

Basically, the change involved getting the width of the table (from an HTML element with class `.file-wrap`), then manually calculating and setting the widths of the table columns (icon, content, message, and age).

Here's the code for that one:

````
// get the width of the table
var fileWrap = document.getElementsByClassName("file-wrap")[0];
var tWidth = fileWrap.clientWidth - 26.4; // width of wrapper - width of icon column

// determine the desired width of the content, message, and age columns
var cWidth = 2 * tWidth / 7;
var mWidth = 3.5 * tWidth / 7;
var aWidth = 1.5 * tWidth / 7;

// get elements in question
var contents = document.querySelectorAll("table.files td.content");
var messages = document.querySelectorAll("table.files td.message");
var ages = document.querySelectorAll("table.files td.age");

// set the widths of the elements
for (var j = 0; j < ages.length; j++) {
  contents[j].style.maxWidth = cWidth + "px";
  messages[j].style.maxWidth = mWidth + "px";
  ages[j].style.maxWidth = aWidth + "px";
}
````
And there you have it. Done.

This turned out to be quite a project. Even though it's not perfect, it's one that I'm proud of. I think this was the first time that I actually using programming to make my life easier. I found a problem, tried to fix it, and actually succeeded. I'm looking forward to using my new "fix" as I finish working through the *You Don't Know JavaScript* series and wade through documentation on GitHub.

---
**NB:** A week later, I'm still using (and loving) my custom styles. I *have* found that I nearly always need to refresh the page before my changes take effect. I haven't been able to fix this, and having to refresh the page is such an easy thing that I've honestly stopped trying. My code, imperfect as it is, does what I need it to do. It's easy, unobtrusive, and gets the job done.
