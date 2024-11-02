<h1>Footer Library - MKQazi786</h1>
<p>A customizable footer component for web applications, featuring popular social icons and flexible styling options.</p>

<h2>Features</h2>
<ul>
    <li><b>Fully Customizable:</b> Easily modify text, colors, and social media links.</li>
    <li><b>Responsive Design:</b> Adapts to all screen sizes.</li>
    <li><b>Supports Popular Icons:</b> GitHub, LinkedIn, Facebook, YouTube, and more.</li>
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
<p>Add a <code>&lt;footer&gt;</code> element in your HTML where the footer should appear:</p>
<pre><code>&lt;footer id="footer"&gt;&lt;/footer&gt;</code></pre>

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
          { url: 'https://x.com/MKQazi786', icon: 'twitter-x' },
    
&lt;/script&gt;
</code></pre>

<h3>For npm</h3>
<p>After installation, import and initialize in your JavaScript file:</p>
<pre><code>
import loadFooter from 'footer-library-mkqazi786-';

loadFooter({
    copyrightText: "Enter Your Field Like (Web and App Developer)",
    developerName: "Your Name Here Like (Muhammad Khubaib)",  
    links: [
        { url: 'https://www.github.com/MKQazi786', icon: 'github' },
        { url: 'https://www.linkedin.com/in/muhammad-khubaib-mkqazi786/', icon: 'linkedin' },
        { url: 'https://www.facebook.com/MKQazi786', icon: 'facebook' },
        { url: 'https://www.youtube.com/@MKQazi786', icon: 'youtube' },
        { url: 'https://x.com/MKQazi786', icon: 'twitter-x' },
    ],
    textColor: "#ffffff",
    iconColor: "#cccccc",
    backgroundColor: "#333333"
});
</code></pre>

<h2>License</h2>
<p>Licensed under the ISC License.</p>

<h2>End</h2>
<p>Thank you for using the Footer Library MKQazi786! For any questions or feedback, feel free to reach out.</p>
