import { Lens } from './lens.mjs';

const lens = new Lens();

lens.scanByURL('https://cdn.logojoy.com/wp-content/uploads/20230801150127/Backrub-logo-1996.jpg')
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err);
    });
