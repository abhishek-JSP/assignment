import React from "react";
import Product from "./product";

import "./all-list.css"

const AllList = ({selectedYear, launch, landing}) => {
    const [allList, setAllList] = React.useState([]);
    const [year, setYear] = React.useState(false)
    
    const getAllList = async() => {
        const res = await fetch("https://api.spaceXdata.com/v3/launches?limit=100");
        const lists = await res.json();
        // console.log(lists);
        if(lists && lists.length > 0){
            setAllList(lists);
        }
    };

    const getListByYear = async() => {
        const res = await fetch(`ttps://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${selectedYear}`);
        const lists = await res.json();
        console.log(lists);
        if(lists && lists.length > 0){
            setAllList(lists);
        }
    };

    let filterList = allList && allList.filter((item) => {
        console.log(item.launch_success === launch);
        if(!launch && !landing && item.launch_year === selectedYear) return item;
        else if(!selectedYear && !landing && (item.launch_success === launch)) {
            console.log(launch);
            return item
        } else if(!selectedYear && !launch && (item.launch_success === launch)) {
            console.log(launch);
            return item
        }
    })

    const mappedList = filterList.length > 0 ? filterList : allList
    console.log(filterList);

    // React.useEffect(() => {
    //     // console.log(res);
    //     if(year){
    //         getListByYear();
    //         console.log(allList.length);
    //     }
    // },[year])

    React.useEffect(() => {
        getAllList();
        // return() => filterList = []
    },[]);

    return (
        <div className="product_container">
            {console.log(allList.length)}
            {mappedList.length === 0 ? "Therr is no list available" : mappedList.map((item) => {
                return(
                <Product
                    key={item.launch_date_unix}
                    image={item.links.mission_patch_small}
                    missionName={item.mission_name}
                    flightNumber={item.flight_number}e
                    missionId={item.mission_id}
                    launchYear={item.launch_year}
                    successYear={item.launch_success}
                />
                )
})}
        </div>
    )
}

export default AllList;