---
title: Types of CSS Style Sheets

description: An exam-ready guide to the three types of CSS style sheets: Inline CSS, Internal CSS, and External CSS, including their syntax, examples, advantages, disadvantages, and CSS priority.
---

# Types of CSS Style Sheets

## Introduction

CSS (Cascading Style Sheets) is used to design and style HTML web pages. It controls the appearance of elements such as text, colors, fonts, backgrounds, borders, spacing and layouts.

There are three main types of CSS style sheets:

1. Inline CSS
2. Internal CSS
3. External CSS

## 1. Inline CSS

Inline CSS is used to apply CSS styles directly to an individual HTML element using the `style` attribute.

### Syntax

```html
<tag style="property: value">
```

### Example

```html
<h1 style="color: blue; text-align: center;">
    Welcome to Web Technology
</h1>

<p style="font-size: 18px;">
    This is an example of Inline CSS.
</p>
```

### Explanation

- The `style` attribute is used inside the HTML tag.
- `color: blue` changes the text color to blue.
- `text-align: center` aligns the heading to the center.
- `font-size` changes the size of the paragraph.
- The style affects only that particular HTML element.

### Advantages

- Easy and quick to use.
- Useful for applying a style to a single element.
- No separate CSS file is required.

### Disadvantages

- Difficult to maintain for large websites.
- Same style must be repeated for multiple elements.
- Makes HTML code lengthy.

## 2. Internal CSS

Internal CSS is used to define styles for a single HTML page. It is written inside the `<style>` tag, which is placed within the `<head>` section of the HTML document.

### Syntax

```html
<style>
    selector {
        property: value;
    }
</style>
```

### Example

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        h1 {
            color: blue;
            text-align: center;
        }

        p {
            color: green;
            font-size: 18px;
        }

        body {
            background-color: lightgray;
        }
    </style>
</head>

<body>
    <h1>Welcome to Web Technology</h1>
    <p>This is an example of Internal CSS.</p>
</body>
</html>
```

### Explanation

- The `<style>` tag contains the CSS rules.
- `h1` is the selector for the heading.
- `p` is the selector for the paragraph.
- `body` is used to style the entire page.
- The styles are applied to all matching elements within that HTML page.

### Advantages

- Easy to manage styles for a single webpage.
- HTML elements can share the same style.
- Better than using inline CSS when many elements need the same styling.

### Disadvantages

- Styles cannot be easily shared with multiple HTML pages.
- Increases the size of the HTML file.
- Changes must be made separately on each page.

## 3. External CSS

External CSS is the most commonly used method for designing multiple web pages. The CSS rules are written in a separate `.css` file and linked to the HTML document using the `<link>` tag.

### CSS File: `style.css`

```css
body {
    background-color: lightgray;
}

h1 {
    color: blue;
    text-align: center;
}

p {
    color: green;
    font-size: 18px;
}
```

### HTML File: `index.html`

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Welcome to Web Technology</h1>
    <p>This is an example of External CSS.</p>
</body>
</html>
```

### Explanation

- The CSS rules are stored in a separate file called `style.css`.
- The `<link>` tag connects the CSS file with the HTML page.
- The `href` attribute specifies the location of the CSS file.
- The same CSS file can be linked to many HTML pages.
- Therefore, changing the CSS file can update the appearance of multiple pages.

### Advantages

- Easy to maintain.
- One CSS file can be used for many webpages.
- Reduces repetition of CSS code.
- Keeps HTML and CSS separate.
- Suitable for large websites.
- Provides consistent design throughout a website.

### Disadvantages

- Requires an additional CSS file.
- If the CSS file is missing or not linked correctly, the styles may not be applied.

## CSS Priority

When more than one type of CSS is applied to the same HTML element, the priority of CSS rules is important.

Generally:

```text
Inline CSS > Internal/External CSS
```

### Example

```html
<p style="color: red;">Welcome</p>
```

Even if the external CSS contains:

```css
p {
    color: blue;
}
```

the paragraph will normally appear red, because Inline CSS has higher priority.
