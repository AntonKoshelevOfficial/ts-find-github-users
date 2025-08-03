import React, { useRef } from 'react';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';

import styles from './Search.module.scss';
import {Button} from "../Button";

interface SearchProps {
    isError: boolean,
    onSubmit: (text: string) => void,
};

type FormFields = {
    username: HTMLInputElement,
}

export const Search = ({isError, onSubmit}: SearchProps) =>  {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
        event.preventDefault();
        const text = event.currentTarget.username.value;

        if (text) {
            onSubmit(text);
            event.currentTarget.reset();
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            autoComplete={'off'}
        >
            <div className={styles.search}>
                <label
                    htmlFor={'search'}
                    className={styles.label}
                >
                    <SearchIcon />
                </label>
                <input
                    id={'search'}
                    type={'text'}
                    name={'username'}
                    className={styles.textField}
                    placeholder={'Search GitHub username...'}
                />
                {isError && <div className={styles.error}>No result</div>}
                <Button>Search</Button>
            </div>
        </form>
    );
}