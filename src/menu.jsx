import { useState, useEffect } from 'preact/hooks'
import { ajax } from 'jquery';
import "./style/menu.css"

// const getLatestPriceChart=()=>{
//     function csvJSON(csv){
//         var lines=csv.split("\n");dsdwdsdwdsdw
//         var result = {};
//         var headers=lines[0].split(",");
//         for(var i=1;i<lines.length;i++){
//             var obj = {};
//             var currentline=lines[i].split(",");
//             for(var j=0;j<headers.length;j++){obj[headers[j]] = currentline[j];}
//             result[obj[headers[1]]]=obj;
//         }
//         return result;
//     }
//     return csvJSON(ajax({
//         type: "GET",
//         url: '/data/pricing_latest.csv',
//         async: false,ds
//         error: () => {currentstatus=false}
//     }).responseText)
// }
// const priceChart=getLatestPriceChart();

const Menu=()=>{
    const Item=(prop)=>{
        //! i fucking hate js
        //! const getPrice=(id) => {
        //!     return priceChart[id]["Sell Price"];
        //! }
        return(
            <div className='m_item' id={`item_${prop.id}`}>
                <div className='leftWrapper'>
                    <h1>{prop.name}</h1>
                    <p>{prop.desc}</p>
                    <h2>{prop.price} {prop.inStock ? null : <span>Out Of Stock</span>}</h2>
                </div>
                <div className='image' style={`background-image: url("/menu_img_assets/${prop.id}.png") !important;`}></div>
            </div>
        )
    }
    return(<>
        <div id="m_header">
            <h1>Menu</h1>
        </div>
        <div id="m_itemlist">
            <div id="m_il_contentWrapper">
                {/* ------------------------------------------------------------------- */}
                <h1 className='m_h1'>Trident Gum</h1>
                <hr className='m_hr'/>
                <Item 
                    id="td_bbg" 
                    name="Trident Bubblegum"
                    desc="The classic flavor of Trident. Recognizable by all, this
                    gum is a go-to classic for anyone who wants some good gum."
                    price="$1.75"
                    inStock={true} />
                <Item 
                    id="td_trpo" 
                    name="Trident Tropical Orange"
                    desc="A tasty alternative to those who want a classic brand, tropical
                    orange may be the best falvor there is in Trident's line-up."
                    price="$1.50"
                    inStock={false} />
                {/* ------------------------------------------------------------------- */}
                <h1 className='m_h1'>Orbit Gum</h1>
                <hr className='m_hr'/>
                <Item 
                    id="ob_spmt" 
                    name="Orbit Spearmint"
                    desc="A sharp minty flavor for ultimate refreshment. This is a pretty
                    reasonable flavor of gum."
                    price="$1.50"
                    inStock={true} />
                {/* ------------------------------------------------------------------- */}
                <h1 className='m_h1'>Tic Tacs</h1>
                <hr className='m_hr'
                    inStock={true} />
                <Item 
                    id="tt_fruit" 
                    name="Tic Tacs Fruit"
                    desc="A sweet, tasty breath mint. It's small size and big quantity is
                    great for a mid-class snack."
                    price="$1.50"
                    inStock={false} />
                <Item 
                    id="tt_orng" 
                    name="Tic Tacs Orange"
                    desc="One of the best Tic Tacs flavor to many, this mint is a great snack
                    for any occasion."
                    price="$1.75"
                    inStock={false} />
                {/* ------------------------------------------------------------------- */}
                <h1 className='m_h1'>Extra Gum</h1>
                <hr className='m_hr'/>
                <Item 
                    id="ex_spmt" 
                    name="Extra Spearmint"
                    desc="A tasty, flavorful minty gum that feel and tastes fresh. This gum is
                    well know for good reason."
                    price="$1.50"
                    inStock={true} />
                <Item 
                    id="ex_wtml" 
                    name="Extra Watermelon"
                    desc="This gum is prefectly fruity. On of Extra's Fan favorites, this gum 
                    is a total treat to have."
                    price="$1.75"
                    inStock={true} />
                {/* ------------------------------------------------------------------- */}
                <h1 className='m_h1'>5 Gum</h1>
                <hr className='m_hr'/>
                <Item 
                    id="5_wtml" 
                    name="5 Gum Watermelon"
                    desc="A premium experience above the rest. 5 Gum is a truly perfect gum. It's
                    amazing in every way."
                    price="$2.50"
                    inStock={true} />
                {/* ------------------------------------------------------------------- */}
                <h1 className='m_h1'>Mentos</h1>
                <hr className='m_hr'/>
                <Item 
                    id="mt_fruit" 
                    name="Mentos Fruit"
                    desc="A fruity, tasty flavor. It's small, easy to eat in class, and full of 
                    flavor."
                    price="$1.00"
                    inStock={false} />
                {/* ------------------------------------------------------------------- */}
            </div>
        </div>
    </>)
}
export default Menu;