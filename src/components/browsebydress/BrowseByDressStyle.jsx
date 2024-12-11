import React from "react";
import { getDressImages } from "../../api/FetchAPI";

export default function BrowseByDressStyle() {
  const { data, isLoading, isError } = getDressImages();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error while fetching products.</p>;
  }
  return (
    <section className="browse-dress  px">
      <h2 className="title">BROWSE BY DRESS STYLE</h2>
      {data?.data.map((dress) => (
        <div className="categories" key={dress.id}>
          <div className="category">
            <img src={dress.image} />
            <p>{dress.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
