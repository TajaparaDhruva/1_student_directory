import Link from 'next/link'

export default function Navbar () {
    return (
        <header className='border-b border-slate-200 bg-white'>
            <nav className='mx-auto flex max-w-6xl flex-wrap items-center gap-6 px-5 py-4'>
                <Link href="/students" className='flex items-center gap-2 font-bold text-slate-900'>
                <span>Campus Directory</span>
                </Link>

                <div className='flex items-center gap-5 text-sm text-slate-600'>
                    <Link href="/students" className="hover:text-blue-600">Students</Link>
                    <Link href="/departments" className="hover:text-blue-600">Departments</Link>
                    <Link href="/about" className="hover:text-blue-600">About</Link>
                </div>
            </nav>
        </header>
    )
}