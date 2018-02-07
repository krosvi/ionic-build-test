#!/usr/bin/env node

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This hook is used to interpolate values in static resources such as config.xml before build.
//
// Following files should be setup in project root directory:
//  - "config.json" with interpolation details for each target environment, for instance
//    {
//      "scope": [
//        "config.xml"
//      ],
//      "dev": {
//        "name": "Slate Mobile (DEV)"
//      },
//      "ci": {
//        "name": "Slate Mobile (CI)"
//      },
//      ...
//    }
//    Note! "scope" section describes which resources should be processed against specified interpolation config
//
//  - "version" simple text file with application version such as "1.2.3.4"
//
//  The scope files will be analyzed and property names specified in the interpolation config will be substituted.
//  The substitution marker must be property name surrounded with double brackets, for instance
//    {{name}} => "Slate Mobile (DEV)"
//
//  The application version is a predefined substitution marker,
//    {{version}} => "1.2.3.4"
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var fs = require('fs');
var path = require('path');
var process = require('process');

const hookName = 'InterpolateStaticResourcesHook';
const interpolationDataFileName = "config.json";
const versionFileName = "version";

var rootdir = '';//process.argv[2];
console.warn('[' + hookName + '] ' + 'Run interpolation ...');

//Compute current target environment
var target = "dev";
if (process.env.TARGET) {
  target = process.env.TARGET;
}
console.info('[' + hookName + '] ' + 'Target environment - "' + target + '"');

//Load interpolation data
var interpolationDataFile = path.join(rootdir, interpolationDataFileName);
var interpolationData = {};
if (fs.existsSync(interpolationDataFile)) {
  try {
    interpolationData = JSON.parse(fs.readFileSync(interpolationDataFile, 'utf8'));
    console.info('[' + hookName + '] ' + 'Interpolation data has been loaded from "' + interpolationDataFile + '" successfully.');
  } catch (err) {
    console.error('[' + hookName + '] ' + 'Interpolation data file "' + interpolationDataFile + '" is not valid! ' + err);
    process.exit(1);
  }
}
else {
  console.error('[' + hookName + '] ' + 'Interpolation data file "' + interpolationDataFile + '" was not found!');
  process.exit(1);
}

//Resolve target environment interpolation data
var targetInterpolationData = interpolationData[target];
if (!targetInterpolationData) {
  console.error('[' + hookName + '] ' + 'Target environment declaration was not found in the interpolation data file!');
  process.exit(1);
}

//Resolve interpolation scope
var interpolationScope = interpolationData.scope;
if (!interpolationScope) {
  console.error('[' + hookName + '] ' + 'Scope declaration was not found in the interpolation data file!');
  process.exit(1);
}

//Load build version data
var buildVersionDataFile = path.join(rootdir, versionFileName);
var buildVersion = '';
if (fs.existsSync(buildVersionDataFile)) {
  try {
    buildVersion = fs.readFileSync(buildVersionDataFile, 'utf8').trim();
    console.info('[' + hookName + '] ' + 'Build version (' + buildVersion + ') has been loaded from "' + buildVersionDataFile + '" successfully.');
  } catch (err) {
    console.error('[' + hookName + '] ' + 'Build version file "' + buildVersionDataFile + '" is not valid! ' + err);
    process.exit(1);
  }
}
else {
  console.error('[' + hookName + '] ' + 'Build version file "' + buildVersionDataFile + '" was not found!');
  process.exit(1);
}
if (!targetInterpolationData.version) {
  targetInterpolationData.version = buildVersion;
} else {
  console.error('[' + hookName + '] ' + 'Target environment declaration already contains "version" key with value "' + targetInterpolationData.version + '"!');
  process.exit(1);
}

//Perform interpolation
interpolationScope.forEach(function (val, index, array) {
  var fileToInterpolate = path.join(rootdir, val);
  if (!fs.existsSync(fileToInterpolate)) {
    console.error('[' + hookName + '] ' + 'File to interpolate "' + fileToInterpolate + '" was not found!');
    process.exit(1);
  }

  var toInterpolate = fs.readFileSync(fileToInterpolate, 'utf8');

  Object.keys(targetInterpolationData).forEach(function (key) {
    toInterpolate = toInterpolate.replace(new RegExp('\{\{' + key + '\}\}', "g"), targetInterpolationData[key]);
  });
  fs.writeFileSync(fileToInterpolate, toInterpolate, 'utf8');

  console.info('[' + hookName + '] ' + 'Processed file "' + fileToInterpolate + '"');
});

console.warn('[' + hookName + '] ' + 'Complete interpolation successfully.');
