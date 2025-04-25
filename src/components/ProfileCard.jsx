export default function ProfileCard({ user }) {
  return (
    <div className="bg-[#1A1A1A] rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
      <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-[#0070F3]">
        <img
          src={user.avatar_url || "/placeholder.svg"}
          alt={`${user.login}'s profile picture`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl font-bold text-[#0070F3] mb-3">{user.name || user.login}</h2>
        {user.bio && <p className="text-gray-200 text-lg">{user.bio}</p>}
        {!user.bio && <p className="text-gray-400 italic">Este usuário não possui uma bio.</p>}
      </div>
    </div>
  )
}