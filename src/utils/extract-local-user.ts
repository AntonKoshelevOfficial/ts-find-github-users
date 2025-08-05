import { GitHubUser, LocalGithubUser } from '../types';

export const extractLocalUser = (user: GitHubUser): LocalGithubUser => ({
    bio: user.bio,
    name: user.name,
    blog: user.blog,
    repos: user.public_repos,
    login: user.login,
    avatar: user.avatar_url,
    company: user.company,
    created: user.created_at,
    twitter: user.twitter_username,
    location: user.location,
    followers: user.followers,
    following: user.following,
})