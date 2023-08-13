import axios from "axios";


const BASE_URL = 'https://booking-com.p.rapidapi.com/v1';
const options = {
    headers: {
        'X-RapidAPI-Key': '7a28d4d511mshbb90d733517f7c8p1ef098jsn448079b47a43',
        // 'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'  
    }, 
    params: {
        checkin_date: '2023-09-27',
        dest_type: 'city',
        units: 'metric',
        checkout_date: '2023-09-28',
        adults_number: '2',
        order_by: 'popularity',
        dest_id: '-553173',
        filter_by_currency: 'EUR',
        locale: 'en-gb',
        room_number: '1',
        categories_filter_ids: 'class::2,class::4,free_cancellation::1',
        page_number: '0'
         
    }
};

async function getHotels() {
    try{
        const response = await axios.get(`${BASE_URL}/hotels/search`, options);
        console.log(response.data);
    } catch (error) {
        console.log(error);
              throw error;
    }
} 
getHotels();



