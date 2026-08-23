document.addEventListener('DOMContentLoaded', () => {
    const deletionForm = document.getElementById('deletionForm');
    const applicationSelect = document.getElementById('application');
    const submitBtn = document.getElementById('submitBtn');

    deletionForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const selectedApp = applicationSelect.value;
        if (selectedApp) {
            // Add loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="loader"></span> Redirecting...';

            // Redirect to the specific page
            setTimeout(() => {
                window.location.href = `pages/${selectedApp}.html`;
            }, 800);
        }
    });
});

// Extra style for the loader added dynamically
const style = document.createElement('style');
style.textContent = `
    .loader {
        width: 18px;
        height: 18px;
        border: 2px solid #ffffff;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
