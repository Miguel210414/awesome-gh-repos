// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import repos_all from './cached/nav-repos-all.json';
import repos_mru from './cached/nav-repos-mru.json';
import repos_lng from './cached/nav-repos-lang.jsx';
import stars_all from './cached/nav-stars-all.json';
import stars_mru from './cached/nav-stars-mru.json';
import stars_lng from './cached/nav-stars-lang.jsx';

// https://astro.build/config
export default defineConfig({
	site: 'https://octocat.github.io',
	base: 'awesome_gh_repos',
	integrations: [
		starlight({
			customCss: [ './src/assets/styles.css' ],
			plugins: [
			],
			title: '<awesome-gh-repos>',
			social: [
		        ],
			components: {
				PageSidebar: './src/components/PageSidebar.astro',
				SocialIcons: './src/components/SocialIcons.astro',
				Search: './src/components/Search.astro',
				Sidebar: './src/components/Sidebar.astro',
			},
			sidebar: [
				{
				  slug: '',
				},
				{
				  label: "OpenSource Projects",
				  items: [
					repos_mru,
					repos_all,
					repos_lng,
				  ],
				},
				{
				  label: "Starred Repositories",
				  items: [
					stars_mru,
					stars_all,
					stars_lng,
				  ],
				},
			],
		}),
	],
});
