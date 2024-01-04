import markIIHeadphones from '../../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg';

export function HomeSection1() {
    return <>
        <div className="w-full h-[80vh] flex justify-between">
            <div className="left w-[40%] h-full flex flex-col justify-center items-start">
                <p className='text-overline mb-5'>New Product</p>
                <h1 className='text-left mb-5'>XX99 MARK II HEADPHONES</h1>
                <p className='mb-5 w-[70%] text-left opacity-75'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <button className='py-3 px-5 bg-raw-sienna-500 text-subtitle'>SEE PRODUCT</button>
            </div>
            <div className="right w-[50%] h-full">
                <img src={markIIHeadphones} />
            </div>
        </div>
    </>
}