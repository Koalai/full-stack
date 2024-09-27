import backgroundImage from '../assets/background.jpg'

export const Sidebar = () => {
    return (
        <div className='h-screen w-4/6'>
            <img src={backgroundImage} className='h-full'/>
        </div>
    )
}