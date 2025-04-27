import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				divine: {
					50: 'hsl(var(--divine-50))',
					100: 'hsl(var(--divine-100))',
					200: 'hsl(var(--divine-200))',
					300: 'hsl(var(--divine-300))',
					400: 'hsl(var(--divine-400))',
					500: 'hsl(var(--divine-500))',
					600: 'hsl(var(--divine-600))',
					700: 'hsl(var(--divine-700))',
					800: 'hsl(var(--divine-800))',
					900: 'hsl(var(--divine-900))',
				},
				saffron: {
					50: 'hsl(var(--saffron-50))',
					100: 'hsl(var(--saffron-100))',
					200: 'hsl(var(--saffron-200))',
					300: 'hsl(var(--saffron-300))',
					400: 'hsl(var(--saffron-400))',
					500: 'hsl(var(--saffron-500))',
					700: 'hsl(var(--saffron-700))',
					900: 'hsl(var(--saffron-900))',
				},
				golden: {
					50: 'hsl(var(--golden-50))',
					100: 'hsl(var(--golden-100))',
					300: 'hsl(var(--golden-300))',
					500: 'hsl(var(--golden-500))',
					700: 'hsl(var(--golden-700))',
					900: 'hsl(var(--golden-900))',
				},
				// Scripture-specific theme colors
				gita: {
					light: 'hsl(var(--gita-light))',
					medium: 'hsl(var(--gita-medium))',
					dark: 'hsl(var(--gita-dark))',
				},
				bible: {
					light: 'hsl(var(--bible-light))',
					medium: 'hsl(var(--bible-medium))',
					dark: 'hsl(var(--bible-dark))',
				},
				quran: {
					light: 'hsl(var(--quran-light))',
					medium: 'hsl(var(--quran-medium))',
					dark: 'hsl(var(--quran-dark))',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0) translateX(0)' },
					'25%': { transform: 'translateY(-10px) translateX(5px)' },
					'50%': { transform: 'translateY(0) translateX(10px)' },
					'75%': { transform: 'translateY(10px) translateX(5px)' }
				},
				'pulse-gentle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'background-shine': {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' }
				},
				'blur-in': {
					'0%': { filter: 'blur(5px)', opacity: '0' },
					'100%': { filter: 'blur(0)', opacity: '1' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 15s ease-in-out infinite',
				'pulse-gentle': 'pulse-gentle 4s ease-in-out infinite',
				'fade-in': 'fade-in 0.8s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'background-shine': 'background-shine 8s ease-in-out infinite alternate',
				'blur-in': 'blur-in 1s ease-out',
				'rotate-slow': 'rotate-slow 20s linear infinite'
			},
			backgroundImage: {
				'gradient-divine': 'linear-gradient(to right, hsl(var(--saffron-300)), hsl(var(--golden-500)))',
				'gradient-divine-subtle': 'linear-gradient(to right, hsl(var(--saffron-50)), hsl(var(--golden-100)))',
				'gradient-divine-radial': 'radial-gradient(circle, hsl(var(--saffron-300)) 0%, hsl(var(--golden-500)) 100%)',
				'gradient-divine-conic': 'conic-gradient(from 225deg, hsl(var(--golden-700)), hsl(var(--saffron-500)), hsl(var(--golden-300)), hsl(var(--golden-300)), hsl(var(--golden-700)))',
				'gradient-gita': 'linear-gradient(to right, hsl(var(--gita-light)), hsl(var(--gita-dark)))',
				'gradient-bible': 'linear-gradient(to right, hsl(var(--bible-light)), hsl(var(--bible-dark)))',
				'gradient-quran': 'linear-gradient(to right, hsl(var(--quran-light)), hsl(var(--quran-dark)))',
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(20px)',
			},
			boxShadow: {
				'divine-sm': '0 4px 20px rgba(var(--saffron-500-rgb), 0.1)',
				'divine-md': '0 8px 30px rgba(var(--saffron-500-rgb), 0.15)',
				'divine-lg': '0 12px 40px rgba(var(--saffron-500-rgb), 0.2)',
				'divine-inner': 'inset 0 2px 6px rgba(var(--saffron-500-rgb), 0.1)',
				'gita': '0 8px 30px rgba(var(--gita-rgb), 0.2)',
				'bible': '0 8px 30px rgba(var(--bible-rgb), 0.2)',
				'quran': '0 8px 30px rgba(var(--quran-rgb), 0.2)',
			},
			fontFamily: {
				'divine': ['Cinzel', 'serif'],
				'body': ['Nunito', 'sans-serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
