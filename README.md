# Large Table Experiment

I quickly wanted to evaluate how modifications of a table *in* the DOM with the help of promises impact browser performance. For that I have a huge HTML table of addresses of which every second will gets its street name extended to trigger a relayout in the browser. Meddling with the rows is done with the help of a JavaScript promise.

This test builds on the LoopBack framework on the server side and faker for generating some random data. There is Bootstrap 4 and Backbone.js and jQuery on the client side.

Front-end dependencies loaded via CDN, no fancy hot reload or build chain.

The backend generates 10000 addresses on startup. It takes a few seconds and some memory. The transferred data of course is way (too) large. Under the headline of an experiment everything is acceptable. Otherwise paginated transmission would be *necessary*.

The conclusion: **It is very slow.** But there sure are enough tricks to speed it up.
