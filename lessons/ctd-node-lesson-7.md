In this lesson, you parse the query parameters passed with the REST request, appending the search filters that result to your find operation. As in the previous lesson, you communicate with a MongoDB database. The lesson starts at 3:07:00 of **[this video](https://www.youtube.com/watch?v=rltfdjcXjmk&t=11220)**, and continues to 5:05:34.

### Concept: Thenables

One part of this assignment is a little confusing. You will see code like this:

```javascript
let result = Product.find(queryObject);
...
result = result.sort(sortList);
...
result = result.select(fieldsList);
...
const products = await result;
```

How can this work? Isn’t `Product.find` asynchronous? The reason it works is that `Product.find` doesn’t return a `Promise`. It returns something that works like a Promise, but has extended capabilities. This is called a “then-able”. In this case, the thenable allows the search to be further defined. The `Product.find` call does not immediately send anything to the Mongo database, until `await` (or `.then`) is called on the thenable. Only then is the fully qualified search is sent to the database, and the Promise is resolved, and the products found by the search are returned.

### Concept: Regular Expressions

Regular expressions provide a general purpose string parsing syntax. A regular expression can be used to identify strings that match a pattern. Regular expressions can also be used to create modified strings by substituting character patterns. There are several tutorials on regular expressions on the web. Here is a selection of them:

* [Regex Tutorial](https://regexlearn.com/)
* [Game to help learn regex](http://play.inginf.units.it/#/)
* [Interactive regex exercises](https://regexone.com/)

In this course, we will not teach the use of regular expressions, but you should be aware of their purpose. To complete your homework, you can just copy the regular expressions used by the instructor from their location in the final directory.