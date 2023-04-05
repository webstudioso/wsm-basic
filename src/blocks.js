export const IFrameX = {
    category: 'Basic',
    selectable: true,
    label: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="244.53 185.28 22 18">
          <path fill="rgb(99, 102, 241)" d="M 245.534 202.281 L 265.534 202.281 L 265.534 186.281 L 245.534 186.281 L 245.534 202.281 Z M 244.534 202.281 L 244.534 186.281 C 244.534 185.729 244.982 185.281 245.534 185.281 L 265.534 185.281 C 266.086 185.281 266.534 185.729 266.534 186.281 L 266.534 202.281 C 266.534 202.834 266.086 203.281 265.534 203.281 L 245.534 203.281 C 244.982 203.281 244.534 202.834 244.534 202.281 Z"/>
          <text style="fill: rgb(99, 102, 241); font-family: Arial, sans-serif; font-size: 4px; white-space: pre;" x="245.733" y="195.579">&lt; IFrame &gt;</text>
          <text style="white-space: pre; fill: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 1.9px;" x="258.865" y="192.874"> </text>
        </svg>
    `,
    content: `<iframe style="padding: 20px"></iframe>`,
}

export const IFrameXDefinition = {
    isComponent: el => el.tagName === 'IFRAME',
    model: {
        defaults: {
            type: 'iframex',
            traits: [{ type: 'text', label: 'src', name: 'src' }]
        }
    }
}

export const Image = {
    category: 'Basic',
    selectable: true,
    activate: true,
    label: `
        <svg viewBox="0 0 24 24">
            <path fill="rgb(99, 102, 241)" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />
        </svg>
    `,
    content: {
        style: { color: 'black' },
        type: 'image',
    }
}

export const Video = {
    category: 'Basic',
    selectable: true,
    label: `
        <svg viewBox="0 0 24 24">
            <path fill="rgb(99, 102, 241)" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
        </svg>
    `,
    content: {
        type: 'video',
        src: 'img/video2.webm',
        style: {
            height: '350px',
            width: '615px'
        }
    }
}

export const Map = {
    category: 'Basic',
    selctable: true,
    label: `
        <svg viewBox="0 0 24 24">
            <path fill="rgb(99, 102, 241)" d="M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z" />
        </svg>
    `,
    content: {
      type: 'map',
      style: { height: '350px' }
    }
}

export const Link = {
    category: 'Basic',
    selectable: true,
    label: `
        <svg viewBox="0 0 24 24">
            <path fill="rgb(99, 102, 241)" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" />
        </svg>`,
    content: {
        type: 'link',
        content: 'Link',
        style: { color: '#d983a6' }
    }
}

export const Text = {
    category: 'Basic',
    selectable: true,
    label: `
        <svg viewBox="0 0 24 24">
            <path fill="rgb(99, 102, 241)" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
        </svg>
    `,
    content: {
        type: 'text',
        content: 'Insert your text here',
        style: { padding: '10px' },
    }
}