import styles from './UserCard.module.scss';
import { UserStat } from '../UserStat';
import { LocalGithubUser } from '../../types';
import { UserTitle } from '../UserTitle';
import { UserInfo } from '../UserInfo';

interface UserCardProps extends LocalGithubUser {};

export const UserCard = ({
                             bio,
                             name,
                             blog,
                             repos,
                             login,
                             avatar,
                             twitter,
                             company,
                             created,
                             location,
                             following,
                             followers,
                         }: UserCardProps) => (
    <div className={styles.userCard}>
        <img
            src={avatar}
            alt={login}
            className={styles.avatar}
        />
        <UserTitle
            name={name}
            login={login}
            created={created}
        />
        <p className={`${styles.bio}${bio ? '' : ` ${styles.empty}`}`}>
            {bio || 'This profile has no bio'}
        </p>
        <UserStat
            repos={repos}
            following={following}
            followers={followers}
        />
        <UserInfo
            blog={blog}
            twitter={twitter}
            company={company}
            location={location}
        />
    </div>
);
