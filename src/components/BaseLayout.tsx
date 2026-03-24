import { Outlet } from 'react-router-dom'

const BaseLayout = () => {
  return (
    <>
        <header>
            Seed Project
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <p>&copy; 2026 Gripweed Consulting LLC</p>
        </footer>
    </>
  )
}

export default BaseLayout