
function funcIndex(){
    document.querySelector('.head-nav-mobile').addEventListener('click', ()=>{
        document.getElementById('menu-mobile').style.cssText = `height: 100vh; transition: all 1s`
        document.getElementById('close-mobile').style.cssText = `display: inline; transition: all 1.2s`
    })
    
    document.getElementById('close-mobile').addEventListener('click', ()=>{
        document.getElementById('menu-mobile').style.cssText = `height: 0vh; transition: all 1s`
        document.getElementById('close-mobile').style.cssText = `display: none; transition: all 1.2s`
    })
}