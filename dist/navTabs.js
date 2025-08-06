const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');

        // Atur tombol
        tabButtons.forEach(btn => {
            btn.classList.remove('bg-blue-600', 'text-white', 'shadow-lg');
            btn.classList.add('bg-white', 'text-gray-600', 'hover:bg-gray-50');
        });
        button.classList.remove('bg-white', 'text-gray-600', 'hover:bg-gray-50');
        button.classList.add('bg-nightNavy', 'text-white', 'shadow-lg');

        // Atur konten
        tabContents.forEach(content => {
            if (content.id === targetTab) {
                content.classList.remove('hidden');
                content.classList.add('block');
            } else {
                content.classList.remove('block');
                content.classList.add('hidden');
            }
        });
    });
});
