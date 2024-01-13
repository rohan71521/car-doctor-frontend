import image from '../../assets/images/banner/4.jpg'
import PropTypes from 'prop-types';

function SharedBanner({heading , route}) {
    
    return(
        <div>
            <div className='w-full h-[20vh] md:h-[30vh] relative rounded-md overflow-hidden'>
                <img className='w-full h-full object-cover'
                 src={image} alt="" />
                 <div className='w-full h-full absolute top-0 left-0 bg-second-color opacity-70'></div>
                 <h2 className='text-third-color -translate-y-1/2 absolute top-1/2 left-2 md:left-4'>{heading}</h2>
                <div className='bg-theme-color p-4  absolute bottom-0 left-1/2 -translate-x-1/2'>
                <p className='text-third-color font-bold'>{route}</p>
                </div>
            </div>
        </div>
    )
}

SharedBanner.propTypes = {
    heading: PropTypes.string,
    route: PropTypes.string
}

export default SharedBanner;