---
title: Types of SQL Commands
description: A comprehensive, exam-ready guide to SQL Commands (DDL, DML, DQL, DCL, TCL) with syntax, definitions, and real-world examples.
---

# SQL Commands: A Complete Guide

SQL (Structured Query Language) is the standard language used to interact with Relational Database Management Systems (RDBMS). To perform various operations like storing, manipulating, and retrieving data, SQL provides a set of specific commands.

Based on their functionality, SQL commands are broadly classified into five major categories.

---



## 📊 Classification of SQL Commands (Diagram)

```text
                                  SQL COMMANDS
                                       │
      ┌──────────────┬─────────────────┼─────────────────┬──────────────┐
      │              │                 │                 │              │
    DDL            DML               DQL               DCL            TCL
(Definition)  (Manipulation)       (Query)          (Control)    (Transaction)
      │              │                 │                 │              │
  • CREATE       • INSERT          • SELECT          • GRANT        • COMMIT
  • ALTER        • UPDATE                            • REVOKE       • ROLLBACK
  • DROP         • DELETE                                           • SAVEPOINT
  • TRUNCATE
```
---
## 1. DDL (Data Definition Language)

DDL commands are used to define or modify the structure of the database schema. These commands deal with the design of the database rather than the data itself.

**Note:** DDL commands are auto-committed.

**A) CREATE**

Used to create a new database or a new table.

```sql
-- Syntax
CREATE TABLE table_name (column1 datatype, column2 datatype);

-- Example
CREATE TABLE Students (
    ID INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT
);
```
**B) ALTER**

Used to modify the structure of an existing table (like adding, dropping, or modifying a column).

```sql
-- Adding a new column
ALTER TABLE Students ADD Email VARCHAR(100);

-- Modifying an existing column
ALTER TABLE Students MODIFY Age VARCHAR(3);
```
**C) DROP**

Used to completely delete an existing table or database along with its structure.

```SQL
-- Example
DROP TABLE Students;
```

**D) TRUNCATE**

Used to delete all the rows from a table, but the structure of the table remains intact.

```SQL
-- Example
TRUNCATE TABLE Students;
```
---
## 2. DML (Data Manipulation Language)

DML commands are used to manipulate or modify the data present inside the database tables. Note: DML commands are NOT auto-committed.

**A) INSERT**

Used to insert new records (rows) into a table.

```SQL
-- Syntax
INSERT INTO table_name (col1, col2) VALUES (val1, val2);

-- Example
INSERT INTO Students (ID, Name, Age) 
VALUES (101, 'Pradeepa', 20);
```

**B) UPDATE**

Used to modify the existing data inside a table. Always use the WHERE clause; otherwise, all rows will be updated!

```SQL
-- Example
UPDATE Students 
SET Age = 21 
WHERE ID = 101;
```

**C) DELETE**

Used to delete existing records from a table.

```SQL
-- Example
DELETE FROM Students 
WHERE ID = 101;
```
---
## 3. DQL (Data Query Language)

DQL is used to fetch or retrieve data from the database.

**A) SELECT**

This is the most widely used command in SQL. It extracts data from a table based on given conditions.

```SQL
-- Select all columns
SELECT * FROM Students;

-- Select specific columns with a condition
SELECT Name, Age FROM Students WHERE Age > 18;
```
---
## 4. DCL (Data Control Language)

DCL commands are used to manage the rights, permissions, and security of the database system.

**A) GRANT**

Gives user access privileges to a database.

```SQL
-- Example
GRANT SELECT, INSERT ON Students TO 'user1';
```

**B) REVOKE**

Takes back permissions previously granted to a user.

```SQL
-- Example
REVOKE INSERT ON Students FROM 'user1';
```
---
## 5. TCL (Transaction Control Language)

TCL commands only work with DML commands (INSERT, UPDATE, DELETE). They are used to manage transactions and maintain data consistency.

**A) COMMIT**

Permanently saves all the transactions (changes) made in the database.

```SQL
-- Example
UPDATE Students SET Age = 22 WHERE ID = 101;
COMMIT;
-- Changes are saved permanently
```

**B) ROLLBACK**

Undoes transactions that have not yet been saved to the database.

```SQL
-- Example
DELETE FROM Students;
ROLLBACK; 
-- The deleted data is restored!
```

**C) SAVEPOINT**

Sets a point within a transaction to which you can roll back later.

```SQL
-- Example
SAVEPOINT SP1;
DELETE FROM Students WHERE ID = 102;
ROLLBACK TO SP1; 
-- Reverts only the changes made after SP1
```
---

## 📝 Summary for Exams

-> Use **DDL** to build the house (Tables).

-> Use **DML** to put furniture in the house (Data).

-> Use **DQL** to look at the furniture (View).

-> Use **DCL** to give house keys to someone (Security).

-> Use **TCL** to save or undo the arrangement (Transactions)
