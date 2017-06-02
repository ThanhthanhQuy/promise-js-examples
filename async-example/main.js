'use strict';

let step = 1;
let timeExecute = 0;
let countTimeExecuteInterval;

countTimeExecuteInterval = setInterval(countTimeExecute, 1);

function countTimeExecute() {
    timeExecute++;
}

getJson('story.json')
    .then(function (story) {
        addHtmlToPage(story.heading);

        // load sync
        return story.chapterUrls.reduce(function (chain, chapterUrl) {
            // Once the last chapter's promise is done…
            return chain
                .then(function () {
                    // …fetch the next chapter
                    console.log(step + '.', 'fetch the next chapter: ' + chapterUrl);
                    step++;
                    return getJson(chapterUrl);
                })
                .then(function (chapter) {
                    // and add it to the page
                    console.log(step + '.', 'add it to the page: ' + chapterUrl);
                    step++;
                    addHtmlToPage(chapter.html);
                });
        }, Promise.resolve());
        // end load sync
    })
    .then(function () {
        console.log('----------------');
        console.log('All done');
        console.log('Time: ', timeExecute);
        clearInterval(countTimeExecuteInterval);

        // And we're all done!
        addTextToPage("All done");
    })
    .catch(function (err) {
        // Catch any error that happened along the way
        addTextToPage("Argh, broken: " + err.message);
    })
    .then(function () {
        // Always hide the spinner
        document.querySelector('.spinner').style.display = 'none';
    });

function handleHtmlChapter(chapterUrl) {
    return new Promise((resolve, reject) => {
        getJson(chapterUrl).then(chapter => {
            console.log('Load chapter', chapter.chapter);
            addHtmlToPage(chapter.html);
            resolve();
        });
    })
}


// start parallel

// let addChapterTextPromises = [];
// for (let chapter of story.chapterUrls) {
//     let handleChapterPromise = handleHtmlChapter(chapter);
//     addChapterTextPromises.push(handleChapterPromise);
// }
//
// return Promise.all(addChapterTextPromises);

// end parallel