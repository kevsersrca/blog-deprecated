---
title: Python Learning Series
description: Beginner Python Notes
lang: en-US
image: /python.jpg
date: 2020-05-01
tag: python,beginner
layout: Post
---

# Contents

[[toc]]

## Installation

[Offical Installation Page](https://www.python.org/downloads/)

## Version Control

```python
python --version
```

or 

```python
python -V
```

## Print Somethings

```python
print('Hello World')
```


## Variables and assigning values

* Variable names must not start with a symbol or number
* Variable names are case sensitive.
* If there is any error in this section, its may occur `NameError` , `SyntaxError` and `ValueError`

Format:
```python
<variable name> = <value>
```

Types:
```python
# Integer
a=2 print(a)
# Output: 2

# Integer
b = 9223372036854775807 print(b)
# Output: 9223372036854775807

# Floating point
pi = 3.14 print(pi)
# Output: 3.14

# String
c = 'A' print(c)
# Output: A

# String
name = 'John Doe' print(name)
# Output: John Doe

# Boolean
q = True print(q)
# Output: True

# Empty value or null data type
x = None print(x)
# Output: None
```

Type Checking Function:

```python
q = True
print(type(q))
# Output: <type 'bool'>
```

Multiple Assigning 

The error in last example can be obviated by assigning remaining values to equal number of arbitrary variables. This dummy variable can have any name, but it is conventional to use the underscore (_) for assigning unwanted values:


```python
a, b, c = 1, 2, 3 print(a, b, c)
# Output: 1 2 3

a, b, _ = 1, 2, 3 
print(a, b)
# Output: 1, 2
```

You can also assign a single value to several variables simultaneously.

```python
 a=b=c=1 
 print(a, b, c)
 # Output: 1 1 1
```

List:

```python
x = y = [7, 8, 9] # x and y are two different names for the same list object just created, [7,8, 9]
x[0] = 13 # we are updating the value of the list [7, 8, 9] through one of its names, in this case
print(y)  # printing the value of the list using its other name

# Output: [13, 8, 9] # hence, naturally the change is reflected
```

Nested List:

```python
x = [1, 2, [3, 4, 5], 6, 7] # this is nested list print x[2]
# Output: [3, 4, 5]
print x[2][1]
# Output: 4
```

Again Assignment

```python
a=2 print(a)
# Output: 2
a = "New value" print(a)
# Output: New value
```

## Block Indentation


Python uses indentation to define control and loop constructs. This contributes to Python's readability, however, it requires the programmer to pay close attention to the use of whitespace. Thus, editor miscalibration could result in code that behaves in unexpected ways.


* If there is any error in this section, its may occur `IndentationError` 


Example

```python
if a > b:   # If block starts here
	print(a)  # This is part of the if block
else:  # else must be at the same level as if
	print(b) # This line is part of the else block

```

## Datatypes


`bool`: A boolean value of either True or False. Logical operations like and, or, not can be performed on booleans.


#### Numbers

`int`: Integer number

`float`: Floating point number; precision depends on the implementation and system architecture, for CPython the float datatype corresponds to a C double.

`complex`: Complex numbers

```python
a = 2 + 1j
b = 100 + 10j
```


#### Strings



















































