/**
 * config file for local development
 */

'use strict';

module.exports = {
  couchbase: {
    endpoint: "couchbase://couchbase:8091",
    n1ql: "hns_couchbase:8093",
    bucket: "hide_n_seek",
    detailed_errors: 1,
    showQuery: 1
  }
};
