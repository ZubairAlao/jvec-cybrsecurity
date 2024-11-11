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
			'desktop-small': '16px',
			'desktop-medium': '24px',
			'desktop-large': '32px',
	
			// Define tablet spacing (optional)
			'tablet-small': '12px',
			'tablet-medium': '20px',
			'tablet-large': '28px',
	
			// Define mobile spacing
			'mobile-small': '8px',
			'mobile-medium': '16px',
			'mobile-large': '24px',
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

