export default function ErrorMessage({ message }) {
  return (
    <div className="bg-[#1A1A1A] rounded-lg p-6 text-center">
      <p className="text-[#FF0000] text-lg font-medium">{message}</p>
    </div>
  )
}
