import { APIProvider, Map, Marker, useMap } from "@vis.gl/react-google-maps";
import { useEffect } from "react";

function MapController({ places, focusedPlace }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // 카드 클릭했을 때 해당 장소로 이동
    if (focusedPlace) {
      map.panTo({
        lat: Number(focusedPlace.lat),
        lng: Number(focusedPlace.lng),
      });
      map.setZoom(16);
      return;
    }

    // 처음 들어왔을 때 모든 마커 보이게 맞춤
    if (places.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();

      places.forEach((item) => {
        bounds.extend({
          lat: Number(item.lat),
          lng: Number(item.lng),
        });
      });

      map.fitBounds(bounds, 100);
    }
  }, [map, places, focusedPlace]);

  return null;
}

function TravelMap({ lat, lng, place, places = [], zoom = 14, focusedPlace }) {
  const center = {
    lat: Number(lat),
    lng: Number(lng),
  };

  return (
    <div className="travel-map-box">
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Map
          key={place}
          defaultCenter={center}
          defaultZoom={zoom}
          style={{ width: "100%", height: "100%" }}
        >
          <MapController places={places} focusedPlace={focusedPlace} />

          {places.length > 0 ? (
            places.map((item, index) => (
              <Marker
                key={item.name}
                position={{
                    lat: Number(item.lat),
                    lng: Number(item.lng),
                }}
                label={{
                    text: String(index + 1),
                    color: "white",
                    fontWeight: "700",
                }}
                title={item.name}
                />
            ))
          ) : (
            <Marker position={center} title={place} />
          )}
        </Map>
      </APIProvider>
    </div>
  );
}

export default TravelMap;