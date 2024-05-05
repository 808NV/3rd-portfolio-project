import Filter from "../../components/filter/Filter";
import "./properties.scss";
import { listData } from "../../lib/dummyData";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";

const List = () => {
  return (
    <div className="list">
      <div className="cards">
        <div className="wrapper">
          <Filter />

          {listData.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
      <div className="map">
        <Map items={listData} />
      </div>
    </div>
  );
};

export default List;
