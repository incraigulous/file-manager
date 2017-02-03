//Dependencies
import Vue from 'vue'
import fileManager from '../../main'
import getParam from '../../utilities/getParam'
import bus from '../../bus'
import fileFactory from '../../factories/file'

//Demo Elements
const scratchPad = document.getElementById('scratch-pad')
const openButton = document.getElementById('open-btn')
const closeButton = document.getElementById('close-btn')
const toggleButton = document.getElementById('toggle-btn')

//Demo actions
const show = () => bus.$emit('manager:show')
const hide = () => bus.$emit('manager:hide')
const toggle = () => bus.$emit('manager:toggle')

if (getParam('on')) {
    bus.$on(getParam('on'), (component) => {
        scratchPad.className = 'visible'
        scratchPad.textContent = JSON.stringify(component.input)
    })
}

//Demo Listeners
openButton.addEventListener('click', show);
closeButton.addEventListener('click', hide);
toggleButton.addEventListener('click', toggle);

//Init the component in a fresh view instance
const initDemo = function(files) {
    new Vue({
        components: {fileManager},
        data: {
            files
        }
    }).$mount('#demo');
}

let state = getParam('state');

switch (getParam('state')) {
    case 'no-files':
        initDemo({})
        break;
    default:
        initDemo(fileFactory.buildList(100))
}