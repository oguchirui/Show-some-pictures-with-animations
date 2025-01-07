const items = document.querySelectorAll('.img-item');

for (let i = 0; i < items.length; i++) {
    const keyframe = {
        opacity: [0, 1],
        rotate: ['5deg', 0],
        scale: [1.1, 1],
        filter: ['blur(20px)', 'blur(0)'],
    };

    const options = {
        duration: 600,
        fill: 'forwards',
        delay: i * 300,
    };

    items[i].animate(keyframe, options);
}