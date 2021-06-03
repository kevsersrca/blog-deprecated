---
title: Merge Sort
description: merge sort in python3
lang: en-US
image: /merge-sort.gif
date: 2019-12-12
tag: sorting,merge,python,algorithms
layout: Post
---


It is one of the sorting algorithms developed to keep the data in order. It simply divides the sequence to be sorted into two parts, until the two elements descend into the remaining pieces. Then he combines these pieces in order. The resulting array is the sequential array itself. In this respect, it is a divide and conquer approach.

```python
def merge_sort(input_list):
	# perform merge sort
	if len(input_list) <= 1:
		return input_list

	middle_index = len(input_list) // 2
	left = input_list[:middle_index]
	right = input_list[middle_index:]

	left = merge_sort(left)
	right = merge_sort(right)

	return merge(input_list, left, right)


def merge(list_to_sort, list_first_half, list_second_half):
	first_half_index = second_half_index = merge_index = 0

	while first_half_index < len(list_first_half) and second_half_index < len(list_second_half):
		if list_first_half[first_half_index] <= list_second_half[
			second_half_index]:
			list_to_sort[merge_index] = list_first_half[first_half_index]
			first_half_index += 1
		else:
			list_to_sort[merge_index] = list_second_half[second_half_index]
			second_half_index += 1
		merge_index += 1

	while first_half_index < len(list_first_half):
		list_to_sort[merge_index] = list_first_half[first_half_index]
		merge_index += 1
		first_half_index += 1
	while second_half_index < len(list_second_half):
		list_to_sort[merge_index] = list_second_half[second_half_index]
		merge_index += 1
		second_half_index += 1

	return list_to_sort
```
