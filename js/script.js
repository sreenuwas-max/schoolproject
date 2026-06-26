// ============================================
// SCHOOL PROJECT - MAIN JAVASCRIPT
// ============================================

// Navigation Toggle
function toggleNav(sectionId) {
  const chapters = document.getElementById(sectionId);
  const title = chapters.previousElementSibling;
  
  // Close other sections
  document.querySelectorAll('.nav-chapters').forEach(ch => {
    if (ch.id !== sectionId) {
      ch.classList.remove('show');
      ch.previousElementSibling.classList.remove('active');
    }
  });
  
  chapters.classList.toggle('show');
  title.classList.toggle('active');
}

// Show Chapter Content
function showChapter(chapterId) {
  // Hide all chapters
  document.querySelectorAll('.chapter-content').forEach(ch => {
    ch.classList.remove('active');
  });
  
  // Show selected chapter
  const target = document.getElementById(chapterId);
  if (target) {
    target.classList.add('active');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  // Update active link
  document.querySelectorAll('.nav-chapter-link').forEach(link => {
    link.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Update header
  const header = document.querySelector('.content-header h1');
  if (header && target) {
    const title = target.querySelector('h2');
    if (title) header.textContent = title.textContent;
  }
  
  // Close mobile sidebar
  document.querySelector('.sidebar').classList.remove('open');
}

// Mobile sidebar toggle
function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('open');
}

// Show quiz answers
function showAnswers(btn) {
  const answers = btn.previousElementSibling.querySelector('.quiz-answers') || 
                  btn.parentElement.querySelector('.quiz-answers');
  if (answers) {
    answers.style.display = answers.style.display === 'block' ? 'none' : 'block';
    btn.textContent = answers.style.display === 'block' ? 'Hide Answers' : 'Show Answers';
  }
}

// Search functionality
function searchContent(query) {
  query = query.toLowerCase().trim();
  if (query.length < 2) {
    document.querySelectorAll('.chapter-content').forEach(ch => {
      ch.style.display = '';
    });
    return;
  }
  
  document.querySelectorAll('.chapter-content').forEach(ch => {
    const text = ch.textContent.toLowerCase();
    if (text.includes(query)) {
      ch.style.display = 'block';
      ch.classList.add('active');
    } else {
      ch.style.display = 'none';
      ch.classList.remove('active');
    }
  });
}

// Back to top
window.addEventListener('scroll', function() {
  const btn = document.querySelector('.back-to-top');
  if (btn) {
    if (window.scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }
});

// Initialize - show first chapter on load
document.addEventListener('DOMContentLoaded', function() {
  const firstChapter = document.querySelector('.chapter-content');
  if (firstChapter) {
    firstChapter.classList.add('active');
  }
  
  // Search input
  const searchInput = document.querySelector('.search-box input');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      searchContent(this.value);
    });
  }
});
