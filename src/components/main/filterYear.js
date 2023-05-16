import React from "react";
import "./filterYear.css"

const FilterYear = ({pickYear, selectLaunch, selectLanding}) => {
    const years = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020",];
    const [isActive, setIsActive] = React.useState(false)
    const btnStyle = isActive ? "btn active" : "btn";

    const activeYear = year => {
        // console.log(year);
        setIsActive(prev=>!prev)
        console.log(isActive);
        pickYear(year)
    }

    return(
        <div className="years">
            <div>
                <h3>Filters</h3>
            </div>
            <div>
                <div>
                    <p> Launch Year </p>
                    <div className="year_btn launch_btn">
                        {years && years.map((year) => (
                            <button onClick={()=>activeYear(year)} className={btnStyle} key={year}>{year}</button>
                        ))}
                    </div>
                </div>
                <div>
                    <p> Successful Launch </p>
                    <div className="year_btn success_btn">
                        <button onClick={() => selectLaunch(true)} className="btn">True</button>
                        <button onClick={() => selectLaunch(false)} className="btn">False</button>
                    </div>
                </div>
                <div>
                    <p> Successfull Landing </p>
                    <div className="year_btn success_btn">
                        <button onClick={() => selectLanding(true)} className="btn">True</button>
                        <button onClick={() => selectLanding(false)} className="btn">False</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterYear