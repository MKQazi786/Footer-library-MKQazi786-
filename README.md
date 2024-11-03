<h1>Footer Library - MKQazi786</h1>
<p>A customizable footer component for web applications, featuring popular social icons and flexible styling options.</p>

<h2>Features</h2>
<ul>
    <li><strong>Fully Customizable:</strong> Easily modify text, colors, and social media links.</li>
    <li><strong>Responsive Design:</strong> Adapts to all screen sizes.</li>
    <li><strong>Supports Popular Icons:</strong> GitHub, LinkedIn, Facebook, YouTube, and more.</li>
</ul>

<h2>Installation</h2>
<p>You can include the library using CDN, unpkg, or npm:</p>

<h3>1. CDN:</h3>
<pre><code>&lt;script src="https://cdn.jsdelivr.net/gh/MKQazi786/Footer-library-MKQazi786-/footer.js"&gt;&lt;/script&gt;</code></pre>

<h3>2. unpkg:</h3>
<pre><code>&lt;script src="https://unpkg.com/footer-library-mkqazi786-/footer.js"&gt;&lt;/script&gt;</code></pre>

<h2>NPM Usage</h2>
<p>Or you can install it via npm:</p>
<pre><code>npm install footer-library-mkqazi786</code></pre>
<p>After installing via npm, import the library in your JavaScript file:</p>
<pre><code>import { loadFooter } from 'footer-library-mkqazi786';</code></pre>

<h2>Usage</h2>
<h3>For CDN and unpkg</h3>
<p>Initialize the footer with your custom configuration options:</p>

<pre><code>
&lt;script&gt;
loadFooter({
    copyrightText: "Enter Your Field Like (Web and App Developer)",
    developerName: "Your Name Here Like (Muhammad Khubaib)",
    links: [
        { url: 'https://www.github.com/MKQazi786', icon: 'github' },
        { url: 'https://www.linkedin.com/in/muhammad-khubaib-mkqazi786/', icon: 'linkedin' },
        { url: 'https://www.facebook.com/MKQazi786', icon: 'facebook' },
        { url: 'https://www.youtube.com/@MKQazi786', icon: 'youtube' },
        { url: 'https://x.com/MKQazi786', icon: 'twitter' }
    ],
    textColor: "#ffffff",          // Text color for footer text
    iconColor: "#cccccc",          // Color of social icons
    backgroundColor: "#333333"     // Background color of footer
});
&lt;/script&gt;
</code></pre>

<h3>For npm</h3>
<p>After installation, import and initialize in your JavaScript file:</p>
<pre><code>
import loadFooter from 'footer-library-mkqazi786';

loadFooter({
    copyrightText: "Enter Your Field Like (Web and App Developer)",
    developerName: "Your Name Here Like (Muhammad Khubaib)",
    links: [
        { url: 'https://www.github.com/MKQazi786', icon: 'github' },
        { url: 'https://www.linkedin.com/in/muhammad-khubaib-mkqazi786/', icon: 'linkedin' },
        { url: 'https://www.facebook.com/MKQazi786', icon: 'facebook' },
        { url: 'https://www.youtube.com/@MKQazi786', icon: 'youtube' },
        { url: 'https://x.com/MKQazi786', icon: 'twitter' }
    ],
    textColor: "#ffffff",
    iconColor: "#cccccc",
    backgroundColor: "#333333"
});
</code></pre>

<h2>Configuration Options</h2>
<p>Here’s a list of all available configuration options and their descriptions:</p>

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><strong>copyrightText</strong></td>
    <td>Your designation or field, e.g., "Web and App Developer".</td>
  </tr>
  <tr>
    <td><strong>developerName</strong></td>
    <td>Your name, e.g., "Muhammad Khubaib".</td>
  </tr>
  <tr>
    <td><strong>links</strong></td>
    <td>An array of social media links with URLs and icon names.</td>
  </tr>
  <tr>
    <td><strong>url</strong></td>
    <td>Link to the social profile.</td>
  </tr>
  <tr>
    <td><strong>icon</strong></td>
    <td>Name of the icon, e.g., "github", "linkedin", "facebook", "youtube", "twitter-x".</td>
  </tr>
  <tr>
    <td><strong>textColor</strong></td>
    <td>Text color in hexadecimal, e.g., "#ffffff".</td>
  </tr>
  <tr>
    <td><strong>iconColor</strong></td>
    <td>Icon color in hexadecimal, e.g., "#cccccc".</td>
  </tr>
  <tr>
    <td><strong>backgroundColor</strong></td>
    <td>Background color in hexadecimal, e.g., "#333333".</td>
  </tr>
</table>

<h2>License</h2>
<p>Licensed under the ISC License.</p>

<h2>End</h2>
<p>Thank you for using the Footer Library MKQazi786! For any questions or feedback, feel free to reach out.</p>
