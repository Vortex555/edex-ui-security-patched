// Preload script to ensure @electron/remote is available before renderer loads
const { ipcRenderer } = require('electron');

// Wait for remote to be ready
window.addEventListener('DOMContentLoaded', () => {
    // @electron/remote should be available now
});
