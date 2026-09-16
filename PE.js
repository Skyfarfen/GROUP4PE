const zumbaButton = document.querySelector('.fluttershy-button');
const videoModal = document.querySelector('#videoModal');
const closeModal = document.querySelector('#closeModal');
const continueButton = document.querySelector('#continueButton');
const video = videoModal.querySelector('video');
const topicScreen = document.querySelector('#topicScreen');
const topicCards = document.querySelectorAll('.topic-card');
const prizeGameDeck = document.querySelector('#prizeGameDeck');
const openPrizeGame = document.querySelector('#openPrizeGame');
const closePrizeGame = document.querySelector('#closePrizeGame');
const spinPrize = document.querySelector('#spinPrize');
const slotReels = [
    document.querySelector('#slotReel1'),
    document.querySelector('#slotReel2'),
    document.querySelector('#slotReel3')
];
const slotResult = document.querySelector('#slotResult');
const prizeNote = document.querySelector('#prizeNote');
let prizeSpinning = false;
let prizeSpinTimeouts = [];
const reportModal = document.querySelector('#reportModal');
const closeReportModal = document.querySelector('#closeReportModal');
const reportFrame = document.querySelector('#reportFrame');
const reportModalTitle = document.querySelector('#reportModalTitle');
const mhrDeck = document.querySelector('#mhrDeck');
const PRPDeck = document.querySelector('#PRPDeck');
const closeTopic6Deck = document.querySelector('#closeTopic6Deck');
const topic6Slides = PRPDeck.querySelectorAll('.topic6-slide');
const previousTopic6Slide = document.querySelector('#previousTopic6Slide');
const nextTopic6Slide = document.querySelector('#nextTopic6Slide');
const topic6SlideCounter = document.querySelector('#topic6SlideCounter');
let currentTopic6Slide = 0;
const closeDeck = document.querySelector('#closeDeck');
const deckSlides = mhrDeck.querySelectorAll('.deck-slide');
const previousSlide = document.querySelector('#previousSlide');
const nextSlide = document.querySelector('#nextSlide');
const slideCounter = document.querySelector('#slideCounter');
let currentSlide = 0;
const topic9Deck = document.querySelector('#topic9Deck');
const closeTopic9Deck = document.querySelector('#closeTopic9Deck');
const topic9Slides = topic9Deck.querySelectorAll('.deck-slide');
const previousTopic9Slide = document.querySelector('#previousTopic9Slide');
const nextTopic9Slide = document.querySelector('#nextTopic9Slide');
const topic9SlideCounter = document.querySelector('#topic9SlideCounter');
let currentTopic9Slide = 0;
const topic5Deck = document.querySelector('#topic5Deck');
const closeTopic5Deck = document.querySelector('#closeTopic5Deck');
const topic5Slides = topic5Deck.querySelectorAll('.deck-slide');
const previousTopic5Slide = document.querySelector('#previousTopic5Slide');
const nextTopic5Slide = document.querySelector('#nextTopic5Slide');
const topic5SlideCounter = document.querySelector('#topic5SlideCounter');
let currentTopic5Slide = 0;
const topic1Deck = document.querySelector('#topic1Deck');
const closeTopic1Deck = document.querySelector('#closeTopic1Deck');
const topic1Slides = topic1Deck.querySelectorAll('.deck-slide');
const previousTopic1Slide = document.querySelector('#previousTopic1Slide');
const nextTopic1Slide = document.querySelector('#nextTopic1Slide');
const topic1SlideCounter = document.querySelector('#topic1SlideCounter');
let currentTopic1Slide = 0;
const danDeck = document.querySelector('#danDeck');
const closeDanDeck = document.querySelector('#closeDanDeck');
const danSlides = danDeck.querySelectorAll('.deck-slide');
const previousDanSlide = document.querySelector('#previousDanSlide');
const nextDanSlide = document.querySelector('#nextDanSlide');
const danSlideCounter = document.querySelector('#danSlideCounter');
let currentDanSlide = 0;
const topic7Deck = document.querySelector('#topic7Deck');
const closeTopic7Deck = document.querySelector('#closeTopic7Deck');
const topic7Slides = topic7Deck.querySelectorAll('.deck-slide');
const previousTopic7Slide = document.querySelector('#previousTopic7Slide');
const nextTopic7Slide = document.querySelector('#nextTopic7Slide');
const topic7SlideCounter = document.querySelector('#topic7SlideCounter');
let currentTopic7Slide = 0;
const topic8Deck = document.querySelector('#topic8Deck');
const closeTopic8Deck = document.querySelector('#closeTopic8Deck');
const topic8Slides = topic8Deck.querySelectorAll('.topic8-slide');
const previousTopic8Slide = document.querySelector('#previousTopic8Slide');
const nextTopic8Slide = document.querySelector('#nextTopic8Slide');
const topic8SlideCounter = document.querySelector('#topic8SlideCounter');
let currentTopic8Slide = 0;
const topic3Deck = document.querySelector('#topic3Deck');
const closeTopic3Deck = document.querySelector('#closeTopic3Deck');
const topic3Slides = topic3Deck.querySelectorAll('.deck-slide');
const previousTopic3Slide = document.querySelector('#previousTopic3Slide');
const nextTopic3Slide = document.querySelector('#nextTopic3Slide');
const topic3SlideCounter = document.querySelector('#topic3SlideCounter');
let currentTopic3Slide = 0;
const topic4Deck = document.querySelector('#topic4Deck');
const closeTopic4Deck = document.querySelector('#closeTopic4Deck');
const topic4Slides = topic4Deck.querySelectorAll('.deck-slide');
const previousTopic4Slide = document.querySelector('#previousTopic4Slide');
const nextTopic4Slide = document.querySelector('#nextTopic4Slide');
const topic4SlideCounter = document.querySelector('#topic4SlideCounter');
let currentTopic4Slide = 0;

function openModal() {
    videoModal.classList.add('is-open');
    videoModal.setAttribute('aria-hidden', 'false');
    video.play();
}

function closeVideoModal() {
    videoModal.classList.remove('is-open');
    videoModal.setAttribute('aria-hidden', 'true');
    video.pause();
    video.currentTime = 0;
}

function showTopicScreen() {
    closeVideoModal();
    document.querySelector('.site-header').hidden = true;
    document.querySelector('.page-content').hidden = true;
    topicScreen.hidden = false;
    document.body.classList.add('topic-mode');
}

zumbaButton.addEventListener('click', openModal);
closeModal.addEventListener('click', closeVideoModal);
continueButton.addEventListener('click', showTopicScreen);

topicCards.forEach((topicCard) => {
    topicCard.addEventListener('click', () => {
        const pdfFile = topicCard.dataset.pdf;
        const topicName = topicCard.querySelector('span').textContent;

        if (topicCard.dataset.deck === 'mhr') {
            openDeck();
            return;
        }

        if (topicCard.dataset.deck === 'PRP') {
            openTopic6Deck();
            return;
        }

        if (topicCard.dataset.deck === 'topic9') {
            openTopic9Deck();
            return;
        }

        if (topicCard.dataset.deck === 'topic5') {
            openTopic5Deck();
            return;
        }

        if (topicCard.dataset.deck === 'topic1') {
            openTopic1Deck();
            return;
        }

                if (topicCard.dataset.deck === 'dan') {
            openDanDeck();
            return;
        }

                if (topicCard.dataset.deck === 'topic7') {
            openTopic7Deck();
            return;
        }

        if (topicCard.dataset.deck === 'topic8') {
            openTopic8Deck();
            return;
        }

                if (topicCard.dataset.deck === 'topic3') {
            openTopic3Deck();
            return;
        }

        if (topicCard.dataset.deck === 'topic4') {
            openTopic4Deck();
            return;
        }

        if (pdfFile) {
            reportModalTitle.textContent = topicName;
            reportFrame.src = pdfFile;
            reportModal.classList.add('is-open');
            reportModal.setAttribute('aria-hidden', 'false');
        }
    });
});

function openPrizeGameDeck() {
    prizeGameDeck.classList.add('is-open');
    prizeGameDeck.setAttribute('aria-hidden', 'false');
    slotResult.textContent = 'Ready to spin? 🌷';
}

function closePrizeGameDeck() {
    if (prizeSpinning) return;
    prizeGameDeck.classList.remove('is-open');
    prizeGameDeck.setAttribute('aria-hidden', 'true');
}


function spinPrizeGame() {
    if (prizeSpinning) return;

    prizeSpinning = true;
    spinPrize.disabled = true;
    prizeNote.textContent = "Good luck! 🌸";
    slotResult.textContent = "Spinning...";

    const prizes = [
        {
            name: "Mentos",
            image: "mentos.png",
            value: 0,
            chance: 45,
            min: 1,
            max: 1
        },  
        {
            name: "₱5",
            image: "5peso.png",
            value: 5,
            chance: 40
        },
        {
            name: "₱10",
            image: "10peso.png",
            value: 10,
            chance: 10
        },
        {
            name: "₱20",
            image: "20peso.png",
            value: 20,
            chance: 5
        }
    ];

    function getRandomPrize() {
        const random = Math.random() * 100;

        if (random < 45) {
            return prizes[0];
        } else if (random < 85) {
            return prizes[1];
        } else if (random < 95) {
            return prizes[2];
        } else {
            return prizes[3];
        }
    }

    function getMentosAmount(prize) {
        if (prize.name !== "Mentos") return 1;

        return Math.floor(
            Math.random() * (prize.max - prize.min + 1)
        ) + prize.min;
    }

    function setReelImage(reel, prize) {
        reel.innerHTML = `
            <img 
                src="${prize.image}" 
                class="prize-image" 
                alt="${prize.name}"
            >
        `;
    }

    let finishedReels = 0;
    let totalMoney = 0;
    let wonPrizes = [];

    slotReels.forEach((reel, index) => {

        let spins = 0;
        const maxSpins = 20 + (index * 8);

        const interval = setInterval(() => {

            const randomPrize = getRandomPrize();
            setReelImage(reel, randomPrize);

            spins++;

            if (spins >= maxSpins) {

                clearInterval(interval);

                const finalPrize = getRandomPrize();

                setReelImage(reel, finalPrize);

                totalMoney += finalPrize.value;

                if (finalPrize.name === "Mentos") {
                    const amount = getMentosAmount(finalPrize);
                    wonPrizes.push(`${amount} Mentos`);
                } else {
                    wonPrizes.push(finalPrize.name);
                }

                finishedReels++;

                // All 3 reels finished
                if (finishedReels === 3) {

                    if (totalMoney === 0) {
                        slotResult.textContent =
                            " You got 3 Mentos! Better Luck Next Time :) ";
                    } else {
                        slotResult.textContent =
                            `🎉 You won ₱${totalMoney}! 🎉`;
                    }

                    prizeNote.textContent =
                        `Prizes: ${wonPrizes.join(" • ")}`;

                    prizeSpinning = false;
                    spinPrize.disabled = false;
                }
            }

        }, 100 + (index * 20));
    });
}

openPrizeGame.addEventListener('click', openPrizeGameDeck);
closePrizeGame.addEventListener('click', closePrizeGameDeck);
spinPrize.addEventListener('click', spinPrizeGame);



function updateTopic6Deck() {
    topic6Slides.forEach((slide, index) => {
        slide.classList.toggle('is-active', index === currentTopic6Slide);
    });
    topic6SlideCounter.textContent = `${currentTopic6Slide + 1} / ${topic6Slides.length}`;
    previousTopic6Slide.disabled = currentTopic6Slide === 0;
    nextTopic6Slide.disabled = currentTopic6Slide === topic6Slides.length - 1;
}

function openTopic6Deck() {
    currentTopic6Slide = 0;
    updateTopic6Deck();
    PRPDeck.classList.add('is-open');
    PRPDeck.setAttribute('aria-hidden', 'false');
}

function closeTopic6DeckModal() {
    PRPDeck.classList.remove('is-open');
    PRPDeck.setAttribute('aria-hidden', 'true');
}

function updateDeck() {
    deckSlides.forEach((slide, index) => {
        slide.classList.toggle('is-active', index === currentSlide);
    });
    slideCounter.textContent = `${currentSlide + 1} / ${deckSlides.length}`;
    previousSlide.disabled = currentSlide === 0;
    nextSlide.disabled = currentSlide === deckSlides.length - 1;
}

function openDeck() {
    currentSlide = 0;
    updateDeck();
    mhrDeck.classList.add('is-open');
    mhrDeck.setAttribute('aria-hidden', 'false');
}

function closeDeckModal() {
    mhrDeck.classList.remove('is-open');
    mhrDeck.setAttribute('aria-hidden', 'true');
}
function updateTopic9Deck() {
    topic9Slides.forEach((slide, index) => {
        slide.classList.toggle('is-active', index === currentTopic9Slide);
    });
    topic9SlideCounter.textContent = `${currentTopic9Slide + 1} / ${topic9Slides.length}`;
    previousTopic9Slide.disabled = currentTopic9Slide === 0;
    nextTopic9Slide.disabled = currentTopic9Slide === topic9Slides.length - 1;
}

function openTopic9Deck() {
    currentTopic9Slide = 0;
    updateTopic9Deck();
    topic9Deck.classList.add('is-open');
    topic9Deck.setAttribute('aria-hidden', 'false');
}

function closeTopic9DeckModal() {
    topic9Deck.classList.remove('is-open');
    topic9Deck.setAttribute('aria-hidden', 'true');
}

function updateTopic5Deck() {
    topic5Slides.forEach((slide, index) => {
        slide.classList.toggle('is-active', index === currentTopic5Slide);
    });
    topic5SlideCounter.textContent = `${currentTopic5Slide + 1} / ${topic5Slides.length}`;
    previousTopic5Slide.disabled = currentTopic5Slide === 0;
    nextTopic5Slide.disabled = currentTopic5Slide === topic5Slides.length - 1;
}

function openTopic5Deck() {
    currentTopic5Slide = 0;
    updateTopic5Deck();
    topic5Deck.classList.add('is-open');
    topic5Deck.setAttribute('aria-hidden', 'false');
}

function closeTopic5DeckModal() {
    topic5Deck.classList.remove('is-open');
    topic5Deck.setAttribute('aria-hidden', 'true');
}

function updateTopic1Deck() {
    topic1Slides.forEach((slide, index) => {
        slide.classList.toggle('is-active', index === currentTopic1Slide);
    });
    topic1SlideCounter.textContent = `${currentTopic1Slide + 1} / ${topic1Slides.length}`;
    previousTopic1Slide.disabled = currentTopic1Slide === 0;
    nextTopic1Slide.disabled = currentTopic1Slide === topic1Slides.length - 1;
}

function openTopic1Deck() {
    currentTopic1Slide = 0;
    updateTopic1Deck();
    topic1Deck.classList.add('is-open');
    topic1Deck.setAttribute('aria-hidden', 'false');
}

function closeTopic1DeckModal() {
    topic1Deck.classList.remove('is-open');
    topic1Deck.setAttribute('aria-hidden', 'true');
}

function updateDanDeck() {
    danSlides.forEach((slide, index) => {
        slide.classList.toggle('is-active', index === currentDanSlide);
    });
    danSlideCounter.textContent = `${currentDanSlide + 1} / ${danSlides.length}`;
    previousDanSlide.disabled = currentDanSlide === 0;
    nextDanSlide.disabled = currentDanSlide === danSlides.length - 1;
}

function openDanDeck() {
    currentDanSlide = 0;
    updateDanDeck();
    danDeck.classList.add('is-open');
    danDeck.setAttribute('aria-hidden', 'false');
}

function closeDanDeckModal() {
    danDeck.classList.remove('is-open');
    danDeck.setAttribute('aria-hidden', 'true');
}

function updateTopic7Deck() {
    topic7Slides.forEach((slide, index) => {
        slide.classList.toggle('is-active', index === currentTopic7Slide);
    });
    topic7SlideCounter.textContent = `${currentTopic7Slide + 1} / ${topic7Slides.length}`;
    previousTopic7Slide.disabled = currentTopic7Slide === 0;
    nextTopic7Slide.disabled = currentTopic7Slide === topic7Slides.length - 1;
}

function openTopic7Deck() {
    currentTopic7Slide = 0;
    updateTopic7Deck();
    topic7Deck.classList.add('is-open');
    topic7Deck.setAttribute('aria-hidden', 'false');
}

function closeTopic7DeckModal() {
    topic7Deck.classList.remove('is-open');
    topic7Deck.setAttribute('aria-hidden', 'true');
}

function updateTopic8Deck() {
    topic8Slides.forEach((slide, index) => {
        slide.classList.toggle('is-active', index === currentTopic8Slide);
    });
    topic8SlideCounter.textContent = `${currentTopic8Slide + 1} / ${topic8Slides.length}`;
    previousTopic8Slide.disabled = currentTopic8Slide === 0;
    nextTopic8Slide.disabled = currentTopic8Slide === topic8Slides.length - 1;
}

function openTopic8Deck() {
    currentTopic8Slide = 0;
    updateTopic8Deck();
    topic8Deck.classList.add('is-open');
    topic8Deck.setAttribute('aria-hidden', 'false');
}

function closeTopic8DeckModal() {
    topic8Deck.classList.remove('is-open');
    topic8Deck.setAttribute('aria-hidden', 'true');
}

function updateTopic3Deck() {
    topic3Slides.forEach((slide, index) => {
        slide.classList.toggle('is-active', index === currentTopic3Slide);
    });
    topic3SlideCounter.textContent = `${currentTopic3Slide + 1} / ${topic3Slides.length}`;
    previousTopic3Slide.disabled = currentTopic3Slide === 0;
    nextTopic3Slide.disabled = currentTopic3Slide === topic3Slides.length - 1;
}

function openTopic3Deck() {
    currentTopic3Slide = 0;
    updateTopic3Deck();
    topic3Deck.classList.add('is-open');
    topic3Deck.setAttribute('aria-hidden', 'false');
}

function closeTopic3DeckModal() {
    topic3Deck.classList.remove('is-open');
    topic3Deck.setAttribute('aria-hidden', 'true');
}

function updateTopic4Deck() {
    topic4Slides.forEach((slide, index) => {
        slide.classList.toggle('is-active', index === currentTopic4Slide);
    });
    topic4SlideCounter.textContent = `${currentTopic4Slide + 1} / ${topic4Slides.length}`;
    previousTopic4Slide.disabled = currentTopic4Slide === 0;
    nextTopic4Slide.disabled = currentTopic4Slide === topic4Slides.length - 1;
}

function openTopic4Deck() {
    currentTopic4Slide = 0;
    updateTopic4Deck();
    topic4Deck.classList.add('is-open');
    topic4Deck.setAttribute('aria-hidden', 'false');
}

function closeTopic4DeckModal() {
    topic4Deck.classList.remove('is-open');
    topic4Deck.setAttribute('aria-hidden', 'true');
}

previousSlide.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide -= 1;
        updateDeck();
    }
});

nextSlide.addEventListener('click', () => {
    if (currentSlide < deckSlides.length - 1) {
        currentSlide += 1;
        updateDeck();
    }
});

closeDeck.addEventListener('click', closeDeckModal);
previousTopic6Slide.addEventListener('click', () => {
    if (currentTopic6Slide > 0) {
        currentTopic6Slide -= 1;
        updateTopic6Deck();
    }
});

nextTopic6Slide.addEventListener('click', () => {
    if (currentTopic6Slide < topic6Slides.length - 1) {
        currentTopic6Slide += 1;
        updateTopic6Deck();
    }
});

closeTopic6Deck.addEventListener('click', closeTopic6DeckModal);

previousTopic8Slide.addEventListener('click', () => {
    if (currentTopic8Slide > 0) {
        currentTopic8Slide -= 1;
        updateTopic8Deck();
    }
});

nextTopic8Slide.addEventListener('click', () => {
    if (currentTopic8Slide < topic8Slides.length - 1) {
        currentTopic8Slide += 1;
        updateTopic8Deck();
    }
});

closeTopic8Deck.addEventListener('click', closeTopic8DeckModal);

previousTopic9Slide.addEventListener('click', () => {
    if (currentTopic9Slide > 0) {
        currentTopic9Slide -= 1;
        updateTopic9Deck();
    }
});

nextTopic9Slide.addEventListener('click', () => {
    if (currentTopic9Slide < topic9Slides.length - 1) {
        currentTopic9Slide += 1;
        updateTopic9Deck();
    }
});

closeTopic9Deck.addEventListener('click', closeTopic9DeckModal);

previousTopic5Slide.addEventListener('click', () => {
    if (currentTopic5Slide > 0) {
        currentTopic5Slide -= 1;
        updateTopic5Deck();
    }
});

nextTopic5Slide.addEventListener('click', () => {
    if (currentTopic5Slide < topic5Slides.length - 1) {
        currentTopic5Slide += 1;
        updateTopic5Deck();
    }
});

closeTopic5Deck.addEventListener('click', closeTopic5DeckModal);

previousTopic1Slide.addEventListener('click', () => {
    if (currentTopic1Slide > 0) {
        currentTopic1Slide -= 1;
        updateTopic1Deck();
    }
});

nextTopic1Slide.addEventListener('click', () => {
    if (currentTopic1Slide < topic1Slides.length - 1) {
        currentTopic1Slide += 1;
        updateTopic1Deck();
    }
});

closeTopic1Deck.addEventListener('click', closeTopic1DeckModal);

previousDanSlide.addEventListener('click', () => {
    if (currentDanSlide > 0) {
        currentDanSlide -= 1;
        updateDanDeck();
    }
});

nextDanSlide.addEventListener('click', () => {
    if (currentDanSlide < danSlides.length - 1) {
        currentDanSlide += 1;
        updateDanDeck();
    }
});

closeDanDeck.addEventListener('click', closeDanDeckModal);

previousTopic7Slide.addEventListener('click', () => {
    if (currentTopic7Slide > 0) {
        currentTopic7Slide -= 1;
        updateTopic7Deck();
    }
});

nextTopic7Slide.addEventListener('click', () => {
    if (currentTopic7Slide < topic7Slides.length - 1) {
        currentTopic7Slide += 1;
        updateTopic7Deck();
    }
});

closeTopic7Deck.addEventListener('click', closeTopic7DeckModal);

previousTopic3Slide.addEventListener('click', () => {
    if (currentTopic3Slide > 0) {
        currentTopic3Slide -= 1;
        updateTopic3Deck();
    }
});

nextTopic3Slide.addEventListener('click', () => {
    if (currentTopic3Slide < topic3Slides.length - 1) {
        currentTopic3Slide += 1;
        updateTopic3Deck();
    }
});

closeTopic3Deck.addEventListener('click', closeTopic3DeckModal);

previousTopic4Slide.addEventListener('click', () => {
    if (currentTopic4Slide > 0) {
        currentTopic4Slide -= 1;
        updateTopic4Deck();
    }
});

nextTopic4Slide.addEventListener('click', () => {
    if (currentTopic4Slide < topic4Slides.length - 1) {
        currentTopic4Slide += 1;
        updateTopic4Deck();
    }
});

closeTopic4Deck.addEventListener('click', closeTopic4DeckModal);

function closeReport() {
    reportModal.classList.remove('is-open');
    reportModal.setAttribute('aria-hidden', 'true');
    reportFrame.src = '';
}

closeReportModal.addEventListener('click', closeReport);

videoModal.addEventListener('click', (event) => {
    if (event.target === videoModal) {
        closeVideoModal();
    }
});

reportModal.addEventListener('click', (event) => {
    if (event.target === reportModal) {
        closeReport();
    }
});

mhrDeck.addEventListener('click', (event) => {
    if (event.target === mhrDeck) {
        closeDeckModal();
    }
});

topic5Deck.addEventListener('click', (event) => {
    if (event.target === topic5Deck) {
        closeTopic5DeckModal();
    }
});

topic1Deck.addEventListener('click', (event) => {
    if (event.target === topic1Deck) {
        closeTopic1DeckModal();
    }
});

danDeck.addEventListener('click', (event) => {
    if (event.target === danDeck) {
        closeDanDeckModal();
    }
});

topic7Deck.addEventListener('click', (event) => {
    if (event.target === topic7Deck) {
        closeTopic7DeckModal();
    }
});

topic3Deck.addEventListener('click', (event) => {
    if (event.target === topic3Deck) {
        closeTopic3DeckModal();
    }
});

topic4Deck.addEventListener('click', (event) => {
    if (event.target === topic4Deck) {
        closeTopic4DeckModal();
    }
});

PRPDeck.addEventListener('click', (event) => {
    if (event.target === PRPDeck) {
        closeTopic6DeckModal();
    }
});

topic8Deck.addEventListener('click', (event) => {
    if (event.target === topic8Deck) {
        closeTopic8DeckModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeVideoModal();
        closeTopic1DeckModal();
        closeReport();
        closeDeckModal();
        closeDanDeckModal();
        closeTopic7DeckModal();
        closeTopic3DeckModal();
        closeTopic4DeckModal();
        closeTopic5DeckModal();
        closeTopic6DeckModal();
        closeTopic8DeckModal();
        closeTopic9DeckModal();
    }
});

topic9Deck.addEventListener('click', (event) => {
    if (event.target === topic9Deck) {
        closeTopic9DeckModal();
    }
});
/* =========================================================
   Mobile swipe navigation
   Swipe left/right on an open presentation slide to move
   between slides. Existing buttons still work as before.
   ========================================================= */
(function enableMobileDeckSwipe() {
    const swipeDecks = [
        { deck: mhrDeck, slides: deckSlides, get: () => currentSlide, set: (v) => { currentSlide = v; updateDeck(); } },
        { deck: PRPDeck, slides: topic6Slides, get: () => currentTopic6Slide, set: (v) => { currentTopic6Slide = v; updateTopic6Deck(); } },
        { deck: topic9Deck, slides: topic9Slides, get: () => currentTopic9Slide, set: (v) => { currentTopic9Slide = v; updateTopic9Deck(); } },
        { deck: topic5Deck, slides: topic5Slides, get: () => currentTopic5Slide, set: (v) => { currentTopic5Slide = v; updateTopic5Deck(); } },
        { deck: topic1Deck, slides: topic1Slides, get: () => currentTopic1Slide, set: (v) => { currentTopic1Slide = v; updateTopic1Deck(); } },
        { deck: danDeck, slides: danSlides, get: () => currentDanSlide, set: (v) => { currentDanSlide = v; updateDanDeck(); } },
        { deck: topic7Deck, slides: topic7Slides, get: () => currentTopic7Slide, set: (v) => { currentTopic7Slide = v; updateTopic7Deck(); } },
        { deck: topic8Deck, slides: topic8Slides, get: () => currentTopic8Slide, set: (v) => { currentTopic8Slide = v; updateTopic8Deck(); } },
        { deck: topic3Deck, slides: topic3Slides, get: () => currentTopic3Slide, set: (v) => { currentTopic3Slide = v; updateTopic3Deck(); } },
        { deck: topic4Deck, slides: topic4Slides, get: () => currentTopic4Slide, set: (v) => { currentTopic4Slide = v; updateTopic4Deck(); } }
    ];

    swipeDecks.forEach(({ deck, slides, get, set }) => {
        if (!deck || !slides.length) return;

        let startX = 0;
        let startY = 0;
        let tracking = false;

        deck.addEventListener('touchstart', (event) => {
            if (!deck.classList.contains('is-open') || event.touches.length !== 1) return;
            startX = event.touches[0].clientX;
            startY = event.touches[0].clientY;
            tracking = true;
        }, { passive: true });

        deck.addEventListener('touchend', (event) => {
            if (!tracking || !deck.classList.contains('is-open')) return;
            tracking = false;

            const touch = event.changedTouches[0];
            const dx = touch.clientX - startX;
            const dy = touch.clientY - startY;

            // Ignore vertical scrolling and tiny movements.
            if (Math.abs(dx) < 55 || Math.abs(dx) < Math.abs(dy) * 1.25) return;

            const current = get();
            if (dx < 0 && current < slides.length - 1) {
                set(current + 1);
            } else if (dx > 0 && current > 0) {
                set(current - 1);
            }
        }, { passive: true });
    });
})();
