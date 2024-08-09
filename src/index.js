import './styles/app.scss';

import {Sortable, Plugins} from '@shopify/draggable';

const containers = document.querySelectorAll('.panban-content');

const sortable = new Sortable(containers, {
    draggable: `.card`,
    mirror: {
        constrainDimensions: true,
    },
    plugins: [Plugins.ResizeMirror],
});

document.querySelector('.add').addEventListener('click', () => {
    const modal = document.querySelector('.modal#new-modal');
    modal.classList.add('active');
    document.querySelector('.modal #title').focus();
});


document.querySelector('#close-modal').addEventListener('click', () => {
    const modal = document.querySelector('.modal#new-modal');
    modal.classList.remove('active');
    document.querySelector('.modal #title').value = '';
});

document.querySelector('#save-modal').addEventListener('click', () => {
    const modal = document.querySelector('.modal#new-modal');
    modal.classList.remove('active');


    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = '<p class="heading">' + document.querySelector('.modal #title').value + '</p>';
    document.querySelector('.panban-content').appendChild(card);

    document.querySelector('.modal #title').value = '';
});