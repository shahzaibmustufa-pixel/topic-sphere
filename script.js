// DOM Elements
const themeToggleBtn = document.getElementById('theme-toggle');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

// Initialize Theme
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    if(themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    if(themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

// Toggle Theme
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    themeToggleBtn.innerHTML = newTheme === 'dark' 
      ? '<i class="fa-solid fa-sun"></i>' 
      : '<i class="fa-solid fa-moon"></i>';
  });
}

// Mobile Menu Toggle
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
}

// Article Card Generator
function createArticleCard(article) {
  return `
    <article class="article-card">
      <div class="card-img-wrap">
        <a href="article.html?slug=${article.slug}">
          <img src="${article.image}" alt="${article.title}" class="card-img" loading="lazy">
        </a>
        <span class="card-category">${article.category}</span>
      </div>
      <div class="card-content">
        <div class="card-meta">
          <span><i class="fa-regular fa-calendar-days"></i> ${article.date}</span>
          <span><i class="fa-regular fa-clock"></i> ${article.readTime}</span>
        </div>
        <h3 class="card-title"><a href="article.html?slug=${article.slug}">${article.title}</a></h3>
        <p class="card-excerpt">${article.excerpt}</p>
        <div class="card-footer">
          <span class="author"><i class="fa-regular fa-user"></i> ${article.author}</span>
          <a href="article.html?slug=${article.slug}" class="read-more">Read More <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </article>
  `;
}

// Category Card Generator
function createCategoryCard(category) {
  return `
    <a href="blog.html?category=${encodeURIComponent(category.name)}" class="category-card" style="--cat-color: ${category.color}">
      <i class="fa-solid ${category.icon} category-icon"></i>
      <h3 class="category-name">${category.name}</h3>
    </a>
  `;
}

// Render dynamic sections if elements exist
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  
  // Render Featured Articles
  const featuredContainer = document.getElementById('featured-articles');
  if (featuredContainer && typeof articlesData !== 'undefined') {
    const featuredArticles = articlesData.filter(a => a.featured).slice(0, 3);
    featuredContainer.innerHTML = featuredArticles.map(createArticleCard).join('');
  }
  
  // Render Trending Articles
  const trendingContainer = document.getElementById('trending-articles');
  if (trendingContainer && typeof articlesData !== 'undefined') {
    const trendingArticles = articlesData.filter(a => a.trending).slice(0, 6);
    trendingContainer.innerHTML = trendingArticles.map(createArticleCard).join('');
  }

  // Render Latest Articles
  const latestContainer = document.getElementById('latest-articles');
  if (latestContainer && typeof articlesData !== 'undefined') {
    const latestArticles = articlesData.slice(0, 6); // Just grab first 6
    latestContainer.innerHTML = latestArticles.map(createArticleCard).join('');
  }
  
  // Render Categories
  const categoriesContainer = document.getElementById('categories-grid-container');
  if (categoriesContainer && typeof categoriesData !== 'undefined') {
    categoriesContainer.innerHTML = categoriesData.map(createCategoryCard).join('');
  }
});

// Setup Form Validation for Contact Page
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if(name && email && message) {
      alert('Thank you for contacting us! This is a UI demo, so your message was not actually sent.');
      contactForm.reset();
    } else {
      alert('Please fill out all fields.');
    }
  });
}
