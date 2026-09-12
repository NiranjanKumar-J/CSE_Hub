# JavaScript Mouse Events

## 1. Introduction

Mouse events are events that occur when a user performs an action using the mouse on a webpage.

JavaScript provides different event handlers to detect these actions and perform a specific operation.

The commonly used mouse events are:

1. **mouseover** — occurs when the mouse pointer moves over an element.
2. **mouseout** — occurs when the mouse pointer moves away from an element.
3. **click** — occurs when the user clicks an element once.
4. **dblclick** — occurs when the user double-clicks an element.

In the program, a button is created and these four mouse events are used. Whenever the user performs an action on the button, the message **“Thank you for visiting our webpage”** is displayed.

## 2. Program

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mouse Events</title>

    <script>
        function displayMessage() {
            document.getElementById("msg").innerHTML =
                "Thank you for visiting our webpage";
        }
    </script>
</head>

<body>
    <h2>Demonstration of Mouse Events</h2>

    <button
        onmouseover="displayMessage()"
        onmouseout="displayMessage()"
        onclick="displayMessage()"
        ondblclick="displayMessage()">
        Perform Mouse Action
    </button>

    <p id="msg"></p>
</body>
</html>
```

## 3. Explanation

### 3.1 `displayMessage()` Function

```javascript
function displayMessage() {
    document.getElementById("msg").innerHTML =
        "Thank you for visiting our webpage";
}
```

The `displayMessage()` function is used to display the required message.

- `document.getElementById("msg")` selects the paragraph having the ID `msg`.
- `innerHTML` is used to change the content of that paragraph.
- The message “Thank you for visiting our webpage” is displayed.

### 3.2 `mouseover` Event

```html
onmouseover="displayMessage()"
```

The `mouseover` event occurs when the user moves the mouse pointer over the button.

When this event occurs, the `displayMessage()` function is called.

### 3.3 `mouseout` Event

```html
onmouseout="displayMessage()"
```

The `mouseout` event occurs when the mouse pointer moves away from the button.

The `displayMessage()` function is executed and the message is displayed.

### 3.4 `click` Event

```html
onclick="displayMessage()"
```

The `click` event occurs when the user clicks the button once.

It calls the `displayMessage()` function.

### 3.5 `dblclick` Event

```html
ondblclick="displayMessage()"
```

The `dblclick` event occurs when the user double-clicks the button.

The `displayMessage()` function is executed.

## Mouse Event Summary

| Mouse Event | Meaning | Action |
|---|---|---|
| `mouseover` | Occurs when the mouse pointer enters the button | Displays the message |
| `mouseout` | Occurs when the mouse pointer leaves the button | Displays the message |
| `click` | Occurs when the button is clicked once | Displays the message |
| `dblclick` | Occurs when the button is double-clicked | Displays the message |
