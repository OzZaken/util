# Index
In computing, an `index is a data structure` that allows for fast and efficient retrieval of data from a larger collection.

In the context of applications, an index typically refers to a file that contains a list of pointers to records or data stored elsewhere, such as in a `database` or on `disk`.

There are many types of index files because they are designed to optimize different types of queries and operations.


## B-tree index
This type of index is commonly used in `databases` and `file systems`.

It's designed to efficiently handle range queries (e.g., find all records where the value of a particular column falls within a certain range).

B-tree indexes are also good for sorting data. Examples of file formats that use B-tree indexes include `SQLite databases` and `NTFS file systems`.

## Hash index
This type of index is designed for very `fast lookups` based on a `specific key value`.

Hash indexes are commonly used in `in-memory databases` and `caches`.

Examples of file formats that use hash indexes include the `Windows Registry` and some `DNS servers`.

## Bitmap index
This type of index is designed for situations where you have a large number of boolean attributes that need to be queried. 

Bitmap indexes store a bit vector for each attribute value, allowing for very fast boolean operations (e.g., AND, OR, NOT).

Examples of file formats that use bitmap indexes include `Apache` `Lucene` and `PostgreSQL databases`.

## Full-text index
This type of index is designed for efficiently `searching for text-based data`, such as `documents` or `web pages`.

Full-text indexes typically use techniques such as `stemming` and `stopword removal` to improve search results.

Examples of file formats that use full-text indexes include `Apache Solr` and `Elasticsearch`.

## Spatial index
This type of index is designed for efficiently querying data that has a spatial component, such as `maps` or `GPS data`.

Examples of file formats that use spatial indexes include `GeoJSON` and `Shapefiles`.

Some file formats may use a combination of these index types to optimize performance.

For example, `Pug` is a template engine for `Node.js` that uses a combination of `B-tree` and `hash` indexes in its compiled templates to `speed up rendering`.

Pug templates are typically saved with the file extension `.pug`.