import { useLoaderData } from "react-router-dom";

const Phone = () => {
    const phone = useLoaderData();
    return (
        <div>
            {phone.name}
            <img src={phone.image} alt="" />
            {phone.price}
        </div>
    );
};

export default Phone;