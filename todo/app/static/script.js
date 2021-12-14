document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#add').onclick = () =>  {
        const task = document.querySelector('#task').value;
        const ol = document.createElement('ol');
        ol.innerHTML = task;

        document.querySelector('#Tasks').append(ol);        
        document.querySelector('#task').value = '';
        return false;
    };
    document.querySelector('#clear').onclick = () => {
        document.deleteElement('ul');
    };
});