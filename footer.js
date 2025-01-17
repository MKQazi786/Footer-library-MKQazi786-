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
        overflow-x: hidden; /* Prevents horizontal scroll */
    }

    footer {
        min-width: 320px;
        background-color: #eaeaea;
        text-align: center;
        font-size: 1.5rem;
        box-shadow: -1px 2px 25px black;
        text-shadow: 1px 0px 1px black;
        font-weight: bolder;
        font-family: 'Poppins', sans-serif;
        padding: 1rem;
        box-sizing: border-box;
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

    // Create footer element
    let footer = document.createElement('footer');
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

// Example Usage
// loadFooter({
//     copyrightText: "Enter Your Field Like (Web and App Developer)",
//     developerName: "Your Name Here Like(Muhammad Khubaib) ",
//     links: [
//         { url: 'https://www.github.com/MKQazi786', icon: 'github' },
//         { url: 'https://www.linkedin.com/in/muhammad-khubaib-mkqazi786/', icon: 'linkedin' },
//         { url: 'https://www.facebook.com/MKQazi786', icon: 'facebook' },
//         { url: 'https://www.youtube.com/@MKQazi786', icon: 'youtube' },
//         { url: 'https://x.com/MKQazi786', icon: 'twitter' }
//     ],
//     textColor: '#ffffff',
//     iconColor: '#cccccc',
//     backgroundColor: '#333333'
// });
