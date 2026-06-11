// letter-nav.js

import { letterNav } from "./letter-nav.js";



export function initKeydboardNav({ container = document } = {}) {
    

    document.addEventListener('keydown', (e) => {
        
        
        letterNav({container  , e})
        
    });
}
