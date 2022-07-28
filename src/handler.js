// const { response, request }  = require('express/lib');
// const { request } = require('express')

function whoAmI (req, res) {
  // Setup
  const header = {};
  const rawHeaders = req.rawHeaders;

  // Parsing data from rawHeader into header object
  for (let i = 0; i < rawHeaders.length; i += 2){
    header[rawHeaders[i]] = rawHeaders[i+1]
  }

  // Wrap result as Object
  const result = {
    ipaddress: req.ip,
    language: header['Accept-Language'],
    software: header['User-Agent']
  }

  // Returning result object as JSON
  res.json(result)
};

module.exports = { whoAmI };