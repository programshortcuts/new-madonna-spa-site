// drop-down.js
let lastClickedDrop 
export function initDropDown() {
    const dropDowns = document.querySelectorAll('.drop-down')
    const downs = document.querySelectorAll('.downs')
    // const sectionTitles = document.querySelectorAll('.section-title')
    dropDowns.forEach(el => {
        // SUPER IMPORTANT 
        if(el.classList.contains('service-title')){
            const service = el.closest('.service')
            const downs = service.querySelector('.downs')
            downs.classList.add('hide')

        }
        el.removeEventListener('click', toggleContent) // ✅ prevent stacking
        el.addEventListener('click', toggleContent)
    })
    // sectionTitles.forEach(el => {
    //     // SUPER IMPORTANT 
    //     el.removeEventListener('click', toggleContent) // ✅ prevent stacking
    //     el.addEventListener('click', toggleContent)
    // })
    function toggleContent(e) {
        e.preventDefault()
        e.stopPropagation()
        
        const catTitle = e.target.closest('.cat-title')
        const productTitle = e.target.closest('.products-title')
        const sectionTitleDropDown = e.target.closest('.section-title.drop-down')
        const serviceHomeDropDown = e.target.closest('.service-title.drop-down')
// 🟣 PRODUCT DROPDOWN
        if (productTitle) {
            const productsContainers = productTitle.closest('.products')
            if (!productsContainers) return

            const downs = productsContainers.querySelector('.products-content.downs')
            if (!downs) return
            downs.classList.toggle('hide')

            return
        }
        // 🟣 CAT DROPDOWN
        if (catTitle) {
            const container = e.target.closest('.cat')
            console.log(container)
            if (!container) return

            const downs = container.querySelector('.products-containers.downs')

            console.log(downs)
            if (!downs) return
            downs.classList.toggle('hide')

            return
        }
        // 🔵 SECTION DROPDOWN
        if (sectionTitleDropDown) {
            const section = sectionTitleDropDown.closest('section')
            console.log(section)
            if (!section) return
            const downs = section.querySelector('.downs')
            if (!downs) return

            
            downs.classList.toggle('hide')
            lastClickedDrop = e.target
            return
        }
        if (serviceHomeDropDown) {
            const service = serviceHomeDropDown.closest('.service') 
                
            
            if (!service) return
            // if(!service.classList.contains('drop-down')) return
            const downs = service.querySelector('.downs')
            if (!downs) return

            // if(e.target === lastClickedDrop){
            //     downs.classList.toggle('hide')
            // } else {
            //     hideAllDowns()
            // }
            downs.classList.toggle('hide')
            lastClickedDrop = e.target
            return
        }
    }
    
    function hideAllDowns(){
        downs.forEach(el => {
            el.classList.add('hide')
        })
    }
    function hideEls(els){
        els.forEach(el =>{
            if(!el.classList.contains('hide')){
                el.classList.add('hide')               
            }
        })
    }
}