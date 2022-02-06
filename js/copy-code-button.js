function addCopyButtons(clipboard) {
    var copyIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 460"><path d="M425.934 0H171.662c-18.122 0-32.864 14.743-32.864 32.864v77.134h30V32.864A2.868 2.868 0 01171.662 30h254.272a2.868 2.868 0 012.864 2.864v254.272a2.868 2.868 0 01-2.864 2.865h-74.729v30h74.729c18.121 0 32.864-14.743 32.864-32.865V32.864C458.797 14.743 444.055 0 425.934 0z"/><path d="M288.339 139.998H34.068c-18.122 0-32.865 14.743-32.865 32.865v254.272C1.204 445.257 15.946 460 34.068 460H288.34c18.122 0 32.865-14.743 32.865-32.864V172.863c.001-18.122-14.744-32.865-32.866-32.865zM288.341 430H34.068a2.868 2.868 0 01-2.865-2.864V172.863a2.868 2.868 0 012.865-2.865H288.34a2.868 2.868 0 012.865 2.865v254.273h.001a2.868 2.868 0 01-2.865 2.864z"/></svg>';
    document.querySelectorAll('.highlight td:last-of-type > pre > code').forEach(function (codeBlock) {
        var button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerHTML = copyIcon;

        button.addEventListener('click', function () {
            clipboard.writeText(codeBlock.innerText).then(function () {
                /* Chrome doesn't seem to blur automatically,
                   leaving the button in a focused state. */
                button.blur();

                button.innerText = 'Copied!';
                button.classList.add('active');

                setTimeout(function () {
                    button.classList.remove('active');
                    button.innerHTML = copyIcon;
                }, 2000);
            }, function (error) {
                button.innerText = 'Error';
            });
        });

        var pre = codeBlock.parentNode;
        if (pre.parentNode.classList.contains('highlight')) {
            var highlight = pre.parentNode;
            highlight.parentNode.insertBefore(button, highlight);
        } else {
            pre.parentNode.insertBefore(button, pre);
        }
    });
}

if (navigator && navigator.clipboard) {
    console.log('JS asset [0]: Loaded clipboard function (non polyfill)');
    addCopyButtons(navigator.clipboard);
} else {
    console.log('JS asset [0]: Loaded clipboard function (with polyfill)');
    var script = document.createElement('script');
    script.src = '/js/clipboard-polyfill.promise.js';
    script.onload = function() {
        addCopyButtons(clipboard);
    };

    document.body.appendChild(script);
}
