import React, { useState } from 'react';
import { Container } from './components/Container';
import { TheHeader } from './components/TheHeader';
import { Search } from './components/Search';
import { UserCard } from "./components/UserCard";
import { defaultUser } from 'mock';
import { GitHubError, GitHubUser, LocalGithubUser } from './types';
import { isGitHubUser } from './utils/typeguards';
import { extractLocalUser } from './utils/extract-local-user';

const BASE_URL = 'https://api.github.com/users/';

function App() {
    const [ user, setUser ] = useState<LocalGithubUser | null>(defaultUser);

    const fetchUsers = async (username: string) => {
        const url = `${BASE_URL}${username}`;

        const response = await fetch(url);
        const user = await response.json() as GitHubUser | GitHubError;

        if (isGitHubUser(user)) {
            setUser(extractLocalUser(user));
        } else {
            setUser(null)
        }
    }

    return (
        <Container>
            <TheHeader/>
            <Search isError={!user} onSubmit={fetchUsers}/>
            {user && (<UserCard {...user}/>)}
        </Container>
    );
}

export default App;
