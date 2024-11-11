/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		container: {
  			center: 'true',
  			padding: '1.25rem',
  			screens: {
  				lg: '1240px'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		spacing: {
			// Define spacing for desktop as default
			'desktop-small': '28px',
			'desktop-medium': '60px',
			'desktop-large': '90px',
	
			// Define tablet spacing (optional)
			'tablet-small': '18px',
			'tablet-medium': '48px',
			'tablet-large': '60px',
	
			// Define mobile spacing
			'mobile-small': '12px',
			'mobile-medium': '16px',
			'mobile-large': '32px',
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

