document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-container');
    const startInput = document.getElementById('start');
    const endInput = document.getElementById('end');
   

    function generateImages(start, end) {
        imageContainer.innerHTML = ''; // Clear existing images
        for (let i = start; i <= end; i++) {
            const imageItem = document.createElement('div');
            imageItem.className = 'image-item';

            const img = document.createElement('img');
            img.src = 'image/ptn.png'; // Replace with your image path
            img.alt = `Image ${i}`;

            const span1 = document.createElement('span');
            span1.className = 'number1';
            span1.textContent = i;

            const span2 = document.createElement('span');
            span2.className = 'number2';
            span2.textContent = i;

            imageItem.appendChild(img);
            imageItem.appendChild(span1);
            imageItem.appendChild(span2);
            imageContainer.appendChild(imageItem);
        }
    }

    startInput.addEventListener('input', () => {
        const start = parseInt(startInput.value);
        const end = parseInt(endInput.value);
        if (!isNaN(start) && !isNaN(end) && start <= end) {
            generateImages(start, end);
        }
    });

    endInput.addEventListener('input', () => {
        const start = parseInt(startInput.value);
        const end = parseInt(endInput.value);
        if (!isNaN(start) && !isNaN(end) && start <= end) {
            generateImages(start, end);
        }
    });
});
