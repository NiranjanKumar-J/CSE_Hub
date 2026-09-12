# Exception Handling in JavaScript

## 1. Definition

Exception handling in JavaScript is a mechanism used to detect, handle, and manage runtime errors that occur during the execution of a program.

It prevents the program from terminating suddenly and allows the programmer to display a meaningful error message or perform an alternative action.

JavaScript provides the following keywords for exception handling:

- `try`
- `catch`
- `throw`
- `finally`

## 2. Need for Exception Handling

Exception handling is important because:

1. It prevents sudden termination of the program.
2. It handles runtime errors safely.
3. It provides meaningful error messages.
4. It improves the reliability of the application.
5. It separates normal program logic from error-handling logic.

## 3. Keywords in Exception Handling

### 1. try

The `try` block contains the statements that may cause an error.

If an error occurs, control is transferred to the `catch` block.

```javascript
try {
    // Code that may cause an error
}
```

### 2. catch

The `catch` block handles the error generated in the `try` block.

It receives the error information.

```javascript
catch(error) {
    // Error handling code
}
```

### 3. throw

The `throw` statement is used to create or generate an exception manually.

It is useful when a particular condition is invalid.

```javascript
throw new Error("Invalid value");
```

### 4. finally

The `finally` block is executed whether an error occurs or not.

It is mainly used for cleanup operations.

```javascript
finally {
    // Code that always executes
}
```

## 4. General Syntax

```javascript
try {
    // statements that may cause an error
}
catch(error) {
    // handle the error
}
finally {
    // always executed
}
```

## Example of Exception Handling

```javascript
try {
    let age = 15;

    if (age < 18) {
        throw new Error("You are not eligible to vote");
    }
}
catch(error) {
    console.log("Error:", error.message);
}
finally {
    console.log("Program execution completed");
}
```

### Output

```text
Error: You are not eligible to vote
Program execution completed
```

### Explanation

1. The `try` block checks the age.
2. Since the age is less than 18, the `throw` statement generates an exception.
3. The `catch` block catches the exception.
4. The `catch` block displays the error message.
5. The `finally` block executes after the `catch` block.

## 6. Flow of Exception Handling

```text
Start
  |
try block
  |
Error occurs?
 /       \
Yes       No
 |         |
catch    continue
 |
finally
 |
End
```

## 7. Types of Errors in JavaScript

Some common JavaScript errors are:

| Error Type | Description |
|---|---|
| `SyntaxError` | Error caused by incorrect JavaScript syntax. |
| `ReferenceError` | Occurs when an undefined variable is accessed. |
| `TypeError` | Occurs when an operation is performed on an inappropriate data type. |
| `RangeError` | Occurs when a value is outside the allowed range. |
| `URIError` | Occurs due to incorrect use of URI-related functions. |

### Example

```javascript
try {
    // statement
}
catch(error) {
    console.log(error.name);
}
```

Example output shown in the material: `ReferenceError`.
