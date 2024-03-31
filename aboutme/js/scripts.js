        // Fungsi untuk menyembunyikan elemen sebelumnya saat melakukan scroll ke bawah dan elemen berikutnya saat melakukan scroll ke atas
        function toggleSlideVisibility(event) {
            const currentSlide = document.querySelector('.visible');
            if (event.deltaY > 0 && currentSlide.nextElementSibling) {
                currentSlide.classList.remove('visible');
                currentSlide.classList.add('hidden');
                currentSlide.nextElementSibling.classList.remove('hidden');
                currentSlide.nextElementSibling.classList.add('visible');
            } else if (event.deltaY < 0 && currentSlide.previousElementSibling) {
                currentSlide.classList.remove('visible');
                currentSlide.classList.add('hidden');
                currentSlide.previousElementSibling.classList.remove('hidden');
                currentSlide.previousElementSibling.classList.add('visible');
            }
        }

        // Event listener untuk scroll mouse
        window.addEventListener('wheel', toggleSlideVisibility);

        // Pengecekan awal jika elemen pertama terlihat saat halaman dimuat
        window.addEventListener('DOMContentLoaded', () => {
            document.getElementById('utama').classList.add('visible');
        });
