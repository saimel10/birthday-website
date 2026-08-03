/**
 * Princess Royal Birthday - Playful Whimsical Script
 */
document.addEventListener("DOMContentLoaded", () => {
    initSparkleCanvas();
});

function revealFairytaleSurprise() {
    const surpriseContainer = document.getElementById("surpriseContainer");
    const surpriseBtn = document.getElementById("surpriseBtn");
    const birthdaySong = document.getElementById("birthdaySong");
    const musicToggle = document.getElementById("musicToggle");

    if (surpriseContainer) {
        surpriseContainer.style.display = "block";
    }

    if (birthdaySong) {
        birthdaySong.currentTime = 0;
        birthdaySong.play().then(() => {
            if (musicToggle) musicToggle.classList.add("playing");
        }).catch((error) => {
            console.warn("Autoplay blocked:", error);
        });
    }

    triggerRoyalConfetti();

    if (surpriseBtn) {
        surpriseBtn.innerHTML = '🎉 Yay! Party Time! 🥳';
        surpriseBtn.style.pointerEvents = "none";
        surpriseBtn.style.background = "linear-gradient(135deg, #10b981, #06b6d4)";
        surpriseBtn.style.transform = "scale(1.05)";
    }
}

function toggleAudio() {
    const birthdaySong = document.getElementById("birthdaySong");
    const musicToggle = document.getElementById("musicToggle");

    if (!birthdaySong) return;

    if (birthdaySong.paused) {
        birthdaySong.play();
        if (musicToggle) musicToggle.classList.add("playing");
    } else {
        birthdaySong.pause();
        if (musicToggle) musicToggle.classList.remove("playing");
    }
}

function triggerRoyalConfetti() {
    if (typeof confetti !== "function") return;

    // Burst 1: Star & Heart explosion
    confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 },
        shapes: ['star', 'heart', 'circle'],
        colors: ["#f472b6", "#c084fc", "#fef08a", "#38bdf8", "#34d399"],
        scalar: 1.3
    });

    // Burst 2: Left playful burst
    setTimeout(() => {
        confetti({
            particleCount: 60,
            angle: 60,
            spread: 70,
            origin: { x: 0.05, y: 0.65 },
            shapes: ['star', 'circle'],
            colors: ["#f472b6", "#fbbf24", "#a855f7"]
        });
    }, 250);

    // Burst 3: Right playful burst
    setTimeout(() => {
        confetti({
            particleCount: 60,
            angle: 120,
            spread: 70,
            origin: { x: 0.95, y: 0.65 },
            shapes: ['star', 'circle'],
            colors: ["#f472b6", "#fbbf24", "#a855f7"]
        });
    }, 450);
}

function initSparkleCanvas() {
    const canvas = document.getElementById("sparkleCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = 40;

    class Sparkle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = height + Math.random() * 80;
            this.size = Math.random() * 4 + 2;
            this.speedY = Math.random() * 1.2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.8;
            this.opacity = Math.random() * 0.8 + 0.2;
            this.color = ["#fef08a", "#f472b6", "#c084fc", "#38bdf8"][Math.floor(Math.random() * 4)];
        }

        update() {
            this.y -= this.speedY;
            this.x += this.speedX;

            if (this.y < -10) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Sparkle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach((p) => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();
}