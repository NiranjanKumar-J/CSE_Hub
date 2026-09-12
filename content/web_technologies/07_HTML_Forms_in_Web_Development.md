# HTML Forms in Web Development

## 1. Introduction

An HTML form is used to collect information or data from users and send it to a web server for processing.

### Examples

- Registration forms
- Login forms
- Feedback forms
- Admission forms
- Online surveys

HTML provides different form controls such as text fields, radio buttons, checkboxes, buttons, drop-down lists, etc.

## 2. Role of HTML Forms in Web Development

HTML forms play an important role in user interaction with a website.

### Main Uses

#### 1. Collect User Information

Forms are used to collect details such as name, email, phone number, etc.

#### 2. User Registration

Registration forms collect information from new users.

#### 3. Login

Username and password can be entered using form fields.

#### 4. Online Applications

Forms can be used for submitting online applications.

#### 5. Send Data to Server

The collected data can be sent to a server using methods such as `GET` and `POST`.

#### 6. User Interaction

Forms allow users to interact with web applications.

## 3. `<form>` Tag

The `<form>` tag is used to create an HTML form.

### Syntax

```html
<form action="process.php" method="post">
    Form elements
</form>
```

### Important Attributes

- **action** — Specifies the URL or server program where the form data is sent.
- **method** — Specifies how the data is sent.
- **GET** — Sends data through the URL.
- **POST** — Sends data in the HTTP request body.

## 4. Different Input Types

HTML provides different input controls for collecting different types of information.

### a) Text Field

A text field is used to enter a single line of text.

```html
<label for="name">Name:</label>
<input type="text" id="name" name="name">
```

Example: Used to enter a student's name.

### b) Radio Button

A radio button is used when the user must select only one option from a group.

```html
<label>Gender:</label>

<input type="radio"
       id="male"
       name="gender"
       value="male">
<label for="male">Male</label>

<input type="radio"
       id="female"
       name="gender"
       value="female">
<label for="female">Female</label>
```

Here, both radio buttons have the same `name`, so only one can be selected.

### c) Checkbox

A checkbox allows the user to select one or more options.

```html
<label>Courses:</label>

<input type="checkbox"
       id="html"
       name="course"
       value="HTML">
<label for="html">HTML</label>

<input type="checkbox"
       id="css"
       name="course"
       value="CSS">
<label for="css">CSS</label>

<input type="checkbox"
       id="js"
       name="course"
       value="Javascript">
<label for="js">JavaScript</label>
```

Example: A student can select multiple courses.

## 5. Purpose of `<label>` Tag

The `<label>` tag provides a text description for a form control.

### Syntax

```html
<label for="username">Username:</label>
<input type="text" id="username">
```

Here, the `for` attribute of the `<label>` matches the `id` of the input element.

### Advantages

1. Clearly identifies the purpose of an input field.
2. Improves accessibility.
3. Makes forms easier to understand.
4. Clicking the label can activate the associated control, especially useful for radio buttons and checkboxes.

## 6. Purpose of `<button>` Tag

The `<button>` tag is used to create a clickable button in a form.

### Syntax

```html
<button type="submit">Submit</button>
```

### Common Button Types

- **submit** — Sends the form data.
- **reset** — Clears the entered form data.
- **button** — Creates a normal button for custom actions.

### Example

```html
<button type="submit">Submit</button>
<button type="reset">Reset</button>
```

## 8. Simple Structure of the Form

```text
Student Registration Form
          |
       <form>
          |
   +------+------+------+
   |      |      |      |
Text   Radio  Checkbox  Buttons
Field  Button          |
   |      |      |     |
 Name   Gender Courses Submit
                         Reset
```
