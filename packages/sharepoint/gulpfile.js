'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
const typescriptBuild = require('@microsoft/gulp-core-build-typescript');
typescriptBuild.tscCmd.mergeConfig({
  overridePackagePath: '../../node_modules/typescript'
});
typescriptBuild.tslintCmd.mergeConfig({
  overridePackagePath: '../../node_modules/tslint'
});
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

build.initialize(gulp);
