import Footer from '../../component/footer/footer'
import BannerRooms from './bannerroom/bannerroom'
import SearchRoom from "../../component/searchroom/searchroom"

export default function Rooms(){
    return(
        <div>

            <BannerRooms/>
            <SearchRoom/>

            <Footer/>
        </div>
    )
}