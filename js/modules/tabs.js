//Tabs
function tabs() {
    const tabs = document.querySelectorAll('.tabcontent');
    const buttons = document.querySelectorAll('.tabheader__item');

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            clearActiveDescriptions();
            tabs.forEach((tab) => {
                if (tab.getAttribute('tab') === btn.getAttribute('tab')) {
                    tab.classList.add('active', 'fade');
                    btn.classList.add('active', 'fade');
                }
            });
        });
    });

    function clearActiveDescriptions() {
        tabs.forEach((tab) => {
            buttons.forEach((btn) => {
                btn.classList.remove('active', 'fade');
                tab.classList.remove('active', 'fade');
            });
        });
    }
}

export default tabs;