const iconLink = document.createElement('link');
iconLink.rel = 'stylesheet';
iconLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css';
document.head.appendChild(iconLink);

const googleFontLink = document.createElement('link');
googleFontLink.rel = 'stylesheet';
googleFontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap';
document.head.appendChild(googleFontLink);

// Add CSS styles directly
const style = document.createElement('style');
style.textContent = `
    body {
        margin: 0;
        padding-bottom: 80px;
    }

    footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        min-width: 320px;
        background-color: #eaeaea;
        text-align: center;
        font-size: 1.5rem;
        box-shadow: -1px 2px 25px black;
        text-shadow: 1px 0px 1px black;
        font-weight: bolder;
        font-family: 'Poppins', sans-serif;
        padding: 1rem;
    }

    .icon {
        display: flex;
        justify-content: center;
        column-gap: 0.7rem;
        margin: 0.2rem;
        font-size: 1.6rem;
    }

    .icon a {
        color: black;
    }
`;
document.head.appendChild(style);

// Footer loading function
window.loadFooter = ({ copyrightText, developerName, links, textColor, iconColor, backgroundColor }) => {
    if (!copyrightText || !developerName || !links) {
        console.error('Missing parameters for loadFooter');
        return;
    }

    let footer = document.createElement('footer'); // Create footer element if not exists
    footer.style.backgroundColor = backgroundColor;
    footer.style.color = textColor;

    footer.innerHTML = `
        <div>
            © ${copyrightText}: <br> ${developerName} <br>
            <div class="icon">
                ${links.map(link => `
                    <a href="${link.url}" aria-label="${link.icon}" style="color: ${iconColor};">
                        <i class="bi bi-${link.icon}"></i>
                    </a>
                `).join('')}
            </div>
        </div>
    `;

    document.body.appendChild(footer); // Append footer to body
};

// Call the function to load the footer
loadFooter({
    copyrightText: '2024 All Rights Reserved',
    developerName: 'Your Name',
    links: [
        { url: 'https://facebook.com', icon: 'facebook' },
        { url: 'https://twitter.com', icon: 'twitter' },
        { url: 'https://linkedin.com', icon: 'linkedin' },
    ],
    textColor: '#000',
    iconColor: '#000',
    backgroundColor: '#eaeaea'
});
