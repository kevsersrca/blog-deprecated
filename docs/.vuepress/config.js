module.exports = {
	head: [
		['link', { rel: 'icon', href: '/gopher.png' }],
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'white' }],
		['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
		['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
	],
	title: 'architecturecoding',
	description: "Learn more info",
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Tutorials', link: '/tutorials/' },
			{ text: 'Tricks', link: '/tricks/' },
		],
		sidebar: 'false',
		logo: '/gopher.png',
		// Assumes GitHub. Can also be a full GitLab url.
		repo: 'vuejs/vuepress',
		// Customising the header label
		// Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
		repoLabel: 'Contribute!',
		// Optional options for generating "Edit this page" link
		// if your docs are in a different repo from your main project:
		docsRepo: 'kevsersrca/blog',
		// if your docs are not at the root of the repo:
		docsDir: 'gh-pages',
		// if your docs are in a specific branch (defaults to 'master'):
		docsBranch: 'master',
		// defaults to false, set to true to enable
		editLinks: true,
		// default value is true. Allows to hide next page links on all pages
		nextLinks: false,
		// default value is true. Allows to hide prev page links on all pages
		prevLinks: false,
		// custom text for edit link. Defaults to "Edit this page"
		editLinkText: 'Help us improve this page!',
	},
	locales: {
		'/': {
			lang: 'en-US', // this will be set as the lang attribute on <html>
			title: 'architecturecoding',
		},
		'/tr/': {
			lang: 'tr-TR',
			title: 'architecturecoding',
		}
	},
};
