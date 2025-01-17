import clsx from 'clsx'

interface PasswordStrengthProgressBar {
  strength: string
}

export function PasswordStrengthProgressBar({
  strength,
}: PasswordStrengthProgressBar) {
  const getProgressBarColors = () => {
    if (strength === 'weak') {
      return ['bg-red-500', 'bg-gray-200', 'bg-gray-200']
    } else if (strength === 'medium') {
      return ['bg-yellow-500', 'bg-yellow-500', 'bg-gray-200']
    } else if (strength === 'strong') {
      return ['bg-green', 'bg-green', 'bg-green']
    } else {
      return ['bg-gray-200', 'bg-gray-200', 'bg-gray-200']
    }
  }

  return (
    <div className="mt-2 flex items-center">
      {getProgressBarColors().map((color, index) => (
        <div key={index} className={clsx('mr-1 h-2 w-40 rounded', color)}></div>
      ))}
    </div>
  )
}
