---
title: Golang get file number content
description: Let get line in the file
lang: en-US
image: /gopher-look.png
date: 2019-12-12
tag: golang
layout: Post
---

[[toc]]

###  Let get line in the file

Hi,

If you want to content in line from file, you should this function. Only call

```line, err := getLine('file.txt', 2)```

in this main block.

Get Line Function:

```python
func getLine(filename string, n int) (string, error) {
    // Line number mustn't higher than 1
	if n < 1 {
		return "", fmt.Errorf("invalid request: line %d", n)
	}

    // Get file contents
	f, err := os.Open(filename)
	if err != nil {
		return "", err
	}
	defer f.Close()

	bf := bufio.NewReader(f)
	var line string

    for lnum := 0; lnum < n; lnum++ {
		line, err = bf.ReadString('\n')
		if err == io.EOF {
			switch lnum {
			case 0:
				return "", errors.New("no lines in file")
			case 1:
				return "", errors.New("only 1 line")
			default:
				return "", fmt.Errorf("only %d lines", lnum)
			}
		}
		if err != nil {
			return "", err
		}
	}
    // isEmpty
	if line == "" {
		return "", fmt.Errorf("line %d empty", n)
	}

	return line, nil
}
```

Happy coding :elephant:
