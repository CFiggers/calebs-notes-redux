---

---

# This Website

This website is published using [Brick.do](https://brick.do), "a super
lightweight platform for creating small sites."

I've customized it a bit using the built-in customization tools in
Brick's editor:

### CSS

Brick lets you add custom CSS to any page, and cascade that styling down
to any nested pages. I used CSS to add styling to this site as well as
to change some of the default behavior of the sidebar and header.

#### Styling

The only big changes I've made so far to styling are to add color (I've
left all the default fonts as-is).

    .navigation-header{
      /* Make the navigation bar a nice dark blue */
      background-color: rgb(24, 41, 90);
      
      /* Make the collapse sidebar button white to be visible over new background
      color */
      svg {
        stroke: white;
        fill: white;
      }
      
      /* Bold the breadcrumb links and color them light blue */
      .breadcrumb-item, button {
        font-weight: 700;
        color: rgb(140, 225, 251);
      }
    }

    /* Make the page background a slight off-white instead of pure blinding 
    white */
    .page {
      background-color: #fffef9;
    }

I've also adjusted the syntax highlighting in code blocks to more
closely resemble the default Dark+ theme
in [[VS Code]] (my [[Text Editor]] of
choice):

    .rendered-page {

      /* Apply to css, html, clojure, and haskell codeblocks */
      .language-css,.language-html,.language-clojure,.language-haskell{
        /* Make the background slightly more dark grey than black */
        background: #1e1e1e ; 

        .token.selector {
          color: #D7BA7D ;
        }

        .token.property,.token.tag{
          color: #569CD6 ;
        }

        .token.comment{
          color: #6A9955 ;
        }

        .token.function{
          color: #DCDCAA ;
        }

        .token.string{
          color: #CE9178 ;
        }

        .token.attr-name{
          color: #9CDCFE ;
        }
      }
    }

#### Sidebar and Header Behavior

The default behavior on Brick.do sites is for the top navigation bar to
scroll up off the page when you scroll down, and for the sidebar to
stretch to the top of the page on the right-hand side. It looks like
this:


<img src="./This%20Website%20-%20assets/7195728de08e9ac83e1f0382a35c38dde41687e30eb5f024.png" sizes="100vw" width="930" />

I wanted the top nav bar to remain visible even when you scroll down,
and also for it to stretch all the way to the left-hand margin. Also, I
want the sidebar to only come up as far as the top nav bar (as you can
see it doing over there 👈).

So I customized both the sidebar and the top navigation header using the
following CSS:

    /* Make the sidebar stop 56 pixels from the top of the page */
    .tree-container {
      position: fixed;
      top: 56px;
    }

    /* Changes to the top bar */
    .navigation-header {
      /* Always at least 56 pixels tall */
      min-height: 56px;
      
      /* Stretches to the far left-hand side of the screen, over the sidebar */
      position: fixed;
      width: -webkit-fill-available;
      left: 0px;
      
      /* Sits in front of all other elements */
      z-index: 10000;
    }

To keep the content spaced correctly once I made the top bar float
overtop of it, I needed to add some padding to the top of the page
content.

    .page {
      padding-top: 56px;
    }

I also wanted a little extra space for the navigation tree to breathe
(since this site is pretty deeply nested) so I made it a little wider.

    /* Size the sidebar at 310 pixels and prevent that size from getting over-
    written */
    .tree-container {
      width: 310px !important;
    }


    /* Balance the rest of the page to respect a 310 pixel sidebar instead of the
    240 pixel default */
    .page-container_sidebar-open {
      margin-left: 310px !important;
    }

### Custom Head Tags

Brick lets you add custom tags to the &lt;head&gt;&lt;/head&gt; section
of any page. I used this to customize the appearance of links to this
site on other platforms like Facebook and Twitter. I also used this
feature to insert some custom JavaScript that updates the page while
it's loading.

#### Custom Favicon

By default, Brick pages uses Brick.do's stylized "B" logo. I added a
custom favicon using these &lt;head /&gt; tags.

    <link rel="icon" href="https://i.imgur.com/e0xC4HK.png?1" />
    <script>
      icon = "https://raw.githubusercontent.com/CFiggers/calebsnotes/main/static/CN_Favicon.png";
      document.querySelector("link[rel*='icon']").href = icon;
      document.querySelector("link[rel*='apple-touch-icon']").href = icon;
    </script>

This is based on [the guide to changing Favicons in Brick's knowledge base.](https://help.brick.do/how-to-change-the-favicon-ZG9pB0nrAYON)

#### SEO Tags

You can change the way other websites will display links to a Brick page
by updating the &lt;meta /&gt; tags in the page's header. I added the
following ones to this Brick site:

    <meta charset="utf-8" data-react-helmet="true">

    <!-- Add general Description, Image -->
    <meta name="description" content="Hi, I'm Caleb. I make notes about things. I hope you find them helpful!" data-react-helmet="true">
    <meta name="image" content="https://raw.githubusercontent.com/CFiggers/calebsnotes/main/images/Social%20Cards_Twitter_010222.png" data-react-helmet="true">

    <!-- Add Open Graph details—this is what Facebook uses to interpret a
    link posted on FB or in Facebook Messenger and style preview cards accordingly. -->
    <meta property="og:url" content="https://calebsnotes.brick.do/" data-react-helmet="true">
    <meta property="og:description" content="Hi, I'm Caleb. I make notes about things. I hope you find them helpful!" data-react-helmet="true">
    <meta property="og:image" content="https://raw.githubusercontent.com/CFiggers/calebsnotes/main/images/Social%20Cards_Twitter_010222.png" data-react-helmet="true">

    <!-- Add Twitter-specific details—this is what Twitter uses to interpret a
    link posted to Twitter and style preview cards accordingly. -->
    <meta name="twitter:card" content="summary_large_image" data-react-helmet="true">
    <meta name="twitter:creator" content="@CalebFiggers" data-react-helmet="true">
    <meta name="twitter:description" content="Hi, I'm Caleb. I make notes about things. I hope you find them helpful!" data-react-helmet="true">
    <meta name="twitter:image" content="https://raw.githubusercontent.com/CFiggers/calebsnotes/main/images/Social%20Cards_Twitter_010222.png" data-react-helmet="true">

<div class="raw-html-embed">

#### Custom Header and Footer

</div>

I used &lt;script&gt;&lt;/script&gt; tags to add some global JavaScript
to this site. That allowed me to insert the "Support Me ❤️" link at the
top of every page and the grey box about how to contact me down in the
footer.

The header works like this:

    <script>
      // Adding an event listener makes the nested code wait until the rest of 
      // the site loads first.
      window.addEventListener('DOMContentLoaded', (event) => { 
        // Create and configure an HTML element.
        const support_element = document.createElement('a');
        support_element.setAttribute('href', 'https://ko-fi.com/calebfiggers');
        support_element.setAttribute('class', 'support-header');
        support_element.innerHTML = ('Support Me ❤️');
        
        // Select the Header element from the page's DOM and insert the element 
        // above as the last element in that <div />.
        document.querySelector('Header').appendChild(support_element);
        });
    </script>

I then styled it using this CSS:

    .support-header {

      /* Text color and bold. */
      color: rgb(255, 217, 102);
      font-weight: 700;
      
      /* Make it stick to the right-hand side of the nav bar. */
      position: fixed;
      right: 20px;
    }

    /* Keeps the navigation breadcrumbs from overlapping on mobile. */
    .navigation-header {
      padding-right: 150px;
    }

The footer works similarly: 

    <script>
      // Adding an event listener makes the nested code wait until the rest of 
      // the site loads first.
      window.addEventListener('DOMContentLoaded', (event) => {
        // Create and configure an HTML element.
        const footerBox = document.createElement('div');
        footerBox.setAttribute('class', 'custom-footer-outer');
        footerBox.innerHTML = "<div class='custom-footer-padding'><p class='custom-footer-inner'>Enjoy something here? I'd love to hear from you! You can [[direct message me]] on Twitter or [[email me]] any time. If you want, you can [[Support me on Ko-fi &lt;3]]</p></div>";
        
        // Select the Footer element from the page's DOM and insert the element 
        // above as the first element in that <div />.
        document.querySelector("div.jsx-1058813669.flex-1.flex.flex-col.items-center.h-full").insertBefore(footerBox, document.querySelector("footer"));
      });
    </script>

And some CSS to style it:

    .custom-footer-outer {
      /* Matches the padding with the page content above. */
      max-width: 900px;
      padding-left: 15px;
      padding-right: 15px;
        
    /* On wide screens only, pad 96 pixels. Otherwise (i.e. on mobile), the
    above 15 pixel padding applies. */
      @media screen and (min-width: 800px) {
        padding-left: 96px;
        padding-right: 96px;
      }
    }

    .custom-footer-padding {
      box-sizing: border-box;
      margin: 15px 0px 8px;
      min-width: 0px ;
      padding: 8px ;
      background-color: #e6e6ef;
      color: rgb(24, 41, 90);
      border-radius: 8px ;
    }

    .custom-footer-inner {
      padding-right: 16px;
      padding-left: 16px;
    }
