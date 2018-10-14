const gulp = require("gulp")
const browserSync = require("browser-sync").create()

const paths = {
    src:"src/",
    tmp:"tmp/"
}
//server logic
gulp.task("start-server",()=>{
    browserSync.init({
        server:{
            baseDir: "tmp/"
        }
    })
})

gulp.task("reload-browser",(done)=>{
    browserSync.reload();
    done();
})

//copying changes from src/ to tmp/
gulp.task("copy-src-to-tmp",()=>{
    return gulp.src([paths.src+"**/*"])
        .pipe(gulp.dest(paths.tmp))
})
//default task execution
gulp.task("default",gulp.parallel("start-server",()=>{
    gulp.watch("src/**/*.{js,css,html,csv}",gulp.series("reload-browser","copy-src-to-tmp"))
}))