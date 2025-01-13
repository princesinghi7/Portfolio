// Function to handle tab switching
function openTab(tabId) {
    // Get all tab contents and remove 'active-tab' class
    const tabs = document.querySelectorAll('.tab-contents');
    tabs.forEach(tab => tab.classList.remove('active-tab'));
    
    // Get all tab links and remove 'active-link' class
    const links = document.querySelectorAll('.tab-links');
    links.forEach(link => link.classList.remove('active-link'));

    // Add 'active-tab' to the selected tab and 'active-link' to the clicked link
    document.getElementById(tabId).classList.add('active-tab');
    const activeLink = document.querySelector(`.tab-links[onclick="openTab('${tabId}')"]`);
    activeLink.classList.add('active-link');
}

// Optional: Initialize default active tab (Skills tab by default)
document.addEventListener('DOMContentLoaded', () => {
    openTab('skills'); // Default tab to show on page load
});
