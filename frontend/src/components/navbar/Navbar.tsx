import cartImage from '../../assets/shared/desktop/icon-cart.svg';

export function Navbar() {
    return <div className="top-0 bg-woodsmoke-950 flex w-full p-2 justify-between border-mountain-mist-400 border-opacity-20 border-b-2 py-12">
        <div className="nav-left">
            <p className="font-bold text-4xl">audiophile</p>
        </div>
        <div className="nav-mid text-2xl uppercase">
            <ul className="flex cursor-pointer">
                <li className="mr-8 text-subtitle hover:text-raw-sienna-500">Home</li>
                <li className="mr-8 text-subtitle hover:text-raw-sienna-500">Headphones</li>
                <li className="mr-8 text-subtitle hover:text-raw-sienna-500">Speakers</li>
                <li className="text-subtitle hover:text-raw-sienna-500">Earphones</li>   
            </ul>
        </div>
        <div className="nav-right">
            <ul>
                <li>
                    <img className='cursor-pointer' src={cartImage} />
                </li>
            </ul>
        </div>
    </div>
    
}