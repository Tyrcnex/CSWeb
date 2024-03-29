# CSWeb

> **This project is currently in progress! Some features will not be available.**

Github: https://github.com/Tyrcnex/CSWeb<br>
Website: https://tyrcnex.github.io/CSWeb

## Hello!
This place is just for me to backup my code in case anything goes wrong. It's also a resource, in case some of you want to view my code or anything. 

NOTE: OPENING THE HTML FILES WITHOUT A SERVER ON CHROME WILL CAUSE ERRORS DUE TO CHROME'S CORS POLICY. OPEN THIS ON THE WEBSITE, OR WITH A LOCAL SERVER OF SOME TYPE.

# Features:

### Code features:

- Organization: I've organized this project a lot, particularly the CSS. Instead of including all CSS in one file, I've split it across many files, organized by functionality.
- CSS variables: Instead of changing all instances of one type of variable (for example, the default animation length), I created a variables.css file, allowing me to adjust this file instead of changing all instances.
- Dynamic debug: Only turns on debug mode if the website is running on a local server (127.0.0.1)

### Viewer features:

- Accessibility: On a device, there's usually an accessibility feature called <i>Reduced Motion.</i> This is a feature that, as implied, reduces the animation, or motion, of the website. This means that some animated transitions might need to be removed or suppressed if the <i>Reduced Motion</i> setting is enabled.

# How the code works ↓

## Root folder <img src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png" alt="folder" width="20"/>

### `index.html`
This is the html file you see in the root (main) folder. All it does is redirect to `src/pages/index.html`, and add the embed you see on Discord when you paste the website link in.

### images <img src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png" alt="folder" width="20"/> , fonts <img src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png" alt="folder" width="20"/>
These are quite straightforward.

## src <img src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png" alt="folder" width="20"/>
> ah, this is where all the tasty code is

### css <img src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png" alt="folder" width="20"/>
Ah yes, the CSS. This folder is split up into many sections, but I only reference one in my HTML file. Basically, what I did was compile all main CSS files into the `all.css` file (`elements.css` and `mainstyling.css`). Then, I compiled all relevant CSS files into `elements.css` and `mainstyling.css`. Why did I do this, instead of making one CSS file only? Well, it's organization. It's hard to understand what different parts of one CSS file do, even with sufficient comments. Splitting it up is easier to comprehend. Plus, you can name the files, and it's more organized that way.

### js <img src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png" alt="folder" width="20"/>
Currently, I only have one Javascript file: I'm going to organize this later. I include all my interactivity elements (loading, navigation bar, I think there's more but I forgot).

### pages <img src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png" alt="folder" width="20"/>
I only have one page currently, `index.html`. This is the main file, as all of you know. I'm going to add sub-pages soon, but I'm implementing pop-ups in my main file.
<br>
‎

---

<br>

> Further code descriptions coming soon! DM Tyrcnex#9403 on Discord if you need help.

