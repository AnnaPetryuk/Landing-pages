window.addEventListener('load', function() {
    const anchors = document.querySelectorAll('.sidebar__menu-item');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 
            const blockID = anchor.getAttribute('href').substr(1);
      
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    let menu = document.querySelector('.sidebar__menu');
    
    menu.addEventListener('click', function(e) { 
        if (e.target.tagName.toLowerCase() != 'a') return;
        [].forEach.call(menu.querySelectorAll('a'), function(item) {
            item.classList.remove('active');
        });
        e.target.classList.add('active');
    });
})