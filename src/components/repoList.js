import React from 'react'
import RepoListItem from './repoListItem'
import classes from '../modules/repoList.module.scss'

const RepoList = (props) => {
  const { repos, loading } = props

  if (loading) {
    return <img className={classes.loader} src="/img/loader.gif" alt="loader" />
  }

  if (!repos || repos.length === 0) {
    return <span className={classes.message}>No repositories found.</span>
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
