# Automatically generate a complete website with your GitHub Stars and GitHub Projects.

Not just generates markdown of repository lists. This actually generates a full static website
that allows you to search on all your starred repositories' READMEs.

## Features

- Works with no changes at all, just configure GitHub Pages and browse your site.
- Uses [Starlight](https://starlight.astro.build) to build a static site.
- No API overload. It uses only two GitHub API calls to retrieve all data. One for your repositories, another for all starred repos.
- Generating the web pages and classification nav-menus is **fast** using `jq` and unix tools instead of leaving that to js/python.
- Does **NOT** depend on __third-party__ code. Once you clone, all code is yours.
  No risk of depending on others' code that would read your secrets in the future.
- Automatically classifies projects and starred repos by language.
- Searchable content. Never again wonder where that repo you starred long ago is.
- Action runs nightly or by manual trigger.
- Customizable. Follow [Starlight](https://starlight.astro.build)/[Astro](https://docs.astro.build) docs to customize your site as you want.
- GitHub Actions keeps cache for incremental builds.

## Screenshots

<img width="1536" height="864" alt="Image" src="https://github.com/user-attachments/assets/d248f875-4a94-4530-bffb-7101c1c98315" />

<img width="1484" height="741" alt="Image" src="https://github.com/user-attachments/assets/374028e6-4a0f-4d15-b929-5f70ff20fed5" />

<img width="1504" height="751" alt="Image" src="https://github.com/user-attachments/assets/94b42ca2-4479-466e-88c5-84b334e96a23" />

## Example

This repository [actions](https://github.com/vic/awesome-gh-repos/actions) deploys to the [demo website](https://vic.github.io/awesome-gh-repos).
The first generation of this website included [vic](https://github.com/vic)'s _200_ owned repositories and his _3926_ starred repositories, and generated _4003_ html pages. And it loads **fast** even when the static build took 20m to generate. If you have lots of starred repos, just be patient, the action will finish and your website will be fully optimized for fast loading and search.

## Usage

Just clone or use this repository as template, be sure to configure GitHub Pages on your repository.

## Setup

Be sure to keep all secret tokens private, never share them. This is the reason for this project, you should not depend on code loaded from third-party registries to have access to your GitHub tokens.

### Step 1: Use this repo as template

First build will fail due to not having GitHub Pages enabled, that's okay. Let's fix that.

### Step 2: Enable GitHub Pages environment on your repo.

Go to your repository `Settings` page, and under `Pages` enable `GitHub Actions`.

<img width="1144" height="906" alt="image" src="https://github.com/user-attachments/assets/543925d5-fb42-46d0-b003-0801e1d32564" />

### Step 3: Create a Fine-grained Personal Access Token for Pages deployment.

Go to [Your New Personal Access Token Settings](https://github.com/settings/personal-access-tokens/new)


Make sure you use **Fine-Grained** access token enabled _only_ for **your repository** and _only_ for `Pages` read-write permission.


<img width="1107" height="738" alt="image" src="https://github.com/user-attachments/assets/f49d08ce-615b-4690-8a05-c8ad7e309855" />

### Step 4: Use the token to create `GH_AWESOME_REPOS` secret on the `github-pages` environment of your repository.

<img width="1718" height="1060" alt="image" src="https://github.com/user-attachments/assets/5513f2b8-a230-454e-8554-6b9d1820c0ad" />
<img width="1942" height="628" alt="image" src="https://github.com/user-attachments/assets/216e3929-d341-42d9-88a3-7cf3c8ad786a" />


### Step 5: Go to your Actions and trigger `gh-pages` manually.

After the **`GH_AWESOME_REPOS`** secret is available on your `github-pages` environment, just trigger the action manually or push some change.



