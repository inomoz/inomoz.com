+++
title = "LeetCode examples"
author = ["Inom Turdikulov"]
draft = false
+++

## Array in Java {#array-in-java}

```java
public class Main {
    public static void main(String[] args) {
        DVD[] dvdCollection = new DVD[15];

        // Create avenger item
        DVD avengerDVD = new DVD("The avengers", 2012, "Joss Wedon");
        dvdCollection[7] = avengerDVD;
        System.out.print("hello, world");
    }


    // A simple definition for a DVD.
    public class DVD {
        public String name;
        public int releaseYear;
        public String director;

        public DVD(String name, int releaseYear, String director) {
            this.name = name;
            this.releaseYear = releaseYear;
            this.director = director;
        }

        public String toString() {
            return this.name + ", directed by " + this.director + ", released in " + this.releaseYear;
        }
    }
}

// The actual code for creating an Array to hold DVD's.

```
