// const { response, request }  = require('express/lib');
// const { request } = require('express')

function whoAmI (req, res) {
  const header = {};
  const rawHeaders = req.rawHeaders;
  for (let i = 0; i < rawHeaders.length; i += 2){
    header[rawHeaders[i]] = rawHeaders[i+1]
  }

  const result = {
    ipaddress: header['Host'],
    language: header['Accept-Language'],
    software: header['User-Agent']
  }

  console.log(result)
  res.json(result)
};

module.exports = { whoAmI };