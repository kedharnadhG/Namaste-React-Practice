import React from "react";
import ReactDOM from "react-dom/client";



/**  Components
 * 
 * Header
 *  - Logo
 *  - NavItems
 * 
 * 
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *          - Image
 *          - Name
 *          - Star Rating
 *          - cuisines
 *          - delivery time
 * 
 * Footer
 *  - Copyright
 *  - Links
 *  - Address * 
 *  - Contact
 * 
 * 
 */

const Header = () => {
    return (
        <div className="header">
            {/* Logo */}
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=All&sf=&txt_keyword=" alt="logo" />
            </div>


            {/* NavItems */}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// restaurant card- Component
const RestaurantCard = ({resData}) => {
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        slaString
    } = resData;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId }className="res-logo" alt="res-logo" />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h4>{avgRating} ⭐</h4>
            <h4>{costForTwo}</h4>
            <h4>{slaString}</h4>
        </div>
    )
}

const resList =[
{
"info": {
"id": "426730",
"name": "Theobroma",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/716267c7-7871-4d9d-ac71-ddb40ac6744d_426730.jpg",
"locality": "Lavelle Road",
"areaName": "Ashok Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"Desserts",
"Bakery",
"Beverages"
],
"avgRating": 4.7,
"parentId": "1040",
"avgRatingString": "4.7",
"totalRatingsString": "5.7K+",
"sla": {
"deliveryTime": 35,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-02 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Desserts.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Desserts.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "15% OFF",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.1",
"ratingCount": "434"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b31821d1-1987-4658-8062-d781f22183c1"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/theobroma-lavelle-road-ashok-nagar-rest426730",
"type": "WEBLINK"
}
},
{
"info": {
"id": "457522",
"name": "McDonald's",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/b10880de-398c-416d-b35b-8ae2716604ca_457522.JPG",
"locality": "Basavanagudi",
"areaName": "Basavanagudi",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Beverages",
"Cafe",
"Desserts"
],
"avgRating": 4.5,
"parentId": "630",
"avgRatingString": "4.5",
"totalRatingsString": "6.4K+",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 2.6,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "2.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-03 00:45:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b31821d1-1987-4658-8062-d781f22183c1"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/mcdonalds-basavanagudi-rest457522",
"type": "WEBLINK"
}
},
{
"info": {
"id": "1468",
"name": "A2B - Adyar Ananda Bhavan",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/fb40dee9-b4c6-454e-8c79-dbdff33d7b36_1468.jpg",
"locality": "Basavanagudi",
"areaName": "Basavanagudi",
"costForTwo": "₹300 for two",
"cuisines": [
"South Indian",
"North Indian",
"Sweets",
"Chinese"
],
"avgRating": 4.5,
"veg": true,
"parentId": "22",
"avgRatingString": "4.5",
"totalRatingsString": "17K+",
"sla": {
"deliveryTime": 41,
"lastMileTravel": 2.5,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "2.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-02 22:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Mithai.png",
"description": "Delivery!"
},
{
"imageId": "Rxawards/_CATEGORY-South%20Indian.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Mithai.png"
}
},
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-South%20Indian.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹169"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.2",
"ratingCount": "3.8K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b31821d1-1987-4658-8062-d781f22183c1"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/a2b-adyar-ananda-bhavan-basavanagudi-rest1468",
"type": "WEBLINK"
}
},
{
"info": {
"id": "77949",
"name": "Burger King",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/77f7d64b-c454-4f4f-aa90-db5b9c64e348_77949.jpg",
"locality": "Hebbal",
"areaName": "Basavanagudi",
"costForTwo": "₹350 for two",
"cuisines": [
"Burgers",
"American"
],
"avgRating": 4.3,
"parentId": "166",
"avgRatingString": "4.3",
"totalRatingsString": "33K+",
"sla": {
"deliveryTime": 32,
"lastMileTravel": 2.8,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "2.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-02 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "60% OFF",
"subHeader": "UPTO ₹120"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.5",
"ratingCount": "376"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b31821d1-1987-4658-8062-d781f22183c1"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/burger-king-hebbal-basavanagudi-rest77949",
"type": "WEBLINK"
}
},
{
"info": {
"id": "10892",
"name": "Pizza Hut",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/cf3bb731-18ac-412c-a082-ac0cd2c3cdc9_10892.JPG",
"locality": "Vani Vilas Road",
"areaName": "Basavanagudi",
"costForTwo": "₹350 for two",
"cuisines": [
"Pizzas"
],
"avgRating": 4.2,
"parentId": "721",
"avgRatingString": "4.2",
"totalRatingsString": "10K+",
"sla": {
"deliveryTime": 42,
"lastMileTravel": 2.8,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "2.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-03 02:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "UPTO ₹100"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b31821d1-1987-4658-8062-d781f22183c1"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/pizza-hut-vani-vilas-road-basavanagudi-rest10892",
"type": "WEBLINK"
}
},
{
"info": {
"id": "75093",
"name": "NIC Ice Creams",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/f73522f1-a7e2-44e1-be9c-6a27718d40de_75093.JPG",
"locality": "Bashyam Circle",
"areaName": "Rajajinagar",
"costForTwo": "₹120 for two",
"cuisines": [
"Ice Cream",
"Desserts"
],
"avgRating": 4.7,
"veg": true,
"parentId": "6249",
"avgRatingString": "4.7",
"totalRatingsString": "13K+",
"sla": {
"deliveryTime": 32,
"lastMileTravel": 5,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "5.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-02 23:00:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "Ratnesh_Badges/test2.png",
"shortDescription": "Perfect ice cream delivery",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "Ratnesh_Badges/test2.png",
"shortDescription": "Perfect ice cream delivery"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "60% OFF",
"subHeader": "UPTO ₹120"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b31821d1-1987-4658-8062-d781f22183c1"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/nic-ice-creams-bashyam-circle-rajajinagar-rest75093",
"type": "WEBLINK"
}
},
{
"info": {
"id": "432976",
"name": "KFC",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/5b283b24-3a8e-4feb-90f3-98a9c7a3b5b4_432976.JPG",
"locality": "Double Road",
"areaName": "Shanti Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Fast Food",
"Rolls & Wraps"
],
"avgRating": 4.4,
"parentId": "547",
"avgRatingString": "4.4",
"totalRatingsString": "4.3K+",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 2.3,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "2.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-02 23:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹59"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b31821d1-1987-4658-8062-d781f22183c1"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/kfc-double-road-shanti-nagar-rest432976",
"type": "WEBLINK"
}
},
{
"info": {
"id": "352790",
"name": "Grameen Kulfi",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/16/92233169-b2ab-491e-87b4-825a4780d2c0_352790.jpg",
"locality": "Bashyam Circle",
"areaName": "Rajajinagar",
"costForTwo": "₹120 for two",
"cuisines": [
"Ice Cream",
"Desserts"
],
"avgRating": 4.8,
"veg": true,
"parentId": "12175",
"avgRatingString": "4.8",
"totalRatingsString": "1.0K+",
"sla": {
"deliveryTime": 37,
"lastMileTravel": 5,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "5.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-02 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹125 OFF",
"subHeader": "ABOVE ₹399",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b31821d1-1987-4658-8062-d781f22183c1"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/grameen-kulfi-bashyam-circle-rajajinagar-rest352790",
"type": "WEBLINK"
}
},
{
"info": {
"id": "6924",
"name": "FreshMenu",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/5/e21b723c-7a5a-43fc-87b6-f3902d008ce2_6924.jpg",
"locality": "Johnson Market",
"areaName": "Richmond Road",
"costForTwo": "₹250 for two",
"cuisines": [
"Continental",
"Chinese",
"Oriental",
"Asian",
"Healthy Food",
"Fast Food",
"Indian",
"Desserts"
],
"avgRating": 4.3,
"parentId": "398",
"avgRatingString": "4.3",
"totalRatingsString": "60K+",
"sla": {
"deliveryTime": 47,
"lastMileTravel": 3.6,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "3.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-02 23:00:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹49"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b31821d1-1987-4658-8062-d781f22183c1"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/freshmenu-johnson-market-richmond-road-rest6924",
"type": "WEBLINK"
}
},
{
"info": {
"id": "770772",
"name": "Olio - The Wood Fired Pizzeria",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/2/a682265b-9151-42c3-8845-39b7cf0d17a1_770772.jpg",
"locality": "Ali Askar Road",
"areaName": "Central Bangalore",
"costForTwo": "₹300 for two",
"cuisines": [
"Pizzas",
"Pastas",
"Italian",
"Fast Food",
"Snacks",
"Beverages",
"Desserts"
],
"avgRating": 4.4,
"parentId": "11633",
"avgRatingString": "4.4",
"totalRatingsString": "912",
"sla": {
"deliveryTime": 44,
"lastMileTravel": 4.9,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "4.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-03 05:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹299"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b31821d1-1987-4658-8062-d781f22183c1"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/olio-the-wood-fired-pizzeria-ali-askar-road-central-bangalore-rest770772",
"type": "WEBLINK"
}
},
{
"info": {
"id": "442110",
"name": "Taco Bell",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/7/cc9056c7-1aa9-4ec3-afba-4bb02f90325c_442110.JPG",
"locality": "Vatal Nagaraj Road",
"areaName": "Magadi Road",
"costForTwo": "₹300 for two",
"cuisines": [
"Mexican",
"Fast Food",
"Snacks"
],
"avgRating": 4.3,
"parentId": "1557",
"avgRatingString": "4.3",
"totalRatingsString": "1.6K+",
"sla": {
"deliveryTime": 38,
"lastMileTravel": 4.7,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "4.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-02 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b31821d1-1987-4658-8062-d781f22183c1"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/taco-bell-vatal-nagaraj-road-magadi-road-rest442110",
"type": "WEBLINK"
}
},
{
"info": {
"id": "570511",
"name": "Bakingo",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/15/9599c7db-1d17-473e-8438-ed83ef7a703a_570511.jpg",
"locality": "Puhlong X-road",
"areaName": "Vasanth Nagar",
"costForTwo": "₹299 for two",
"cuisines": [
"Bakery",
"Desserts",
"Beverages",
"Snacks"
],
"avgRating": 4.6,
"parentId": "3818",
"avgRatingString": "4.6",
"totalRatingsString": "4.6K+",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 5,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "5.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-03 01:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "20% OFF",
"subHeader": "ABOVE ₹3000",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b31821d1-1987-4658-8062-d781f22183c1"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/bakingo-puhlong-x-road-vasanth-nagar-rest570511",
"type": "WEBLINK"
}
},
{
"info": {
"id": "396748",
"name": "The Good Bowl",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/2385f59d-92c8-46fb-9bab-e370e61bc197_396748.jpg",
"locality": "Residency Road",
"areaName": "Central Bangalore",
"costForTwo": "₹400 for two",
"cuisines": [
"Biryani",
"Pastas",
"Punjabi",
"Desserts",
"Beverages"
],
"avgRating": 4.4,
"parentId": "7918",
"avgRatingString": "4.4",
"totalRatingsString": "945",
"sla": {
"deliveryTime": 38,
"lastMileTravel": 2.3,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "2.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-02 23:59:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹200 OFF",
"subHeader": "ABOVE ₹599",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b31821d1-1987-4658-8062-d781f22183c1"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/the-good-bowl-residency-road-central-bangalore-rest396748",
"type": "WEBLINK"
}
},
{
"info": {
"id": "317934",
"name": "Kwality Walls Ice Cream and More",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/682f4b20-46b3-4085-b5ac-333022a55ca9_317934.JPG",
"locality": "5th Cross",
"areaName": "Wilson Garden",
"costForTwo": "₹200 for two",
"cuisines": [
"Desserts",
"Ice Cream",
"Ice Cream Cakes"
],
"avgRating": 4.5,
"veg": true,
"parentId": "582",
"avgRatingString": "4.5",
"totalRatingsString": "1.4K+",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-02 22:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹125 OFF",
"subHeader": "ABOVE ₹299",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b31821d1-1987-4658-8062-d781f22183c1"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/kwality-walls-ice-cream-and-more-5th-cross-wilson-garden-rest317934",
"type": "WEBLINK"
}
},
{
"info": {
"id": "588012",
"name": "SMOOR",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/13/2a86bd6d-c0a0-41fd-b74a-9c30b213ae89_588012.jpg",
"locality": "Lavelle Road",
"areaName": "Lavelle Road",
"costForTwo": "₹450 for two",
"cuisines": [
"Asian",
"Burgers",
"Italian",
"Thai",
"Sushi",
"Salads",
"Pastas",
"Pizzas",
"Mexican",
"Chinese"
],
"avgRating": 4.6,
"parentId": "3506",
"avgRatingString": "4.6",
"totalRatingsString": "1.5K+",
"sla": {
"deliveryTime": 45,
"lastMileTravel": 3.9,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "3.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-03 01:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "UPTO ₹100"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.4",
"ratingCount": "545"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b31821d1-1987-4658-8062-d781f22183c1"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/smoor-lavelle-road-rest588012",
"type": "WEBLINK"
}
},
{
"info": {
"id": "622202",
"name": "MOJO Pizza - 2X Toppings",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/e7ccd786-be92-4743-8e0c-f3d3a577d48f_622202.jpg",
"locality": "Langford Road",
"areaName": "Central Bangalore",
"costForTwo": "₹250 for two",
"cuisines": [
"Pizzas",
"Italian",
"Fast Food",
"Desserts"
],
"avgRating": 4.5,
"parentId": "11329",
"avgRatingString": "4.5",
"totalRatingsString": "730",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 2.9,
"serviceability": "SERVICEABLE",
"slaString": "20-30 mins",
"lastMileTravelString": "2.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-03 02:00:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹150 OFF",
"subHeader": "ABOVE ₹499",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b31821d1-1987-4658-8062-d781f22183c1"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/mojo-pizza-2x-toppings-langford-road-central-bangalore-rest622202",
"type": "WEBLINK"
}
},
{
"info": {
"id": "503002",
"name": "NH1 Bowls - Highway To North",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/aea607a6-5ce6-4fe6-b7d1-7ba2bacdc647_503002.jpg",
"locality": "Lakshmi Road",
"areaName": "Central Bangalore",
"costForTwo": "₹250 for two",
"cuisines": [
"North Indian",
"Punjabi",
"Home Food"
],
"avgRating": 4.6,
"parentId": "22452",
"avgRatingString": "4.6",
"totalRatingsString": "828",
"sla": {
"deliveryTime": 15,
"lastMileTravel": 2.9,
"serviceability": "SERVICEABLE",
"slaString": "10-20 mins",
"lastMileTravelString": "2.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-03 02:00:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹150 OFF",
"subHeader": "ABOVE ₹499",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b31821d1-1987-4658-8062-d781f22183c1"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/nh1-bowls-highway-to-north-lakshmi-road-central-bangalore-rest503002",
"type": "WEBLINK"
}
},
{
"info": {
"id": "681612",
"name": "LeanCrust Pizza- ThinCrust Experts",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/14414940-565f-4b31-8880-eb44478a5ec0_681612.jpg",
"locality": "Lakshmi Road",
"areaName": "Central Bangalore",
"costForTwo": "₹300 for two",
"cuisines": [
"Pizzas",
"Italian",
"Desserts"
],
"avgRating": 4.7,
"parentId": "11216",
"avgRatingString": "4.7",
"totalRatingsString": "437",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 2.9,
"serviceability": "SERVICEABLE",
"slaString": "20-30 mins",
"lastMileTravelString": "2.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-03 02:00:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹150 OFF",
"subHeader": "ABOVE ₹499",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b31821d1-1987-4658-8062-d781f22183c1"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/leancrust-pizza-thincrust-experts-lakshmi-road-central-bangalore-rest681612",
"type": "WEBLINK"
}
},
{
"info": {
"id": "822315",
"name": "Subway",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/4460ba83-524d-4d22-8325-3652a14d2d50_822315.JPG",
"locality": "Langford Road",
"areaName": "Central Bangalore",
"costForTwo": "₹350 for two",
"cuisines": [
"sandwich",
"Salads",
"wrap",
"Healthy Food"
],
"avgRating": 4.4,
"parentId": "2",
"avgRatingString": "4.4",
"totalRatingsString": "1.0K+",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 2.9,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "2.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-03 01:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "UPTO ₹100"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b31821d1-1987-4658-8062-d781f22183c1"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/subway-langford-road-central-bangalore-rest822315",
"type": "WEBLINK"
}
},
{
"info": {
"id": "643832",
"name": "WeFit - Protein Bowls, Salads & Sandwiches",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/c64e7364-7909-417f-a850-ea89f41c318e_643832.jpg",
"locality": "Langford Road",
"areaName": "Central Bangalore",
"costForTwo": "₹250 for two",
"cuisines": [
"Healthy Food",
"Salads",
"Keto",
"Snacks"
],
"avgRating": 4.7,
"parentId": "355285",
"avgRatingString": "4.7",
"totalRatingsString": "715",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 2.9,
"serviceability": "SERVICEABLE",
"slaString": "20-30 mins",
"lastMileTravelString": "2.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-03 02:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹150 OFF",
"subHeader": "ABOVE ₹499",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b31821d1-1987-4658-8062-d781f22183c1"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/wefit-protein-bowls-salads-and-sandwiches-langford-road-central-bangalore-rest643832",
"type": "WEBLINK"
}
}
]

// not using keys (not acceptable) <<<< index as key <<<<<<<<<<<<<<  unique id  (best practice)

const Body = () => {
    return (
        <div className="body">
            {/* search */}
            <div className="search">
                Search
            </div>


            {/* restaurantContainer */}
            <div className="res-container">      
                {/* Config-driven UI */}
                {resList.map((restaurant) => (
                     <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />                
                ))}

            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            {/* Header */}
            <Header />

            {/* Body */}
            <Body />

            {/* Footer */}
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
