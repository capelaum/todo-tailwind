export function Footer() {
  return (
    <div
      className="w-full flex justify-center items-center
      bg-gradient-to-r from-purple-600 via-cyan-800 to-blue-600
      text-white
        h-20 mt-8 transition-all duration-300
      "
    >
      Feito com 💜 por{' '}
      <a
        href="https://github.com/capelaum"
        target="_blank"
        rel="noopener noreferrer"
        className="pl-1 hover:underline transition-all duration-300"
      >
        Luís V. Capelletto
      </a>
    </div>
  )
}
