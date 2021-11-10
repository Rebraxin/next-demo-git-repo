import { getRepoById } from '@services/githubService'
import classes from '@modules/Repo.module.scss'
import ButtonLink from '@components/shared/ButtonLink'
import UserAvatar from '@components/UserAvatar'

const Repo = (props) => {
  const { repo } = props

  return (
    <div>
      <ButtonLink href="/" text="Back" />
      <div className={classes.header}>
        <span>{repo.name}</span>
      </div>
      <UserAvatar user={repo.owner} />
      <div className={classes.description}>{repo.description}</div>
      <div className={classes.language}>{repo.language}</div>
      <ButtonLink
        href={repo.html_url}
        text="Voir sur Github"
        type="dark"
        target="_blank"
        external
      />
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const { query } = ctx
  const res = await getRepoById(query.id)

  return {
    props: { repo: res.data },
  }
}

export default Repo
