import RepoListItem from '@components/RepoListItem'
import classes from '@modules/RepoList.module.scss'

const RepoList = (props) => {
  const { repos, loading } = props

  if (loading) {
    return <img className={classes.loader} src="/img/loader.gif" alt="loader" />
  }

  if (!repos || repos.length === 0) {
    return <span className={classes.message}>Aucun repo trouvé.</span>
  }

  return (
    <div className={classes.repoList}>
      {repos.map((repo) => (
        <RepoListItem key={repo.id} repo={repo} />
      ))}
    </div>
  )
}

export default RepoList
