export type LocalGithubUser = {
    bio: string,
    name: string,
    blog: string,
    repos: number,
    login: string,
    avatar: string
    company: string,
    created: string,
    twitter: string,
    location: string,
    followers: number,
    following: number,
}

export type GitHubUser = {
    id: number,
    bio: string,
    name: string,
    blog: string,
    login: string,
    company: string,
    location: string,
    followers: number,
    following: number,
    created_at: string,
    avatar_url: string
    public_repos: number,
    twitter_username: string,
}

export type GitHubError = {
    status: string
    message: string,
    documentation_url: string,
}