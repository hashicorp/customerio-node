/**
 * Copyright IBM Corp. 2014, 2018
 * SPDX-License-Identifier: MIT
 */

var CIO = require('../lib/customerio-node');
var siteId = require('./config').siteId;
var apiKey = require('./config').apiKey;
var customerId = require('./config').customerId;
var cio = new CIO(siteId, apiKey);

cio.destroy(customerId);
