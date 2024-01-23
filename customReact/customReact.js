function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
        if (prop === 'children') continue
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "gttps://google.com",
        target: '_blank',
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)