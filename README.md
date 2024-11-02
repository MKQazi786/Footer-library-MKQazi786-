<h1>Footer Library MKQazi786</h1>
<p>A customizable footer component for web applications, featuring popular social icons and flexible styling options.</p>

<h2>Features</h2>
<ul>
  <li><b>Fully Customizable:</b> Easily modify text, colors, and social media links.</li>
  <li><b>Responsive Design:</b> Adapts to all screen sizes.</li>
  <li><b>Supports Popular Icons:</b> GitHub, LinkedIn, Facebook, YouTube, and more.</li>
</ul>

<h2>Installation</h2>
<p>You can include the library via CDN:</p>
<pre><code>&lt;script src="https://cdn.jsdelivr.net/gh/MKQazi786/Footer-library-MKQazi786-/footer.js"&gt;&lt;/script&gt;</code></pre>
<p>Or via unpkg:</p>
<pre><code>&lt;script src="https://unpkg.com/footer-library-mkqazi786-/footer.js"&gt;&lt;/script&gt;</code></pre>
<p>Or you can install it via npm:</p>
<pre><code>npm install footer-library-mkqazi786</code></pre>

<h2>NPM Usage</h2>
<p>After installing via npm, import the library in your JavaScript file:</p>
<pre><code>import { loadFooter } from 'footer-library-mkqazi786';</code></pre>

<p>Add a <code>&lt;footer&gt;</code> element in your HTML where the footer should appear:</p>
<pre><code>&lt;footer id="footer"&gt;&lt;/footer&gt;</code></pre>

<p>Initialize the footer:</p>
<pre><code>
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

<h2>Options</h2>
<table>
  <tr>
    <th>Option</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>copyrightText</code></td>
    <td>String</td>
    <td>(Optional) Copyright text displayed in the footer.</td>
  </tr>
  <tr>
    <td><code>developerName</code></td>
    <td>String</td>
    <td>Name displayed in the footer (e.g., "Your Name Here").</td>
  </tr>
  <tr>
    <td><code>links</code></td>
    <td>Array</td>
    <td>List of social links with <code>url</code> and <code>icon</code> keys.</td>
  </tr>
  <tr>
    <td><code>textColor</code></td>
    <td>String</td>
    <td>(Optional) Footer text color.</td>
  </tr>
  <tr>
    <td><code>iconColor</code></td>
    <td>String</td>
    <td>(Optional) Icon color.</td>
  </tr>
  <tr>
    <td><code>backgroundColor</code></td>
    <td>String</td>
    <td>(Optional) Background color of the footer.</td>
  </tr>
</table>

<h2>License</h2>
<p>Licensed under the ISC License.</p>

<h2>End</h2>
<p>Thank you for using the Footer Library MKQazi786! For any questions or feedback, feel free to reach out.</p>
