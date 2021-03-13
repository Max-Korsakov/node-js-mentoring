import { pipeline } from 'stream';
import fs from 'fs';
import path from 'path'
import csv from 'csvtojson';



function mapCsvToJson(){
    const dirPath = path.join(path.resolve(), './csv/');
    pipeline(
      fs.createReadStream(dirPath + 'input.csv'),
      csv(),
      fs.createWriteStream(dirPath + 'csv.txt'),
      log
      )
}

function log(err){
    if (err) {
        console.error('Pipeline failed.', err);
      } else {
        console.log('Pipeline succeeded.');
    }
}

mapCsvToJson()
