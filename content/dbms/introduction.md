---
title: Introduction to DBMS
description: Learn the basics of Database Management Systems, why we need them, and how they differ from file systems.
---

# What is a Database?

A database is an organized collection of data, so that it can be easily accessed and managed. 

You can organize data into tables, rows, columns, and index it to make it easier to find relevant information.

## Why do we need a DBMS?

Before DBMS, data was stored in simple flat files. The file system has many disadvantages:
* **Data Redundancy:** Same data stored in multiple places.
* **Data Inconsistency:** Changes in one file might not reflect in another.
* **Security Problems:** Hard to apply security constraints.

## Example of SQL

Here is a simple SQL query to get a user:

```sql
SELECT * FROM users WHERE age > 18;