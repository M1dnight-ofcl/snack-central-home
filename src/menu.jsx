import { useState, useEffect } from 'preact/hooks'
import "./style/menu.css"

const Menu=()=>{
    const Item=(prop)=>{
        return(
            <div className='m_item' id={`item_${prop.id}`}>
                <div className='leftWrapper'>
                    <h1>{prop.name}</h1>
                    <p>{prop.desc}</p>
                    <h2>{prop.price}</h2>
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
                <Item 
                    id="td_bbg" 
                    name="Trident Bubblegum"
                    desc="The classic flavor of Trident. Recognizable by all, this
                    gum is a go-to classic for anyone who wants some good gum."
                    price="$1.50" />
                <Item 
                    id="td_trpo" 
                    name="Trident Tropical Orange"
                    desc="A tasty alternative to those who want a classic brand, tropical
                    orange may be the best falvor there is in Trident's line-up." 
                    price="$1.50" />
            </div>
        </div>
    </>)
}
export default Menu;