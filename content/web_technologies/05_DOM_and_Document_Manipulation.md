---
title: DOM (Document Object Model) and Document Manipulation using JavaScript

description: An exam-ready guide to the Document Object Model (DOM) and document manipulation using JavaScript, covering DOM structure, element selection, content and style modification, attribute changes, element creation and removal, event handling, and practical examples.
---

# DOM (Document Object Model) and Document Manipulation using JavaScript

## 1. Introduction

DOM (Document Object Model) is a programming interface used to represent an HTML or XML document as a tree of objects. It allows JavaScript to access, modify, add, or remove HTML elements and their contents dynamically.

Using DOM, JavaScript can change the content, style, attributes, and structure of a web page without reloading the entire page.

## 2. DOM Structure

When a browser loads an HTML document, it converts the HTML code into a DOM tree.

### Example HTML

```html
<html>
    <body>
        <h1>Hello</h1>
        <p>Welcome to Web Technology</p>
    </body>
</html>
```

### DOM Structure

```text
Document
   |
  html
   |
  body
  /  \
h1    p
|     |
Hello  Welcome to Web Technology
```

Each HTML element is treated as a node/object in the DOM tree.

## 3. Need for DOM

DOM is used to make web pages dynamic and interactive.

It helps JavaScript to:

1. Access HTML elements.
2. Change the content of elements.
3. Change CSS styles.
4. Change HTML attributes.
5. Create new elements.
6. Remove existing elements.
7. Handle user events such as click, mouseover and keyboard actions.
8. Dynamically update a webpage without refreshing it.

## 4. Document Manipulation using DOM

JavaScript provides several methods and properties to manipulate the DOM.

### a) Selecting an Element

JavaScript can select HTML elements using different methods.

```javascript
document.getElementById("demo");
```

### Example

```html
<p id="demo">Hello</p>

<script>
    let element = document.getElementById("demo");
</script>
```

### b) Changing HTML Content

The `innerHTML` property is used to change the content of an HTML element.

```javascript
document.getElementById("demo").innerHTML = "Welcome";
```

The original content is replaced with `Welcome`.

### c) Changing Text Content

The `textContent` property can also be used to change the text.

```javascript
document.getElementById("demo").textContent = "Welcome";
```

### d) Changing CSS Style

The `style` property is used to modify the appearance of an element.

```javascript
document.getElementById("demo").style.color = "red";
```

For example:

```javascript
document.getElementById("demo").style.fontSize = "20px";
```

This changes the font size of the selected element.

### e) Changing HTML Attributes

DOM can be used to change attributes such as `src`, `href`, `value`, etc.

```javascript
document.getElementById("image").src = "newimage.jpg";
```

The `src` attribute of the image is changed dynamically.

### f) Creating a New Element

The `createElement()` method creates a new HTML element.

```javascript
let para = document.createElement("p");
```

Text can be added to it:

```javascript
para.textContent = "New paragraph";
```

The new element can then be added to the document.

```javascript
document.body.appendChild(para);
```

### g) Removing an Element

The `remove()` method can be used to remove an element from the document.

```javascript
document.getElementById("demo").remove();
```

Thus, an existing HTML element can be deleted dynamically.

### h) Handling Events

DOM is also used to respond to user actions.

For example, when a button is clicked:

```javascript
button.addEventListener("click", function() {
    alert("Button clicked");
});
```

This makes the webpage interactive.

## 5. Example of DOM Manipulation

The following example demonstrates how JavaScript can change the text, color and content of an HTML element when a button is clicked.

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>

<body>
    <h2 id="heading">Welcome to Web Technology</h2>

    <p id="message">This is the original message.</p>

    <button onclick="changeContent()">Click Me</button>

    <script>
        function changeContent() {
            document.getElementById("heading").innerHTML =
                "DOM Manipulation";

            document.getElementById("message").innerHTML =
                "The content has been changed using JavaScript";

            document.getElementById("message").style.color = "red";
        }
    </script>
</body>
</html>
```

## Working of the Example

1. The `<h2>` element has the ID `heading`.
2. The `<p>` element has the ID `message`.
3. When the user clicks the **Click Me** button, the `changeContent()` function is called.
4. `getElementById()` finds the required HTML elements.
5. `innerHTML` changes their content.
6. The `style.color` property changes the paragraph color.
7. Thus, the webpage is modified dynamically without reloading the page.
