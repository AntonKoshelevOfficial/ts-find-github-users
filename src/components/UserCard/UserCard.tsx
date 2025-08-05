import styles from './UserCard.module.scss';
import { UserStat } from '../UserStat';
import { LocalGithubUser } from '../../types';
import {UserTitle} from "../UserTitle";

interface UserCardProps extends LocalGithubUser {};

export const UserCard = ({
                             bio,
                             name,
                             repos,
                             login,
                             avatar,
                             created,
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
        <p className={`${styles.bio}${bio ? '' : `${styles.empty}`}`}>
            {bio || 'This profile has no bio'}
        </p>
        <UserStat
            repos={repos}
            following={following}
            followers={followers}
        />
    </div>
);
