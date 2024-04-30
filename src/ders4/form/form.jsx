import { button } from './button/button'
import { email } from './email/email'
import './form.css'
import { password } from './password/password'
export const form = () => {
  return (
    <form action="">
      <email />
      <password />
      <button />
    </form>
  )
}