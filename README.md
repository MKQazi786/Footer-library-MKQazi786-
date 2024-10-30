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
<pre><code>&lt;script src="https://cdn.jsdelivr.net/npm/footer-library-mkqazi786-/dist/footer-library.js"&gt;&lt;/script&gt;</code></pre>
<p>Or via UPKG:</p>
<pre><code>&lt;script src="https://unpkg.com/footer-library-mkqazi786-/dist/footer-library.js"&gt;&lt;/script&gt;</code></pre>

<h2>Usage</h2>
<p>Add a <code>&lt;footer&gt;</code> element in your HTML where the footer should appear:</p>
<pre><code>&lt;footer id="footer"&gt;&lt;/footer&gt;</code></pre>

<p>Initialize the footer:</p>
<pre><code>
&lt;script&gt;
  loadFooter({
    copyrightText: "Enter Your Field Like (Web and App Developer)",
    developerName: "Your Name Here Like (Muhammad Khubaib)",  <!-- Example name -->
    links: [
      { url: 'https://www.github.com/MKQazi786', icon: 'github' },
      { url: 'https://www.linkedin.com/in/muhammad-khubaib-mkqazi786/', icon: 'linkedin' },
      { url: 'https://www.facebook.com/MKQazi786', icon: 'facebook' },
      { url: 'https://www.youtube.com/@MKQazi786', icon: 'youtube' },
      { url: 'https://twitter.com/MKQazi786', icon: 'twitter-x' },
    ],
    textColor: "#ffffff",
    iconColor: "#cccccc",
    backgroundColor: "#333333"
  });
&lt;/script&gt;
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
