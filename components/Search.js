import TextInput from '@components/shared/TextInput'
import Select from '@components/shared/Select'
import LANGUAGES from '@constants/languages.constant'
import classes from '@modules/Search.module.scss'

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
