var fs = require('fs');
var path = require('path');

function traverseDir(path, finishCb, fileArr, ignoreFileArr, originPath) {
  fileArr = fileArr || [];
  ignoreFileArr = ignoreFileArr || [];
  originPath = originPath || [];
  fs.readdir(path, function (err, files) {
    if (err) {
      console.log('error:\n', err);
      return;
    }
    let count = files.length;
    let trackCount = 0;
    let singleFinish = function () {
      trackCount += 1;
      checkIsDone();
    };
    let doneCb = function () {
      finishCb(fileArr);
    };
    let checkIsDone = function () {
      if (trackCount === count) {
        doneCb();
      }
    };
    if (count === 0) {
      doneCb();
    } else {
      files.forEach(function (file, index) {
        let filePath = path + '/' + file;
        fs.stat(filePath, function (err, stat) {
          if (err) {
            console.log(err);
            return;
          }
          let validFileName = filePath.substr(originPath.length + 1);

          if (ignoreFileArr.indexOf(validFileName) > -1) {
            trackCount += 1;
            checkIsDone();
          } else {
            if (stat.isDirectory()) {
              traverseDir(filePath, singleFinish, fileArr, ignoreFileArr, originPath);
            } else {
              let tmpArr = file.split('.');
              if (tmpArr.length > 1 && tmpArr.pop() === 'md') {
                fileArr.push(`'/${validFileName}'`);
              }
              trackCount += 1;
              checkIsDone();
            }
          }
        });
      });
    }
  });
}

function replacePath() {
  const rootPath = path.join(__dirname);
  let indexHtml = fs.readFileSync(path.join(rootPath, 'index.html'), { encoding: 'utf-8' });
  const finishCb = function (fileArr) {
    const replacedHtml = indexHtml.replace(/(\/\*gulp\*\/paths:)(.*)/, `$1 [${fileArr}],`)
    fs.writeFileSync(path.join(rootPath, 'index.html'), replacedHtml)
  };

  traverseDir(rootPath, finishCb, [], ['project_relevance.md', '_sidebar.md', '_navbar.md'], rootPath)
}

replacePath()