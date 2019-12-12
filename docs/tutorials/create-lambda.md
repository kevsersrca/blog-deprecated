---
title: AWS Lambda Tutorial - I
description: Let create a lambda server with Golang
lang: en-US
prev: false
next: false
editLink: true
image: /aws-lambda.png
date: 2019-12-9
---

# How to create lambda with golang on AWS

As for me, aws lambda most usefull server. Fast and cheap. You can see if you want to see how cheap it is. [Lambda Cost Calculator](https://dashbird.io/lambda-cost-calculator/)

### To install the AWS CLI with pip3

1- Download and install the latest version of Python from the [downloads page](https://www.python.org/downloads/)

2- Download and run the pip3 installation script provided by the Python Packaging Authority
```bash
λ curl -O https://bootstrap.pypa.io/get-pip.py
λ python3 get-pip.py --user
```

3- Use your newly installed pip3 to install the AWS CLI. We recommend that if you use Python version 3+, that you use the pip3 command.

```bash
λ pip3 install awscli --upgrade --user
```

4- Verify that the AWS CLI is installed correctly.
```bash
λ aws --version
AWS CLI 1.16.273 (Python 3.7.3)
```

### Lets write a code

1- Firstly install aws-lambda-go package

```bash
λ go get github.com/aws/aws-lambda-go/lambda
```

2- and copy paste.
```go
package main

import (
	"fmt"

	"github.com/aws/aws-lambda-go/lambda"
)

type Event struct {
	Username string
}

func handler(e Event) (string, error) {
	return fmt.Sprintf("<h1>Hello %s from Lambda Go</h1>", e.Username), nil
}

func main() {
	lambda.Start(handler)
}

```
3- build binary and zip to code for lambda deployment

```bash
 λ GOOS=linux GOARCH=amd64 go build main.go
 λ zip main.zip main 
```

### Finally, deploy lambda

Before deploy, select the iam role. You looking for role list in this command

```bash
λ aws iam list-roles
```

Function name is golang-lambda, zip file name is main.zip and enter.

```bash
 aws lambda create-function --function-name golang-lambda --runtime go1.x --zip-file fileb://main.zip --handler main --role arn:aws:iam::123456789012:user/kev
```

Source code available on [github](https://github.com/kevsersrca/golang-lambda) .

Happy Deployment.
