---
title: Database Normalization
description: Learn how to organize data in a database to reduce redundancy and improve data integrity.
---

# What is Normalization?

Normalization is the process of organizing data in a database. This includes creating tables and establishing relationships between those tables according to rules designed both to protect the data and to make the database more flexible.

## Normal Forms (NF)

Here are the most common normal forms:

1. **First Normal Form (1NF):** Each table cell should contain a single value.
2. **Second Normal Form (2NF):** Must be in 1NF and all non-key attributes are fully functional dependent on the primary key.
3. **Third Normal Form (3NF):** Must be in 2NF and there is no transitive functional dependency.

## Code Example

```sql
-- Creating a normalized table
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(100),
    DepartmentID INT
);
```