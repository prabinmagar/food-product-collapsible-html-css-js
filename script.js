const collapsibleBtns = document.querySelectorAll('.collapsible-icon');
const collapsibleContents = document.querySelectorAll('.content');

collapsibleBtns.forEach((btn, btnIdx) => {
    btn.addEventListener('click', () =>{
        let icon = btn.firstElementChild;
        if(icon.classList.contains('fa-chevron-down')){
            icon.className = 'fa fa-chevron-up';
            collapsibleContents.forEach((content, contentIdx) => {
                if(btnIdx == contentIdx){
                    content.classList.add('content-show');
                }
            })
        } else if(icon.classList.contains('fa-chevron-up')){
            icon.className = 'fa fa-chevron-down';
            collapsibleContents.forEach((content, contentIdx) => {
                if(btnIdx == contentIdx){
                    content.classList.remove('content-show');
                }
            });
        }
    })
});