import React from 'react'
import Link from 'next/link'
import { FaStar, FaCodeBranch } from 'react-icons/fa'
import UserAvatar from './userAvatar'
import classes from '../modules/repoListItem.module.scss'

const RepoListItem = ({ repo }) => {
  const ellipsis = (txt) => {
    if (txt && txt.length > 100) {
      return txt.slice(0, 100) + '...'
    }

    return txt
  }

  return (
    <div className={`${classes.repoListItem} box`}>
      <div className={classes.repoName}>
        <Link href="/repo/[id]" as={`/repo/${repo.id}`}>
          <a>{repo.name}</a>
        </Link>
      </div>
      <UserAvatar user={repo.owner} />
      <p className={classes.description}>{ellipsis(repo.description)}</p>
      <div className={classes.footer}>
        <div className={classes.counters}>
          <div className={classes.counter}>
            <FaStar />
            <span>{repo.stargazers_count}</span>
          </div>
          <div className={classes.counter}>
            <FaCodeBranch />
            <span>{repo.forks_count}</span>
          </div>
        </div>
        <div className={classes.language}>
          <span>{repo.language}</span>
        </div>
      </div>
    </div>
  )
}

export default RepoListItem
