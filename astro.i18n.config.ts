import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
	defaultLangCode: "en",
	supportedLangCodes: ["de"],
	showDefaultLangCode: false,
	translations: {
		"en": "i18n/en.json",
		"de": "i18n/de.json",
	},
})
