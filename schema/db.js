/**
 * Created by my on 29.08.16.
 */
/**
 * the db file serves as the default dependency when interacting with the data source
 * in this specific case a couchbase-server.
 */

// Require dependencies
var config = require('../conf/config');

if (process.env.NODE_ENV == 'staging') {
 config = require('../conf/config.staging');
 console.log('---- i am staging' + config.couchbase.endpoint);
}

var endpoint = config.couchbase.detailed_errors === 1 ? config.couchbase.endpoint + '?detailed_errcodes=1' : config.couchbase.endpoint;
var bucketName = config.couchbase.bucket;

var couchbase = require('couchbase');
var ottoman = require('ottoman');

var cluster = new couchbase.Cluster(endpoint);
var bucket = cluster.openBucket(bucketName);

bucket.operationTimeout = 120 * 1000;

bucket.on('error', function(err) {
  console.log(err);
});

// let ottoman know of the bucket we want to use
ottoman.bucket = bucket;

// import the schemas
require('./models/settings');
// ... more to come

// build the necessary indices to function
ottoman.ensureIndices(function(err) {
  if (err) {
    return console.error(err);
  }
});
