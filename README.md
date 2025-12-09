# Wedding Invitation Website

A beautiful wedding invitation website for Huyền My & Bảo Huy.

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Countdown Timer**: Real-time countdown to the wedding day
- **RSVP Form**: Guests can confirm their attendance
- **Love Story Section**: Beautiful narrative of the couple's journey
- **Wedding Details**: Date, time, and venue information
- **Timeline**: Schedule of wedding events
- **Photo Album**: Gallery section for wedding photos
- **Smooth Animations**: Elegant scroll animations and transitions

## Files Structure

```
wedding/
├── index.html      # Main HTML file
├── styles.css      # All styling and responsive design
├── script.js       # Interactive features and functionality
└── README.md       # This file
```

## How to Run Locally

### Method 1: Simple File Opening (Quick Start)

1. Open `index.html` directly in your web browser by double-clicking it
   - This works for basic viewing, but some features may be limited

### Method 2: Using a Local Server (Recommended)

#### Option A: Using Python (if installed)

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

Then open your browser and navigate to: `http://localhost:8000`

#### Option B: Using Node.js (if installed)

Install a simple HTTP server:
```bash
npx http-server -p 8000
```

Then open your browser and navigate to: `http://localhost:8000`

#### Option C: Using PHP (if installed)

```bash
php -S localhost:8000
```

Then open your browser and navigate to: `http://localhost:8000`

#### Option D: Using VS Code Live Server Extension

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Method 3: Using Any Web Server

You can use any web server software (Apache, Nginx, etc.) and point it to this directory.

## Customization

### Changing Wedding Date

Edit the `weddingDate` variable in `script.js`:

```javascript
const weddingDate = new Date('2025-12-28T11:00:00').getTime();
```

### Adding Wedding Photos

Replace the placeholder images in the `initializeAlbum()` function in `script.js`:

```javascript
const placeholderImages = [
    'path/to/photo1.jpg',
    'path/to/photo2.jpg',
    // Add more photo paths
];
```

Or create an `images` folder and update the paths accordingly.

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #d4af37;  /* Gold color */
    --secondary-color: #8b7355; /* Brown color */
    /* ... other colors */
}
```

### Updating Content

Simply edit the HTML content in `index.html` to change:
- Names
- Love story text
- Family information
- Venue details
- Timeline events

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The RSVP form currently saves data to localStorage. For production use, you'll need to connect it to a backend server.
- The "CHỈ ĐƯỜNG" (Directions) button opens Google Maps with the venue address.
- Placeholder images are used for the album section. Replace them with actual wedding photos.

## License

This is a personal wedding invitation website. Feel free to use and modify for your own wedding!

