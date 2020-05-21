// decomment also added
const headerComment = require('gulp-header-comment');
const gulp = require('gulp'); 


const htmlfile = 
`Copyright © 2019 Say Yes to Education.
All rights reserved.`


gulp.src(['./src/app/**/*.ts', '!./src/app/first/second/**/*.ts'])
.pipe(headerComment(htmlfile))
.pipe(gulp.dest('./src/app'));



  