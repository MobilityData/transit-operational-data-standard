// Accessibility fixes for Material for MkDocs
document.addEventListener('DOMContentLoaded', function() {
  
  // Fix search dialog ARIA accessibility
  const searchDialog = document.querySelector('.md-search');
  if (searchDialog) {
    searchDialog.setAttribute('aria-label', 'Site search dialog');
    searchDialog.setAttribute('role', 'dialog');
    
    // Also fix the search input if it exists
    const searchInput = searchDialog.querySelector('.md-search__input');
    if (searchInput && !searchInput.getAttribute('aria-label')) {
      searchInput.setAttribute('aria-label', 'Search the documentation');
    }
  }
  
  // Fix search overlay if it exists
  const searchOverlay = document.querySelector('.md-search__overlay');
  if (searchOverlay) {
    searchOverlay.setAttribute('aria-hidden', 'true');
  }
  
  // Fix search form
  const searchForm = document.querySelector('.md-search__form');
  if (searchForm) {
    searchForm.setAttribute('role', 'search');
  }
});
