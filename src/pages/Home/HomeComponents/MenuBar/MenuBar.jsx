import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";





const MenuBar = () => {

    const [categories, setCategories] = useState([])


    useEffect(() => {
        fetch("categories.json")
            .then((res) => res.json())
            .then((data) => {
                setCategories(data.categories)
            })
    },[])
    return (
        <div className="flex w-full justify-between px-14 capitalize py-7 border-b-2 border-black font-primary font-medium">
            {
                categories.map((category, idx) => <NavLink to={category.category} className="border-b-2 border-transparent transition-all ease-in-out py-1 px-3 hover:border-gray-500 hover:text-sm" key={idx}>{category.category}</NavLink>)
            }
        </div>
    );
};

export default MenuBar;