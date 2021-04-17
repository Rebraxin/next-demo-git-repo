import React from 'react'
import TextInput from './shared/textInput'
import Select from './shared/select'
import LANGUAGES from '../constants/languages.constant'
import classes from '../modules/search.module.scss'

const Search = (props) => {
  const { language, searchText, onSearchTextChange, onLanguageChange } = props

  const languages = [{ value: '', label: 'All' }, ...LANGUAGES]

  return (
    <div className={classes.search}>
      <TextInput
        className={classes.searchInput}
        label="Repo Search"
        type="text"
        value={searchText}
        onChange={(value) => onSearchTextChange(value)}
      />
      <Select
        className={classes.languageSelect}
        label="Language"
        value={language}
        options={languages}
        onChange={(value) => onLanguageChange(value)}
      />
    </div>
  )
}

export default Search
