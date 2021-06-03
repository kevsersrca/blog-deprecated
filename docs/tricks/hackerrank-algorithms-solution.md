---
title: Diagonal Difference
description: Hackerrank python algorithms
lang: en-US
image: /gopher-look.png
date: 2020-05-15
tag: hackerrank,python,algorithms
layout: Post
---

# Hackerrank Diagonal Difference in Python

```python
#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'diagonalDifference' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.
#

def diagonalDifference(arr):
    left_count, right_count = 0, len(arr[0])-1
    right_total, left_total = 0, 0
    for i in arr:
        left_total += i[left_count]
        right_total += i[right_count]
        left_count+=1
        right_count-=1
    return abs(right_total-left_total)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    arr = []

    for _ in range(n):
        arr.append(list(map(int, input().rstrip().split())))

    result = diagonalDifference(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
```
