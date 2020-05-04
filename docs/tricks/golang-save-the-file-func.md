---
title: Golang File create and write function
description: Let create a file
lang: en-US
image: /gopher-look.png
date: 2020-02-07
tag: golang
layout: Post
---

## Create file and write inside data in Go

Hi,

Golang create file and write file in here.

```golang
func saveFile(filename string, body []byte) (bool, error) {
	f, err := os.Create(filename)
	if err != nil {
		return false, err
	}
	defer f.Close()

	_, err = f.Write(body)
    if err != nil {
        return false, err
    }
	return true, nil
}
```

instead of `f.Write()` function, you should use `f.WriteString()`.


Happy Coding,
