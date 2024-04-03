document$.subscribe(function() {
    let codeBlocks = document.querySelectorAll('.highlight > pre > .md-code__nav')
    
    for (let codeBlock of codeBlocks) {
        let code = codeBlock.closest('pre').querySelector('.md-code__content').textContent // @todo
        let button = Object.assign(document.createElement('a'), {
            className: 'md-code__button',
            title: 'Run',
            href: `https://playground.ponylang.io/?code=${encodeURIComponent(code)}`,
            target: '_blank',
        })
        button.dataset.mdType = 'run'
        codeBlock.appendChild(button)
    }
})