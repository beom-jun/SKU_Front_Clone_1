document.addEventListener('DOMContentLoaded', function() {
    var footmainButton = document.getElementById('mainButton');
    var footselect = document.querySelectorAll('.main-site select'); // 변경: querySelector -> querySelectorAll


    if (footmainButton) {
        footmainButton.addEventListener('click', function() {
            footmainButton.style.backgroundColor = 'black';
            footselect.forEach(function(select) { // forEach를 사용하여 각 select 요소에 접근
                select.style.color = 'white';
            });
        });
    } else {
        console.error('footmainButton not found');
    }
/* 배너 */
    const scrollMenu = document.getElementById('scrollMenu');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    let scrollInterval;
    let isPaused = false;

    prevBtn.addEventListener('click', () => {
        scrollMenu.scrollBy({ left: -200, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        scrollMenu.scrollBy({ left: 200, behavior: 'smooth' });
    });

    pauseBtn.addEventListener('click', () => {
        if (isPaused) {
            startScrolling();
            pauseBtn.textContent = '❚❚';
        } else {
            stopScrolling();
            pauseBtn.textContent = '▶';
        }
        isPaused = !isPaused;
    });

    function startScrolling() {
        scrollInterval = setInterval(() => {
            scrollMenu.scrollBy({ left: 2, behavior: 'smooth' });
            if (scrollMenu.scrollLeft + scrollMenu.clientWidth >= scrollMenu.scrollWidth) {
                scrollMenu.scrollLeft = 0;
            }
        }, 50);
    }

    function stopScrolling() {
        clearInterval(scrollInterval);
    }

    startScrolling();
});
