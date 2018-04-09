const gulp = require("gulp");

gulp.src("*.js*").on("data", function(chunk) {
    console.log(chunk.path);
});
