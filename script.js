/**
 * Princess Royal 20th Birthday - Interactive Logic
 */

/*function revealFairytaleSurprise() {
    const surpriseContainer = document.getElementById("surpriseContainer");
    const surpriseBtn = document.getElementById("surpriseBtn");
    const birthdaySong = document.getElementById("birthdaySong");

    // 1. Reveal the hidden surprise container
    if (surpriseContainer) {
        surpriseContainer.style.display = "block";
    }

    // 2. Play the Happy Birthday song
    if (birthdaySong) {
        birthdaySong.play().catch((error) => {
            // Browsers may block autoplay unless triggered directly by a click
            console.log("Audio playback error: ", error);
        });
    }

    // 3. Trigger royal confetti burst using canvas-confetti library
    triggerRoyalConfetti();

    // 4. Transform button to prevent multiple triggers
    if (surpriseBtn) {
        surpriseBtn.innerHTML = '<span class="btn-icon">👑</span> Long Live The Princess!';
        surpriseBtn.style.pointerEvents = "none";
        surpriseBtn.style.opacity = "0.9";
    }
}*/
function revealFairytaleSurprise() {
    const surpriseContainer = document.getElementById("surpriseContainer");
    const surpriseBtn = document.getElementById("surpriseBtn");
    const birthdaySong = document.getElementById("birthdaySong");

    // 1. Reveal the hidden surprise container
    if (surpriseContainer) {
        surpriseContainer.style.display = "block";
    }

    // 2. Play the Happy Birthday song safely
    if (birthdaySong) {
        birthdaySong.currentTime = 0; // Rewind to start
        const playPromise = birthdaySong.play();

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log("Audio playing successfully!");
                })
                .catch((error) => {
                    console.warn("Audio playback failed:", error);
                });
        }
    }

    // 3. Trigger royal confetti burst
    triggerRoyalConfetti();

    // 4. Transform button to prevent multiple triggers
    if (surpriseBtn) {
        surpriseBtn.innerHTML = '<span class="btn-icon">👑</span> Long Live The Princess!';
        surpriseBtn.style.pointerEvents = "none";
        surpriseBtn.style.opacity = "0.9";
    }
}

/**
 * Fires multi-colored royal confetti and sparkles
 */
function triggerRoyalConfetti() {
    if (typeof confetti !== "function") return;

    // First main burst
    confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#f48fb1", "#ba68c8", "#81d4fa", "#ffd54f", "#ffffff"],
    });

    // Secondary side bursts for extra fairytale feel
    setTimeout(() => {
        confetti({
            particleCount: 60,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ["#ec407a", "#ab47bc", "#ffd700"],
        });
        confetti({
            particleCount: 60,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ["#ec407a", "#ab47bc", "#ffd700"],
        });
    }, 400);
}