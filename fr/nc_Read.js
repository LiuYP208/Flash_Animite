const fs = require('fs');
const NetCDFReader = require('netcdfjs');

// http://www.unidata.ucar.edu/software/netcdf/examples/files.html
const data = fs.readFileSync('./data/test.NC');

var reader = new NetCDFReader(data); // read the header
reader.getDataVariable('FR'); // go to offset and read it