// Get query parameter from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get the 'q' parameter from URL (e.g., ?q=myhuyweddingg)
const queryValue = getQueryParam('q');

// Log the value (you can use this value as needed)
if (queryValue) {
    console.log('Query parameter q:', queryValue);
}

// Update guest name from query parameter
function updateGuestName() {
    const guestNameElement = document.getElementById('guestName');
    if (guestNameElement) {
        if (queryValue) {
            guestNameElement.textContent = queryValue;
            console.log('Guest name updated to:', queryValue);
        } else {
            console.log('No query parameter found, keeping default name');
        }
    } else {
        console.log('Guest name element not found');
        // Retry after a short delay in case DOM isn't ready
        setTimeout(updateGuestName, 100);
    }
}

// Try to update when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateGuestName);
} else {
    // DOM is already ready
    updateGuestName();
}

// Also try after window load (in case of dynamic content)
window.addEventListener('load', function() {
    setTimeout(updateGuestName, 100);
});

// Wedding date: December 28, 2025 at 11:00 AM
const weddingDate = new Date('2025-12-28T11:00:00').getTime();

// Countdown Timer
function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        // Wedding has passed
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// RSVP Form Handling
const rsvpForm = document.getElementById('rsvpForm');
const successModal = document.getElementById('successModal');

rsvpForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(rsvpForm);
    const data = {
        attendance: formData.get('attendance'),
        guests: formData.get('guests'),
        invitedBy: formData.get('invitedBy'),
        message: formData.get('message')
    };

    // Here you would typically send the data to a server
    // For now, we'll just log it and show the success modal
    console.log('RSVP Data:', data);
    
    // Save to localStorage (optional, for demo purposes)
    const rsvps = JSON.parse(localStorage.getItem('rsvps') || '[]');
    rsvps.push({
        ...data,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('rsvps', JSON.stringify(rsvps));

    // Show success modal
    showModal();
    
    // Reset form
    rsvpForm.reset();
});

function showModal() {
    successModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    successModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
successModal.addEventListener('click', function(e) {
    if (e.target === successModal) {
        closeModal();
    }
});

// Direction Button
const directionBtn = document.getElementById('directionBtn');
directionBtn.addEventListener('click', function() {
    // Google Maps link to the venue
    const address = encodeURIComponent('Thôn Kim Nhan 1, xã Anh Sơn, Tỉnh Nghệ An, Vietnam');
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
    window.open(mapsUrl, '_blank');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add placeholder images to album (you can replace these with actual images)
function initializeAlbum() {
    const albumGrid = document.getElementById('albumGrid');
    
    // Placeholder images - replace with actual wedding photos
    const placeholderImages = [
        'https://via.placeholder.com/400x300/d4af37/ffffff?text=Wedding+Photo+1',
        'https://via.placeholder.com/400x300/d4af37/ffffff?text=Wedding+Photo+2',
        'https://via.placeholder.com/400x300/d4af37/ffffff?text=Wedding+Photo+3',
        'https://via.placeholder.com/400x300/d4af37/ffffff?text=Wedding+Photo+4',
        'https://via.placeholder.com/400x300/d4af37/ffffff?text=Wedding+Photo+5',
        'https://via.placeholder.com/400x300/d4af37/ffffff?text=Wedding+Photo+6'
    ];

    placeholderImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Wedding Photo';
        img.loading = 'lazy';
        albumGrid.appendChild(img);
    });
}

// Initialize album on page load
initializeAlbum();

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add fade-in animation to hero section immediately
window.addEventListener('load', function() {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
});

// Handle form validation
const formSelect = document.getElementById('guestsSelect');
const attendanceRadios = document.querySelectorAll('input[name="attendance"]');
const invitedByRadios = document.querySelectorAll('input[name="invitedBy"]');

// Enable/disable guests select based on attendance
attendanceRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.value === 'no') {
            formSelect.disabled = true;
            formSelect.value = '1';
        } else {
            formSelect.disabled = false;
        }
    });
});

// Add loading state to submit button
rsvpForm.addEventListener('submit', function() {
    const submitBtn = rsvpForm.querySelector('.submit-btn');
    submitBtn.textContent = 'Đang gửi...';
    submitBtn.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        submitBtn.textContent = 'GỬI';
        submitBtn.disabled = false;
    }, 1000);
});

