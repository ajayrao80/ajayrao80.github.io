// Tab switching functionality
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const tabId = this.getAttribute('data-tab');
        
        // Remove active class from all links and contents
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked link and corresponding content
        this.classList.add('active');
        document.getElementById(tabId).classList.add('active');
        
        // Update URL hash
        window.location.hash = tabId;
    });
});

// Handle browser back/forward buttons
window.addEventListener('hashchange', function() {
    const tabId = window.location.hash.substring(1) || 'introduction';
    const link = document.querySelector(`[data-tab="${tabId}"]`);
    if (link) {
        link.click();
    }
});

// Initialize based on URL hash
window.dispatchEvent(new Event('hashchange'));
