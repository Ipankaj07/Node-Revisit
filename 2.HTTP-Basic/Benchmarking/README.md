NODEJS - BENCHMARKING
---------------------

-   create a basic http nodejs server with following routes
-   have a large at least 1mb of a text file
-   /textsync reads the file synchronously and returns response
-   /textasync reads the file async and returns response
-   /textstream reads the file as stream and returns
-   Benchmark the application. observe the results.
-   Make changes to reduce the size of the text file to only few bytes. (around 10- 15words)
-   benchmark the application again, try observing results, understand why that happened.

Part 2:

-   there's one more way to read a file in Nodejs
-   a specific module called as `fs/promise`.
-   it lets you use `promise` based api (async await or .then/catch) to read/write files
-   create a one more route `/textpromise`, which uses `fs/promise` module to read file
-   observe the benchmarks