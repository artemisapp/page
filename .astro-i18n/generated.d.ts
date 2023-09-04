type DefaultLangCode = "en"
type SupportedLangCode = "de"
type LangCode = DefaultLangCode | SupportedLangCode
type RouteUri = | "/404" | "/contact" | "/" | "/team" 
type RouteParams = {"/404": undefined; "/contact": undefined; "/": undefined; "/team": undefined; }
type TranslationPath = "404" | "hero.title" | "hero.title2" | "hero.description" | "hero.subtitle" | "features.title" | "features.subtitle" | "features.list.0.title" | "features.list.0.description" | "features.list.1.title" | "features.list.1.description" | "features.list.2.title" | "features.list.2.description" | "features.list.3.title" | "features.list.3.description" | "features.list.4.title" | "features.list.4.description" | "features.list.5.title" | "features.list.5.description" | "features.list.6.title" | "features.list.6.description" | "features.list.7.title" | "features.list.7.description" | "features.list.8.title" | "features.list.8.description" | "programmingExercises.header.title" | "programmingExercises.header.subtitle" | "programmingExercises.imageAlt" | "programmingExercises.description" | "programmingExercises.integration.title" | "programmingExercises.integration.description" | "programmingExercises.integration.platforms" | "programmingExercises.integration.standalone" | "programmingExercises.assessment.title" | "programmingExercises.assessment.description" | "programmingExercises.assessment.automate" | "programmingExercises.assessment.scale" | "programmingExercises.programmingLanguages" | "examMode.header.title" | "examMode.header.subtitle" | "examMode.imageAlt" | "examMode.statsImageAlt" | "examMode.assessmentImageAlt" | "examMode.description" | "examMode.statistics.title" | "examMode.statistics.description" | "examMode.statistics.usingMetrics" | "examMode.statistics.studentFeedback" | "examMode.automaticAssessment.title" | "examMode.automaticAssessment.description" | "examMode.automaticAssessment.automate" | "examMode.automaticAssessment.quality" | "cta.title" | "cta.subtitle" | "cta.button" | "team.website" | "team.title" | "team.subtitle" | "team.management.title" | "team.management.description" | "team.developers.title" | "team.developers.description" | "contact.title" | "contact.subtitle" | "contact.email" | "contact.bug" | "contact.feature" | "footer.madeby" | "footer.copyright" | "meta.description"
type TranslationOptions = { "404": {} | undefined; "hero.title": {} | undefined; "hero.title2": {} | undefined; "hero.description": {} | undefined; "hero.subtitle": {} | undefined; "features.title": {} | undefined; "features.subtitle": {} | undefined; "features.list.0.title": {} | undefined; "features.list.0.description": {} | undefined; "features.list.1.title": {} | undefined; "features.list.1.description": {} | undefined; "features.list.2.title": {} | undefined; "features.list.2.description": {} | undefined; "features.list.3.title": {} | undefined; "features.list.3.description": {} | undefined; "features.list.4.title": {} | undefined; "features.list.4.description": {} | undefined; "features.list.5.title": {} | undefined; "features.list.5.description": {} | undefined; "features.list.6.title": {} | undefined; "features.list.6.description": {} | undefined; "features.list.7.title": {} | undefined; "features.list.7.description": {} | undefined; "features.list.8.title": {} | undefined; "features.list.8.description": {} | undefined; "programmingExercises.header.title": {} | undefined; "programmingExercises.header.subtitle": {} | undefined; "programmingExercises.imageAlt": {} | undefined; "programmingExercises.description": {} | undefined; "programmingExercises.integration.title": {} | undefined; "programmingExercises.integration.description": {} | undefined; "programmingExercises.integration.platforms": {} | undefined; "programmingExercises.integration.standalone": {} | undefined; "programmingExercises.assessment.title": {} | undefined; "programmingExercises.assessment.description": {} | undefined; "programmingExercises.assessment.automate": {} | undefined; "programmingExercises.assessment.scale": {} | undefined; "programmingExercises.programmingLanguages": {} | undefined; "examMode.header.title": {} | undefined; "examMode.header.subtitle": {} | undefined; "examMode.imageAlt": {} | undefined; "examMode.statsImageAlt": {} | undefined; "examMode.assessmentImageAlt": {} | undefined; "examMode.description": {} | undefined; "examMode.statistics.title": {} | undefined; "examMode.statistics.description": {} | undefined; "examMode.statistics.usingMetrics": {} | undefined; "examMode.statistics.studentFeedback": {} | undefined; "examMode.automaticAssessment.title": {} | undefined; "examMode.automaticAssessment.description": {} | undefined; "examMode.automaticAssessment.automate": {} | undefined; "examMode.automaticAssessment.quality": {} | undefined; "cta.title": {} | undefined; "cta.subtitle": {} | undefined; "cta.button": {} | undefined; "team.website": {} | undefined; "team.title": {} | undefined; "team.subtitle": {} | undefined; "team.management.title": {} | undefined; "team.management.description": {} | undefined; "team.developers.title": {} | undefined; "team.developers.description": {} | undefined; "contact.title": {} | undefined; "contact.subtitle": {} | undefined; "contact.email": {} | undefined; "contact.bug": {} | undefined; "contact.feature": {} | undefined; "footer.madeby": {} | undefined; "footer.copyright": {} | undefined; "meta.description": {} | undefined; }

declare module "astro-i18n" {
	export * from "astro-i18n/"
	
	export function l<Uri extends RouteUri>(
		route: Uri | string & {},
		...args: Uri extends keyof RouteParams
			? undefined extends RouteParams[Uri]
				? [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
				: [params: RouteParams[Uri], targetLangCode?: LangCode, routeLangCode?: LangCode]
			: [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
	): string
	
	export function t<Path extends TranslationPath>(
		path: Path | string & {},
		...args: undefined extends TranslationOptions[Path]
			? [options?: keyof TranslationOptions extends Path ? Record<string, unknown> : TranslationOptions[Path], langCode?: LangCode]
			: [options: TranslationOptions[Path], langCode?: LangCode]
	): string
	
	export function extractRouteLangCode(route: string): LangCode | undefined
	
	type Translation = string | { [translationKey: string]: string | Translation }
	type Translations = { [langCode: string]: Record<string, Translation> }
	type RouteTranslations = { [langCode: string]: Record<string, string> }
	type InterpolationFormatter = (value: unknown, ...args: unknown[]) => string
	class AstroI18n {
		defaultLangCode: DefaultLangCode
		supportedLangCodes: SupportedLangCode[]
		showDefaultLangCode: boolean
		translations: Translations
		routeTranslations: RouteTranslations
		get langCodes(): LangCode[]
		get langCode(): LangCode
		set langCode(langCode: LangCode)
		get formatters(): Record<string, InterpolationFormatter>
		init(Astro: { url: URL }, formatters?: Record<string, InterpolationFormatter>): void
		addTranslations(translations: Translations): void
		addRouteTranslations(routeTranslations: RouteTranslations): void
		getFormatter(name: string): InterpolationFormatter | undefined
		setFormatter(name: string, formatter: InterpolationFormatter): void
		deleteFormatter(name: string): void
	}
	export const astroI18n: AstroI18n
}
