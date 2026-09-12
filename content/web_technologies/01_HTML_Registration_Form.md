---
title: HTML Registration Form for College Admission

description: An exam-ready guide to creating a college admission registration form using HTML, including text fields, radio buttons, checkboxes, drop-down lists, and a submit button.
---

# HTML Registration Form for College Admission

## 1. Introduction

An HTML form is used to collect information from users and send it to a server for processing. In a college admission process, a registration form can be used to collect details such as student name, gender, course, department, etc.

The following form demonstrates the use of:

- Text field
- Gender radio button
- Course checkbox
- Department drop-down list
- Submit button

## College Admission Registration Form

```html
<form>
    <label>Student Name:</label>
    <input type="text" name="studentName">

    <label>Gender:</label>
    <input type="radio" name="gender" value="male"> Male
    <input type="radio" name="gender" value="female"> Female
    <input type="radio" name="gender" value="other"> Other

    <label>Select Course:</label>
    <input type="checkbox" name="course" value="btech"> B.E/B.Tech
    <input type="checkbox" name="course" value="mca"> MCA
    <input type="checkbox" name="course" value="mba"> MBA
    <input type="checkbox" name="course" value="bsc"> B.Sc

    <label>Select Department:</label>
    <select name="department">
        <option value="">-- Select Department --</option>
        <option value="cse">Computer Science and Engineering</option>
        <option value="ece">Electronics and Communication Engineering</option>
        <option value="eee">Electrical and Electronics Engineering</option>
        <option value="mech">Mechanical Engineering</option>
        <option value="civil">Civil Engineering</option>
    </select>

    <input type="submit" value="Register">
</form>
```

## 3. Explanation of Form Elements

### 1. Text Field

The text field is used to enter the student's name.

```html
<input type="text" name="studentName">
```

- `type="text"` creates a single-line text box.
- Example: Student Name: Niranjan Kumar

### 2. Gender Radio Button

Radio buttons are used when the user has to select one option from a group.

```html
<input type="radio" name="gender" value="male"> Male
```

- The same `name` attribute groups the radio buttons.
- Example: Male, Female, Other.

### 3. Course Checkbox

A checkbox allows the user to select one or more options.

```html
<input type="checkbox" name="course" value="btech"> B.E/B.Tech
```

It is used here to select the preferred course.

Example: B.E/B.Tech, MCA, MBA and B.Sc.

### 4. Department Drop-down Box

```html
<select name="department">
    <option>Computer Science and Engineering</option>
</select>
```

- The `<select>` element creates a drop-down list.
- The `<option>` element specifies each department.
- It saves screen space and makes selection easier.

### 5. Submit Button

```html
<input type="submit" value="Register">
```

The submit button is used to submit the entered form data.

When the user clicks **Register**, the form data is sent for processing.
