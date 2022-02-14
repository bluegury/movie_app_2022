import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail(props) {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    useEffect(() => {
        if (location.state == null) {
            console.log("here");
            navigate("/");
        } else {
        }
    }, [location, navigate]);

    const movieInfo = location.state;
    return (
        <section className="container">
            <div className="movie__detail">
                <h1>TITLE : {movieInfo.title}</h1>
                <h5 className="movie__year">{movieInfo.year}</h5>
                <ul className="movie__genres">
                    {movieInfo.genres.map((genre, index) => {
                        return (
                            <li key={index} className="movie__genres">
                                {genre}
                            </li>
                        );
                    })}
                </ul>
                <p className="movie__summary">{movieInfo.summary}</p>
                <img
                    src={movieInfo.poster}
                    alt={movieInfo.title}
                    title={movieInfo.title}
                />
            </div>
        </section>
    );
}

export default Detail;
