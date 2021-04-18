import Link from 'next/link'
import classes from '@modules/UserAvatar.module.scss'

const UserAvatar = (props) => {
  const { user } = props
  return (
    <div className={classes.user}>
      <figure className={`${classes.avatar} image`}>
        <img className="is-rounded" src={user.avatar_url} alt="avatar" />
      </figure>
      <div className={classes.userLink}>
        <Link href="/profile/[id]" as={`/profile/${user.login}`}>
          <a>{user.login}</a>
        </Link>
      </div>
    </div>
  )
}

export default UserAvatar
