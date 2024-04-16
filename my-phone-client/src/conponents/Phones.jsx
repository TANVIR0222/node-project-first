import { Link, useLoaderData } from "react-router-dom";


const Phones = () => {
    const phone = useLoaderData();
    return (
        <div>
            <h2>all phone s hear {phone.length} </h2>

            {
                phone.map(pn => <li key={pn.id} ><Link to={`/phone/${pn.id}`} >{pn.name}</Link></li>)
            }
        </div>
    );
};

export default Phones;