"use strict";

var _stream = require("stream");

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _csvtojson = _interopRequireDefault(require("csvtojson"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function mapCsvToJson() {
  var dirPath = _path["default"].join(_path["default"].resolve(), './csv/');

  (0, _stream.pipeline)(_fs["default"].createReadStream(dirPath + 'input.csv'), (0, _csvtojson["default"])({
    ignoreColumns: /Amount/
  }), _fs["default"].createWriteStream(dirPath + 'csv.txt'), log);
}

function log(err) {
  if (err) {
    console.error('Pipeline failed.', err);
  } else {
    console.log('Pipeline succeeded.');
  }
}

mapCsvToJson();