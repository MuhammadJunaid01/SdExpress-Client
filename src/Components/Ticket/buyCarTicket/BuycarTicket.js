import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

const BuycarTicket = () => {
  let { buyCarTicket } = useParams();

  return (
    <div>
      <h3>{buyCarTicket}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
        blanditiis enim exercitationem porro sequi explicabo corporis nostrum
        adipisci fugiat id consequuntur, ipsam, odio vel. Molestias quas
        cupiditate rerum dolorum. Unde nihil, rem quisquam suscipit itaque
        quibusdam quia ratione eum inventore sequi id ex quo voluptatem, dicta
        cumque pariatur doloribus possimus veniam tenetur facere mollitia,
        aliquam harum. Velit repellat eveniet eaque dignissimos, officiis
        tempora corrupti blanditiis. Itaque consequatur, molestiae eligendi
        veniam sit aut cumque nemo autem, sed animi sint corporis atque magnam.
        Cumque ipsa soluta corrupti, facilis ipsam necessitatibus placeat
        similique aperiam magni laboriosam ducimus sunt possimus, enim dolores,
        error nobis.
      </p>
    </div>
  );
};

export default BuycarTicket;
