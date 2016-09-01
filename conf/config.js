/**
 * config file for local development
 */

'use strict';

module.exports = {
  couchbase: {
    endpoint: "localhost:8091",
    n1ql: "127.0.0.1:8093",
    bucket: "hide_n_seek",
    detailed_errors: 1,
    showQuery: 1
  }
};
