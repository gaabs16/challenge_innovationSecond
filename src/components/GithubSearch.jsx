"use client"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchGitHubUser } from "../services/github-api"
import SearchBar from './SearchBar';
import ProfileCard from "./ProfileCard"
import ErrorMessage from "./ErrorMessage"
import LoadingIndicator from "./LoadingIndicator"
import GitHubLogo from "./GithubLogo"

export default function GitHubSearch() {
  const [username, setUsername] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const {
    data: user,
    isLoading,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["githubUser", searchTerm],
    queryFn: () => fetchGitHubUser(searchTerm),
    enabled: !!searchTerm,
  })

  const handleSearch = (term) => {
    if (term.trim()) {
      setSearchTerm(term.trim())
    }
  }

  return (
    <div className="w-full max-w-xl flex flex-col items-center rounded-lg">
      <div className="mb-10 flex items-center">
        <GitHubLogo className="w-14 h-14 mr-4" />
        <h1 className="text-4xl font-bold text-white">Perfil GitHub</h1>
      </div>

      <SearchBar
        value={username}
        onChange={setUsername}
        onSearch={() => handleSearch(username)}
        placeholder="Digite um usuário do Github"
        isLoading={isFetching}
      />

      <div className="w-full mt-8">
        {isLoading && <LoadingIndicator />}

        {error && !isLoading && (
          <ErrorMessage message="Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente" />
        )}

        {user && !isLoading && !error && <ProfileCard user={user} />}
      </div>
    </div>
  )
}