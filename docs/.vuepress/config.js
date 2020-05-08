module.exports = {
	plugins: [
		['minimal-analytics', {ga: 'UA-145931208-1'}],
		'@vuepress/last-updated',
		{
			transformer: (timestamp, lang) => {
				// Don't forget to install moment yourself
				const moment = require('moment')
				moment.locale(lang)
				return moment(timestamp).fromNow()
			}
		},
		'@vuepress/pwa',{
			serviceWorker: true,
			updatePopup: true
		},
		'@vuepress/google-analytics',{
        		'ga': 'UA-145931208-1'
      		}
	],
	head: [
		['link', { rel: 'stylesheet', href: '/octicons.css' }],
		['link', { rel: 'icon', href: '/gopher.png' }],
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'google-site-verification', content: 'tBy_B1L3z31YSdMNxFcSPKZYJZKXidfUrpM0n2arV34' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'white' }],
		['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
		['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
		['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oxanium&display=swap'}],
		['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Dancing+Script&display=swap'}],

		['link', { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'}],
	],
	title: 'architecturecoding',
	description: "Devops | Golang | Python | SRE",
	themeConfig: {
		lastUpdated: 'Last Updated',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Tutorials', link: '/tutorials/' },
			{ text: 'Tricks', link: '/tricks/' },
			{ text: 'Series', link: '/series/' },
		],
		sidebar: 'false',
		logo: '/gopher.png',
		// Assumes GitHub. Can also be a full GitLab url.
		repo: 'kevsersrca/blog',
		// Customising the header label
		// Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
		repoLabel: 'Contribute!',
		// Optional options for generating "Edit this page" link
		// if your docs are in a different repo from your main project:
		docsRepo: 'kevsersrca/blog',
		// if your docs are not at the root of the repo:
		docsDir: 'docs',
		// if your docs are in a specific branch (defaults to 'master'):
		docsBranch: 'master',
		// defaults to false, set to true to enable
		editLinks: true,
		// default value is true. Allows to hide next page links on all pages
		nextLinks: true,
		// default value is true. Allows to hide prev page links on all pages
		prevLinks: true,
		// custom text for edit link. Defaults to "Edit this page"
		editLinkText: 'Help us improve this page!',
	},
	locales: {
		'/': {
			lang: 'en-US', // this will be set as the lang attribute on <html>
			title: 'architecturecoding',
		},
	},
};
