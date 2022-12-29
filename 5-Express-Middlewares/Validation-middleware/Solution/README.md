-   The request body should be a valid JSON object.
-   The request body should contain the following properties: `id`, `name`, `rating`, `description`, `genre`, `cast`.
-   The `id` property should be a number.
-   The `name` property should be a string.
-   The `rating` property should be a number.
-   The `description` property should be a string.
-   The `genre` property should be a string.
-   The `cast` property should be an array of strings.


***Example***

```
{
    "id":1,
    "name": "The Shawshank Redemption",
    "rating": 9.3,
    "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "genre": "Drama",
    "cast": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
}
```

---

**If Suppose any filed is missing getting :** 

```
{
    "error": `(filed-name) is required`
}
```

**If Suppose any filed is not valid getting :** 

```
{
    "error": `(filed-name) is not valid`
}
```
> If the request body is valid, and all the conditions are met, then the request should be passed to the next middleware.

---

**Usage**

```
const validationMiddleware = require("./middlewares/validation.middleware");

// POST route for 'movies' database
router.post('/movies', validationMiddleware, (req, res) => {
  // Add movie to the database
  // ...

  // Send success response
  res.json({ message: "Movie added successfully" });
});
```
   