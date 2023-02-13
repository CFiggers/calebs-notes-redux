const fs = require('fs');
const path = require('path');

// Adapted from https://gist.github.com/codeguy/6684588
function generateSlug(str) {
    str = str.replace(/^\s+|\s+$/g, ""); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    let from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    let to = "aaaaeeeeiiiioooouuuunc------";
    for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }

    str = str
        .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
        .replace(/\s+/g, "-") // collapse whitespace and replace by -
        .replace(/-+/g, "-"); // collapse dashes

    return str;
};

function readFiles(dirPath, arrayOfFiles) {
    let files = fs.readdirSync(dirPath)

    arrayOfFiles = arrayOfFiles || []

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = readFiles(dirPath + "/" + file, arrayOfFiles)
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file))
        }
    })

    return arrayOfFiles
}

function makeMDMap(dirPath) {
    const fileExtensions = [".md", ".mdx"]

    let files = []
    
    dirPath.forEach((thisPath) => {
        var theseFiles = readFiles(thisPath)
        theseFiles.forEach((file) => files.push(file))
    })

    return new Map(files
        .filter((filename) => {
            return fileExtensions.includes(path.extname(filename).toLowerCase())
        })
        .map((filename) => {
            let parsedFileName = path.parse(filename)

            let slug = generateSlug(parsedFileName.name);

            relativePath = "./" + filename

            let rawFile = fs.readFileSync(relativePath, "utf-8");

            var parentDir = parsedFileName.dir.split(path.sep).pop()

            return [slug, {
                filename: parsedFileName.name,
                extension: path.extname(filename),
                fullPath: (parsedFileName.dir + (parsedFileName.name === parentDir 
                                                ? "" 
                                                : "/" + parsedFileName.name))
                          .replace("docs/", "")
                          .replace("(", "")
                          .replace(")", "")
                          ,
                slug: slug,
                rawFile: rawFile
            }]
        }))
}

module.exports.readFiles = readFiles;
module.exports.makeMDMap = makeMDMap;
module.exports.generateSlug = generateSlug;