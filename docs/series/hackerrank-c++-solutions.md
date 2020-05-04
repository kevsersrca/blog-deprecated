---
title: Hackerrank CPP Solutions
description: CPP Challanges
lang: en-US
image: /sysctl.jpg
date: 2020-02-07
tag: kubernetes
layout: Post
---

# Contents

[[toc]]

## Say "Hello, World!" With C++

```c
#include <iostream>
#include <cstdio>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}

```
## Input & Output (cin & cout)

```c
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int i = 0;
    int sum = 0;
    //sum of
    while (cin >> i) {
        sum += i;
    }

    cout << sum << endl;

    return 0;
}

```
## Data Types

```c
#include <iostream>
#include <cstdio>
using namespace std;

int main() {
    int i; long l; char c; float f; double d;
    //input
    cin>>i>>l>>c>>f>>d;
    //output
    printf("%d\n%ld\n%c\n%3f\n%9lf", i, l, c, f, d);
    return 0;
}
```
## If Condition
```c
#include <bits/stdc++.h>
#include <iostream>
#include <cstdio>

using namespace std;



int main()
{
    int n;
    cin >> n;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');

    if (n == 1) {
        printf("one");
    } else if (n==2) {
        printf("two");
    } else if (n==3) {
        printf("three");
    } else if (n==4) {
        printf("four");
    } else if (n==5) {
        printf("five");
    } else if (n==6) {
        printf("six");
    } else if (n==7) {
        printf("seven");
    } else if (n==8) {
        printf("eight");
    } else if (n==9) {
        printf("nine");
    } else {
        printf("Greater than 9");
    }

    return 0;
}
```

## For Loop

```c
#include <iostream>
#include <cstdio>
#include <string>
#include <array>
using namespace std;

//number and speeling structure
struct numberDictionary {
    int number;
    string dict;
};


// number convert speeling word function
string numberToEnglish(int n) {
    struct numberDictionary NatureNumbers[10] = {
            {1, "one"},
            {2, "two"},
            {3, "three"},
            {4, "four"},
            {5, "five"},
            {6, "six"},
            {7, "seven"},
            {8, "eight"},
            {9, "nine"},
    };
    for (int i=0;i<10;i++) {
        if (NatureNumbers[i].number == n) {
            return NatureNumbers[i].dict;
        }
    }
    return "";
}

int main() {
    std::array<int,2> numberArray;
    cin>>numberArray[0];
    cin>>numberArray[1];

    //control
    for (int i=numberArray[0]; i<=numberArray[1];i++) {
        if (i >0 && i < 10) {
            cout << numberToEnglish(i) << endl;
        }
        if (i > 9 && i % 2 == 0) {
            cout << "even" << endl;
        }
        if (i > 9 && i % 2 != 0) {
            cout << "odd" << endl;
        }
    }

    return 0;
}
```

## Find Max Algorithm

```c
#include <iostream>
#include <cstdio>
using namespace std;

int max_of_four(int a, int b, int c, int d) {
    //max is first element
    int max = a;

    //check most big number
    if (max<b){
        max = b;
    }
    if (max<c) {
        max = c;
    }
    if (max<d) {
        max = d;
    }
    return max;
}

int main() {
    //get numbers
    int a, b, c, d;
    scanf("%d %d %d %d", &a, &b, &c, &d);
    //find max
    int ans = max_of_four(a, b, c, d);
    printf("%d", ans);

    return 0;
}
```

## Pointer

```c
#include <stdio.h>

void update(int *a,int *b) {
    //two variable collect pointer values
    *a = *a + *b;
    // two variable extract pointer values
    *b = *a - *b - *b;
    // if result is negative. number multiply with -1
    if (*b < 0){*b = *b * -1;}
}

int main() {
    //create a and b variable
    int a, b;
    int *pa = &a, *pb = &b;

    scanf("%d %d", &a, &b);
    //update function

    update(pa, pb);
    printf("%d\n%d", a, b);

    return 0;
}
```

## Arrays

```c
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {

    // get line number
    int n;
    cin >> n;

    //array create and fill
    int arr[n];
    for (int i=0;i<n;i++) {
        cin >> arr[i];
    }

    //print reversely
    for(int i=n-1;i>=0;i--) {
        cout << arr[i] << " ";
    }
    return 0;
}

```
## Variable Sized Arrays

```c
#include <iostream>
#include <vector>

using namespace std;

int main() {
    // get length of array 'a' and number of queries
    int n, q;
    cin >> n >> q;

    // create vector of vectors
    vector<vector<int>> a(n);

    // fill each 2D vector i with k_i values
    for (int i = 0; i < n; i++) {
        // get the length k of the vector at a[i]
        int k;
        cin >> k;

        // fill the vector with k values
        a[i].resize(k);
        for (int j = 0; j < k; j++) {
            cin >> a[i][j];
        }
    }

    // run queries on a
    for (int q_num = 0; q_num < q; q_num++) {
        // get i, j as the 'query' to get a value from a
        int i, j;
        cin >> i >> j;
        cout << a[i][j] << endl;
    }

    return 0;
}
```

## Strings

```c
#include <iostream>
#include <string>
using namespace std;

int main() {
    // variables
    int len, len2;

    // get the string
    string a, b;
    cin >> a >>  b;

    //print sizes
    len = a.size();
    len2 = b.size();
    cout << len << " " << len2 << endl;

    // print total string
    cout << a +b <<endl;

    //swap first values from strings
    swap( a[0], b[0]);
    cout << a << ' ' <<  b << endl;
    return 0;
}

```

## String Stream

```c
#include <sstream>
#include <vector>
#include <iostream>
using namespace std;

vector<int> parseInts(string str) {
    vector<int> vec;
    stringstream ss(str);
    char ch;
    int temp;

    while(ss) {
        ss>>temp>>ch;
        vec.push_back(temp);
    }

    return vec;
}

int main() {
    string str;
    cin >> str;
    vector<int> integers = parseInts(str);
    for(int i = 0; i < integers.size(); i++) {
        cout << integers[i] << "\n";
    }

    return 0;
}
```

## Structs

```c
#include <cmath>
#include <cstdio>
#include <vector>
#include <string>
#include <iostream>
#include <algorithm>
using namespace std;

struct Student {
    int age;
    string first_name;
    string last_name;
    string standard;
};

int main() {
    Student st;

    cin >> st.age >> st.first_name >> st.last_name >> st.standard;
    cout << st.age << " " << st.first_name << " " << st.last_name << " " << st.standard;

    return 0;
}


```

## Class

```c
#include <iostream>
#include <sstream>
#include <string>
using namespace std;

class Student{
    int age;
    int standard;
    string first_name;
    string last_name;

public:
    void set_age(int a) {
        age= a;
    }
    int get_age() {
        return age;
    }
    int get_standard() {
        return standard;
    }
    string get_first_name() {
        return first_name;
    }
    string get_last_name() {
        return last_name;
    }
    void set_standard(int a) {
        standard =a;
    }
    void set_first_name(string a) {
        first_name =a;
    }
    void set_last_name(string a) {
        last_name =a;
    }
    string to_string()
    {
        stringstream ss;
        char c = ',';
        ss << age << c << first_name << c << last_name << c << standard;
        return ss.str();
    }
};

int main() {
    int age, standard;
    string first_name, last_name;

    cin >> age >> first_name >> last_name >> standard;

    Student st;
    st.set_age(age);
    st.set_standard(standard);
    st.set_first_name(first_name);
    st.set_last_name(last_name);

    cout << st.get_age() << "\n";
    cout << st.get_last_name() << ", " << st.get_first_name() << "\n";
    cout << st.get_standard() << "\n";
    cout << "\n";
    cout << st.to_string();

    return 0;
}


```

## Classes and Objects

```c
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <cassert>
using namespace std;

class Student{
private:
    int scores[5];
    int sum;
public:
    int calculateTotalScore() {
        return sum;
    }
    void input() {
        for(int i=0; i<5; i++) {
            cin >> scores[i];
            sum+=scores[i];
        }
    }
};

int main() {
    int n; // number of students
    cin >> n;
    Student *s = new Student[n]; // an array of n students

    for(int i = 0; i < n; i++){
        s[i].input();
    }

    // calculate kristen's score
    int kristen_score = s[0].calculateTotalScore();

    // determine how many students scored higher than kristen
    int count = 0;
    for(int i = 1; i < n; i++){
        int total = s[i].calculateTotalScore();
        if(total > kristen_score){
            count++;
        }
    }

    // print result
    cout << count;

    return 0;
}
```

## Box it

```c
#include<bits/stdc++.h>

using namespace std;
//Implement the class Box
//l,b,h are integers representing the dimensions of the box

// The class should have the following functions :

// Constructors:
// Box();
// Box(int,int,int);
// Box(Box);


// int getLength(); // Return box's length
// int getBreadth (); // Return box's breadth
// int getHeight ();  //Return box's height
// long long CalculateVolume(); // Return the volume of the box

//Overload operator < as specified
//bool operator<(Box& b)

//Overload operator << as specified
//ostream& operator<<(ostream& out, Box& B)
class Box{
private:
    int l, b, h;
public:
    Box(){
        l = 0;
        b = 0;
        h = 0;
    }
    Box(int length, int breadth, int height){
        l = length;
        b = breadth;
        h = height;
    }
    Box(const Box& B){
        l = B.l;
        b = B.b;
        h = B.h;
    }

    int getLenght(){
        return l;
    }
    int getBreadth(){
        return b;
    }
    int getHeight(){
        return h;
    }
    long long CalculateVolume(){
        return (long long)l*b*h;
    }

    friend bool operator < ( Box&A,Box& B){
        if( (A.l < B.l) || ((A.b < B.b) && (A.l == B.l)) || ((A.h < B.h) && (A.l == B.l) && (A.b == B.b)) ){
            return true;
        }else{
            return false;
        }
    };

    friend ostream& operator<< (ostream& output, const Box& B){
        output << B.l << " " << B.b << " " << B.h;
        return output;
    }
};

void check2()
{
    int n;
    cin>>n;
    Box temp;
    for(int i=0;i<n;i++)
    {
        int type;
        cin>>type;
        if(type ==1)
        {
            cout<<temp<<endl;
        }
        if(type == 2)
        {
            int l,b,h;
            cin>>l>>b>>h;
            Box NewBox(l,b,h);
            temp=NewBox;
            cout<<temp<<endl;
        }
        if(type==3)
        {
            int l,b,h;
            cin>>l>>b>>h;
            Box NewBox(l,b,h);
            if(NewBox<temp)
            {
                cout<<"Lesser\n";
            }
            else
            {
                cout<<"Greater\n";
            }
        }
        if(type==4)
        {
            cout<<temp.CalculateVolume()<<endl;
        }
        if(type==5)
        {
            Box NewBox(temp);
            cout<<NewBox<<endl;
        }

    }
}

int main()
{
    check2();
}
```

## Vector-Sort

```c
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int count;
    vector<int>v;
    cin >> count;
    for(int i=0;i<count;i++) {
        int temp;
        cin >> temp;
        v.push_back(temp);
    }
    sort(v.begin(), v.end());
    for (auto i = v.begin(); i != v.end(); ++i)
        cout << *i << " ";

    return 0;
}

```

Happy Coding
