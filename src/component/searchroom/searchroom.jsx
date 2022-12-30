import React, { useEffect, useMemo, useState } from "react";
import Item from "./rooms/items";
import "./searchroom.css";

//Filter list by category in React JS
export default function SearchRoom() {
  // Default Value
  var defaultSports = 
[
    
    {
        id: 1,
        title: "اقامتگاه ماجرا - جزیره هرمز",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
         category: "دریا",
         URL: "http://dl.didanitar.com/uploads/rangarang-3.jpg"

    },
    {
        id: 2,
        title: "اقامتگاه بوم گردی کاروانسرای زین الدین - مهریز",
        price: 22.3,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
         category: "کویر",
         URL: "https://jainjas.com/storage/Images/Blog/1/e11bc501a25b4bdfa8f8c643b99446ec.jpg"
    },
    {
        id: 3,
        title: "اقامتگاه بوم گردی کلبه چوبی الیزه - سوادکوه",
        price: 55.99,
        description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
         category: "جنگل",
         URL: "https://mizboon.com/Blog/wp-content/uploads/2021/04/ecologe-mazandaran-696x342.jpg"
    },
    {
        id: 4,
        title: "اقامتگاه بوم‌گردی یارا - تنکابن",
        price: 15.99,
        description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
         category: "جنگل",
         URL: "https://www.homsa.net/images/rooms/19883/52198831611572576_.jpg"
    },
    {
        id: 5,
        title: "اقامتگاه ویلایی - نوشهر",
        price: 695,
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
         category: "دریا",
         URL: "https://mcdn.mihmansho.com/products/310/home_9921_26714_13981110134431_310.jpg"
    },
    {
        id: 6,
        title: "اقامتگاه بومگردی سنتی پایو - خور و بیابانک اصفهان ",
        price: 168,
        description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
         category: "کویر",
        URL: "https://travel.miladrahimi.ir/wp-content/uploads/2019/10/0a8e515ff46a2e389abe68a128d2e63f_xxx-1.jpg"
    }
]
  const [sportList, setsportList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();


  useEffect(() => {
    setsportList(defaultSports);
  }, []);

  function getFilteredList() {
 
    if (!selectedCategory) {
      return sportList;
    }
    return sportList.filter((item) => item.category === selectedCategory);
  }

  var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className="search container-fluid">
      <div className="row justify-content-center">
        <div className="col-sm-2">کجا می خوای بری: </div>
          <select className="col-sm-2 search-items"
              name="category-list"
              id="category-list"
              onChange={handleCategoryChange}
            >
              <option value="">همه</option>
              <option value="جنگل">جنگل</option>
              <option value="دریا">دریا</option>
              <option value="کویر">کویر</option>
          </select>
      </div>
      <div className="list d-flex ">
        {filteredList.map((element, index) => (
          <Item {...element} key={index} />
        ))}
      </div>
    </div>
  );
}