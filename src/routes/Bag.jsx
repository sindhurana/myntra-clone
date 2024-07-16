import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";


const Bag = () => {
    const bagItems = useSelector(store => store.bag);

    const items = useSelector(store => store.items);

    const finalItems = items.filter((item) => {
        const index = bagItems.indexOf(item.id);
        return index >= 0;
    })

    // console.log(finalItems)
    return <>
        <main>

            <div className="bag-page">
                <div className="bag-items-container">
                    {finalItems.map(item => <BagItem item={item} key={item.id}></BagItem>)}

                </div>
                <div className="bag-summary">
                    <BagSummary finalItems={finalItems}></BagSummary>
                </div>

            </div>
        </main>

    </>
}

export default Bag;