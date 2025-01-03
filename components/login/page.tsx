// Form using react-hook-forms + zod
import LogInForm from "@/app/ui/LogInForm"
import DarkModeButton from "@/app/ui/DarkModeButton"

export default function login() {
  return <>
    <DarkModeButton />

    <LogInForm />
  </>
}