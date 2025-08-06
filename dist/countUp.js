const animationFrameIds = {};

        // Tambahkan parameter 'symbol' baru
        function animateCountUp(ids, start, end, duration, symbol = '') {
            const targetIds = Array.isArray(ids) ? ids : [ids];

            targetIds.forEach(id => {
                if (animationFrameIds[id]) {
                    cancelAnimationFrame(animationFrameIds[id]);
                }

                const obj = document.getElementById(id);
                if (!obj) {
                    console.warn(`Element with ID "${id}" not found.`);
                    return;
                }

                let startTime = null;

                function easeOutQuad(t) {
                    return t * (2 - t);
                }

                function animate(currentTime) {
                    if (!startTime) startTime = currentTime;
                    const progress = Math.min((currentTime - startTime) / duration, 1);
                    const easedProgress = easeOutQuad(progress);
                    const currentValue = Math.floor(easedProgress * (end - start) + start);
                    
                    // Modifikasi di sini: Tambahkan simbol di depan angka
                    obj.textContent = symbol + currentValue;

                    if (progress < 1) {
                        animationFrameIds[id] = requestAnimationFrame(animate);
                    } else {
                        // Pastikan nilai akhir tepat dan simbol ditambahkan
                        obj.textContent = symbol + end;
                        animationFrameIds[id] = null;
                    }
                }

                animationFrameIds[id] = requestAnimationFrame(animate);
            });
        }

        let scrollTimeout;

        function handleScroll() {
            for (const id in animationFrameIds) {
                if (animationFrameIds[id]) {
                    cancelAnimationFrame(animationFrameIds[id]);
                    animationFrameIds[id] = null;
                }
            }

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                console.log("Scroll detected, animating count up for all counters...");
                // Panggil dengan simbol yang berbeda
                animateCountUp('myCounter', 0, 9, 6000, '+'); // Contoh: +1500
                animateCountUp('myCounter2', 0, 10, 2500, '+'); // Contoh: ^2000
                animateCountUp('myCounter3', 0, 3, 1500, '+'); // Tanpa simbol (atau angka desimal bisa diatur jika perlu)
            }, 150);
        }

        document.addEventListener('DOMContentLoaded', () => {
            // Inisialisasi awal dengan simbol
            animateCountUp('myCounter', 0, 9, 5000, '+');
            animateCountUp('myCounter2', 0, 10, 4000, '+');
            animateCountUp('myCounter3', 0, 3, 6000, '+'); // Misalnya untuk rating, tanpa simbol depan
        });

  