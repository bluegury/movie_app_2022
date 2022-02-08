import React from "react";
import propTypes from "prop-types";

function Food({ name, picture, rating }) {
    return (
        <div>
            <h2>I like {name}</h2>
            <h4>{rating}/5.0</h4>
            <img src={picture} alt={name} />
        </div>
    );
}

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image: "https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg",
        rating: 5,
    },
    {
        id: 2,
        name: "Samgyeopsal",
        image: "https://img.siksinhot.com/seeon/1518402741475570.jpg",
        rating: 4.9,
    },
    {
        id: 3,
        name: "Bibimbap",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg",
        rating: 4.8,
    },
    {
        id: 4,
        name: "Doncasu",
        image: "https://recipe1.ezmember.co.kr/cache/recipe/2019/01/12/b9343d314206275c1b6d0d0c4fcc2ce71.jpg",
        rating: 3,
    },
    {
        id: 5,
        name: "Kimbap",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQtHzVFveDXoS4ViCe5t7ENebJxlJTOfGqdYp_NZrOjTFjq81-HkZP65EpGmHl1sN268&usqp=CAU",
        rating: 1,
    },
];

function App() {
    return (
        <div>
            {foodILike.map((dish) => (
                <Food
                    key={dish.id}
                    name={dish.name}
                    picture={dish.image}
                    rating={dish.rating}
                />
            ))}
        </div>
    );
}

Food.propTypes = {
    name: propTypes.string.isRequired,
    picture: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
};

export default App;
