// gatsby-node.js

//const createFilePath = require (`gatsby-source-filesystem`);

exports.createPages = require('./gatsby-node/create-pages'); 
exports.onCreateNode = require('./gatsby-node/on-create-node');

