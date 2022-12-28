NODEJS AND HTTP BASICS PROBLEM - I
----------------------------------

1.  Create a server for Employee Management System.

2.  Create a file index.js and write your server logic inside it.

3.  Create a package.json file using the right command for it.

4.  Write the following API Endpoints.

    -   a) "/" ==> If the client hits this endpoint, it should get following response:

        ```
        - WELCOME TO EMPLOYEE MANAGEMENT SYSTEM
        - The above mentioned statement should be in h1 heading format

        ```

    -   b) "/writeinfile" ==> If the client hits this endpoint following should happen:

        ```
         - A file with name "employee.txt" should be created.
         - "Employee names are as follows:" should get written inside the file asynchronously.
         - Don't forget to take care of the error, if there is some mishap.
         - If everything is working fine server should respond with "Data has been written in the file", this should be in h1 heading format.

        ```

    -   c) "/enternames" ==> If the client hits this endpoint following should happen:

        ```
         - ["Aman", "Albert", "Varun", "Rajat", "Nrupul"].
         - Make use of the above array, all the names should get entered in the file one below the other asynchronously.
         - Don't forget to take care of the error, if there is some mishap.
         - If everything is working fine server should respond with "All the names added in the file", this should be in h1 heading format.

        ```

    -   d) "/alldetails" ==> Following should happen if client hits at this endpoint.

        ```
         - Read the content of the file "employee.txt".
         - display them in the below given screenshot:

        ```

![Screenshot 2022-12-25 at 3.03.28 AM.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-25/Screenshot%202022-12-25%20at%203.03.28%20AM_636571.png)

```
        - Hint : Refer external module "cowsay" for this.

```

-   e) "/address" should respond with the ip address of the website that you are going to pass as argument in terminal while running the server.

    ```
     - Server should respond with "The IP Address is 'ip address of passed website' ".
     - for example, ```node index.js masaischool.com``` should print an IP address of masaischool.com.
     - Note : No need to work with nodemon for this.

    ```

-   f) "/delete" ==> If the client hits this endpoint following should happen:

    ```
         - "employee.txt" should get deleted.
         - Don't forget to take care of the error, if there is some mishap.
         - If everything is working fine server should respond with "File has been deleted", this should be in h1 heading format.

    ```

-   g) Don't forget to take care of the invalid endpoint.