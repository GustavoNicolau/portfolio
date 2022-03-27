import Link from 'next/link'

export default function Header(){
    return (
        <header>
            <div className='container'>
                <Link href='/'>
                    GN Blog
                </Link>
            </div>
        </header>
    )
}