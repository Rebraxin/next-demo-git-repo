import { useState } from 'react'
import RepoList from '@components/RepoList'
import Search from '@components/Search'
import { NextSeo } from 'next-seo'
import { searchRepos } from '@services/githubService'
import { getRandomWord } from '@helpers/randowWord.helper'
import classes from '@modules/Index.module.scss'

const Index = (props) => {
  const [searchText, setSearchText] = useState(props.searchText)
  const [language, setLanguage] = useState('')
  const [repos, setRepos] = useState(props.repos)
  const [loading, setLoading] = useState(false)

  const onSearchTextChange = (text) => {
    setSearchText(text)
    if (text) {
      loadRepos(text, language)
    }
  }

  const onLanguageChange = (lang) => {
    setLanguage(lang)
    if (searchText) {
      loadRepos(searchText, lang)
    }
  }

  const loadRepos = async (searchText, language) => {
    setLoading(true)
    const res = await searchRepos(searchText, language)
    if (res && res.data) {
      setRepos(res.data.items)
      setLoading(false)
    }
  }

  return (
    <div className={classes.container}>
      <h2>retest</h2>
      <NextSeo
        title="Page d'accueil SEO"
        description="A short description goes here."
      />
      <img className={classes.logo} src="/img/study.svg" alt="student" />
      <Search
        searchText={searchText}
        language={language}
        onSearchTextChange={onSearchTextChange}
        onLanguageChange={onLanguageChange}
      />
      <RepoList loading={loading} repos={repos} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const searchText = getRandomWord()
  const res = await searchRepos(searchText)
  return {
    props: {
      searchText,
      repos: res.data.items,
    },
  }
}

export default Index
