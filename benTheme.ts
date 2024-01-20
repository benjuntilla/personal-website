import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const benTheme: CustomThemeConfig = {
    name: 'benTheme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Metropolis, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		  "--theme-font-family-heading": `IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "0px",
		"--theme-rounded-container": "0px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #613583
		"--color-primary-50": "231 225 236", // #e7e1ec
		"--color-primary-100": "223 215 230", // #dfd7e6
		"--color-primary-200": "216 205 224", // #d8cde0
		"--color-primary-300": "192 174 205", // #c0aecd
		"--color-primary-400": "144 114 168", // #9072a8
		"--color-primary-500": "97 53 131", // #613583
		"--color-primary-600": "87 48 118", // #573076
		"--color-primary-700": "73 40 98", // #492862
		"--color-primary-800": "58 32 79", // #3a204f
		"--color-primary-900": "48 26 64", // #301a40
		// secondary | #26a269
		"--color-secondary-50": "222 241 233", // #def1e9
		"--color-secondary-100": "212 236 225", // #d4ece1
		"--color-secondary-200": "201 232 218", // #c9e8da
		"--color-secondary-300": "168 218 195", // #a8dac3
		"--color-secondary-400": "103 190 150", // #67be96
		"--color-secondary-500": "38 162 105", // #26a269
		"--color-secondary-600": "34 146 95", // #22925f
		"--color-secondary-700": "29 122 79", // #1d7a4f
		"--color-secondary-800": "23 97 63", // #17613f
		"--color-secondary-900": "19 79 51", // #134f33
		// tertiary | #f5f3ed
		"--color-tertiary-50": "254 253 252", // #fefdfc
		"--color-tertiary-100": "253 253 251", // #fdfdfb
		"--color-tertiary-200": "253 252 251", // #fdfcfb
		"--color-tertiary-300": "251 250 248", // #fbfaf8
		"--color-tertiary-400": "248 247 242", // #f8f7f2
		"--color-tertiary-500": "245 243 237", // #f5f3ed
		"--color-tertiary-600": "221 219 213", // #dddbd5
		"--color-tertiary-700": "184 182 178", // #b8b6b2
		"--color-tertiary-800": "147 146 142", // #93928e
		"--color-tertiary-900": "120 119 116", // #787774
		// success | #84cc16
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #D41976
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #3d3846
		"--color-surface-50": "226 225 227", // #e2e1e3
		"--color-surface-100": "216 215 218", // #d8d7da
		"--color-surface-200": "207 205 209", // #cfcdd1
		"--color-surface-300": "177 175 181", // #b1afb5
		"--color-surface-400": "119 116 126", // #77747e
		"--color-surface-500": "61 56 70", // #3d3846
		"--color-surface-600": "55 50 63", // #37323f
		"--color-surface-700": "46 42 53", // #2e2a35
		"--color-surface-800": "37 34 42", // #25222a
		"--color-surface-900": "30 27 34", // #1e1b22

	}
}
