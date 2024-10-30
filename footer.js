let loadFooter = ({copyrightText,developerName,links,textColor,iconColor, backgroundColor}) => {
    let footer = document.querySelector('footer');
    footer.style.backgroundColor = backgroundColor;
    footer.style.color = textColor;

    footer.innerHTML = `
     <div>
            © ${copyrightText}: <br> ${developerName} <br>
            <div class="icon">
                ${links.map(link => `
                    <a href="${link.url}" style="color: ${iconColor};">
                        <i class="bi bi-${link.icon}"></i>
                    </a>
                `).join('')}
            </div>
        </div>
    `;

    document.body.appendChild(footer);
}

loadFooter({
    copyrightText: "Enter Your Field Like (Web and App Developer)",
    developerName: "Plz Enter Your Name Here",
    links: [
        { url: 'https://www.github.com/MKQazi786', icon: 'github' },
        { url: 'https://www.linkedin.com/in/muhammad-khubaib-mkqazi786/', icon: 'linkedin' },
        { url: 'https://www.facebook.com/MKQazi786', icon: 'facebook' },
        { url: 'https://www.youtube.com/@MKQazi786', icon: 'youtube' },
        { url: 'https://x.com/MKQazi786', icon: 'twitter-x'},
        
          
        
    ],
    textColor: '#ffffff',         
    iconColor: '#cccccc',         
    backgroundColor: '#333333'
})