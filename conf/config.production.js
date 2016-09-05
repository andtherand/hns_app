/**
 * config file for local development
 */

'use strict';

module.exports = {
  couchbase: {
    endpoint: "couchbase:8091",
    n1ql: "couchbase:8093",
    bucket: "hide_n_seek",
    detailed_errors: 1,
    showQuery: 1
  }
};
