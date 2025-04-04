"use client";

export function ThemeEffect() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              // Get theme from localStorage
              var savedTheme = localStorage.getItem('theme');
              
              // If no saved theme, check system preference
              if (!savedTheme) {
                savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
                  ? 'dark' 
                  : 'light';
              }
              
              // Apply theme immediately to prevent flash
              document.documentElement.classList.add(savedTheme);
              document.documentElement.style.colorScheme = savedTheme;
            } catch (e) {
              console.error('Theme initialization failed:', e);
            }
          })();
        `,
      }}
    />
  );
}