document.addEventListener('DOMContentLoaded', function() {
    const primaryBookmarks = document.querySelectorAll('h2:nth-of-type(1) + p > a');
    const secondaryBookmarks = document.querySelectorAll('h2:nth-of-type(2) + p > a');

    console.log('Primary Bookmarks:');
    primaryBookmarks.forEach(bookmark => {
        console.log(bookmark.textContent, '-', bookmark.href);
    });

    console.log('Secondary Bookmarks:');
    secondaryBookmarks.forEach(bookmark => {
        console.log(bookmark.textContent, '-', bookmark.href);
    });
});