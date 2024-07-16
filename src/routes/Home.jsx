
import { useSelector } from 'react-redux'
import HomeItem from '../components/HomeItem'

export default function Home() {



    const items = useSelector(store => store.items)
    // console.log("items:", items)


    return (

        <main>
            <div className="items-container">
                {items.map((item) => <HomeItem key={item.id} item={item}></HomeItem>)}

            </div>
        </main>

    )
}
