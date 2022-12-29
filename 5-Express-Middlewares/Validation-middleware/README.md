EXPRESS - VALIDATION MIDDLEWARE
-------------------------------

-   create a custom validation middleware for express
-   the middleware should check for data validation before request reaches to routes
-   To test this middleware create a POST route for 'movies' database
-   this route will accept:
    -   ID: number
    -   Name: string
    -   Rating: number
    -   Description: string
    -   Genre: string
    -   Cast: string[]
-   Your job is to check if all the fields exists or not
-   if they exist check if they are correct type or not.
-   If some data is incorrect, the status code for bad request is 400. send that