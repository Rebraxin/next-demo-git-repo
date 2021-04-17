import React from 'react'
import { getProfileById } from '../../services/githubService'
import classes from '../../modules/profile.module.scss'
import ButtonLink from '../../components/shared/buttonLink'

const Profile = (props) => {
  const { profile } = props

  return (
    <div>
      <ButtonLink href="/" text="Back" />
      <h3 className="is-size-3">{profile.name}</h3>
      {profile.bio && <div className={classes.txt}>{profile.bio}</div>}
      {profile.email && <div className={classes.txt}>{profile.email}</div>}
      {profile.blog && <div className={classes.txt}>{profile.blog}</div>}
      {profile.location && (
        <div className={classes.txt}>{profile.location}</div>
      )}
      <div className={classes.counters}>
        <div>Followers: {profile.followers}</div>
        <div>Following: {profile.following}</div>
      </div>
      <ButtonLink
        href={profile.html_url}
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
  const res = await getProfileById(query.id)

  return {
    props: { profile: res.data },
  }
}

export default Profile
