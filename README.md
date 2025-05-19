# Barsuk Studio Website

This is the official website for Barsuk Studio, showcasing mobile games with screenshots and store links.

## Features

- Responsive design that works on all device sizes
- No dependencies on Bootstrap or other frameworks
- Clean, custom CSS using Flexbox and Grid
- Showcase of mobile games with screenshots and store links

## Local Development

To test the website locally, you can use the provided script:

1. Make the script executable (if not already):
   ```
   chmod +x start_local_server.sh
   ```

2. Run the script:
   ```
   ./start_local_server.sh
   ```

3. Open your browser and navigate to: http://localhost:8000

Alternatively, you can use any of these commands directly:

- Using Python 3: `python3 -m http.server`
- Using Python 2: `python -m SimpleHTTPServer`
- Using Node.js: `npx http-server`

## File Structure

- `index.html` - Main page showing all games
- `game.html`, `gym.html`, etc. - Individual game pages
- `css/main.css` - Main CSS file with responsive grid system
- `css/game.css` - CSS specific to game pages
- `img/` - Directory containing all images

## CSS Framework

The website uses a custom CSS framework with:

- A 12-column grid system (similar to Bootstrap)
- Responsive breakpoints at 576px, 768px, and 992px
- Flexbox-based layout utilities
- Mobile-first approach

## Browser Compatibility

The website is compatible with:
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers 