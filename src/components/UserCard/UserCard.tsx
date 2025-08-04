import styles from './UserCard.module.scss';
import { UserStat } from '../UserStat';
import { LocalGithubUser } from '../../types';

interface UserCardProps extends LocalGithubUser {}

export const UserCard = ({
                             repos,
                             following,
                             followers,
                         }: UserCardProps) => (
    <div className={styles.userCard}>
        <UserStat
            repos={repos}
            following={following}
            followers={followers}
        />
    </div>
);
