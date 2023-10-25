import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { Form, Input, Button } from "antd";
const { TextArea } = Input;

function Test() {
  // const LocationMarker = () => {
  //   const [position, setPosition] = useState(null);

  //   // Access the map object and define event handlers
  //   const map = useMapEvents({
  //     click() {
  //       map.locate();
  //     },
  //     locationfound(e) {
  //       setPosition(e.latlng);
  //       map.flyTo(e.latlng, map.getZoom());
  //     },
  //   });

  //   // Render the marker with a popup if the user's position is available
  //   return position === null ? null : (
  //     <Marker position={position}>
  //       <Popup>You are here</Popup>
  //     </Marker>
  //   );
  // };

  const [markerPosition, setMarkerPosition] = useState([9.005401, 38.763611]);
  const [city,setCity] = useState("");
  const [subCity,setSubCity] = useState("")
  const [phoneNumber,setPhoneNumber]= useState("")
  const [email,setEmail] = useState("");
  const [woreda,setWoreda] = useState("");
  const [kebeble,setKebele] = useState("");
  const [description,setDescription] = useState("");

  const moveMarkerToLocation = (lat, lng) => {
    setMarkerPosition([lat, lng]);
  };

  const logMarkerPosition = (lat, lng) => {
    console.log(`Marker Position: Lat ${lat}, Lng ${lng}`);
  };

  // Update marker position when markerPosition state changes
  useEffect(() => {
    logMarkerPosition(markerPosition[0], markerPosition[1]);
  }, [markerPosition]);

  const mapContainerStyles = {
    width: "100%",
    height: "400px", // Default height for small screens
  };

  const onFinish = () => {
    console.log("Success:", email,city,subCity,description,phoneNumber,woreda,kebeble);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [form] = Form.useForm(); // Create a form instance


  // Media query for larger screens
  if (window.innerWidth >= 768) {
    mapContainerStyles.height = "600px"; // Adjust height for larger screens
  }

  const handleButtonClick = () => {
    // Get form field values using getFieldValue
    const cityValue = form.getFieldValue("city");
    const subCityValue = form.getFieldValue("subCity");
    const phoneNumberValue = form.getFieldValue("phoneNumber");
    const emailValue = form.getFieldValue("email");
    const woredaValue = form.getFieldValue("woreda");
    const kebeleValue = form.getFieldValue("kebele");
    const descriptionValue = form.getFieldValue("description");

    // Update the state variables with the form field values
    setCity(cityValue);
    setSubCity(subCityValue);
    setPhoneNumber(phoneNumberValue);
    setEmail(emailValue);
    setWoreda(woredaValue);
    setKebele(kebeleValue);
    setDescription(descriptionValue);

    console.log("info ",woreda,city,subCity)
  };

  return (
    <div className="bg-red-800 w-full h-full flex md:flex-row flex-col">
      <div className="w-full md:w-1/2 bg-green-600 h-full  p-5 flex flex-col items-center ">
        <h1>Head Office</h1>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          form={form} // Pass the form instance to the Form component

          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="md:flex gap-4 mt-5">
            <Form.Item
              label="City"
              name="city"
              rules={[
                {
                  required: true,
                  message: "Please input your city!",
                },
              ]}
              style={{ flex: 1 }}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Sub city" name="subCity" style={{ flex: 1 }}>
              <Input />
            </Form.Item>
          </div>

          <div className="md:flex gap-4 mt-5">
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              style={{ flex: 1 }}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Email" name="email" style={{ flex: 1 }}>
              <Input />
            </Form.Item>
          </div>

          <div className="md:flex gap-4 mt-5">
            <Form.Item label="Woreda" name="woreda" style={{ flex: 1 }}>
              <Input />
            </Form.Item>

            <Form.Item label="Kebele" name="kebele" style={{ flex: 1 }}>
              <Input />
            </Form.Item>
          </div>

          <Form.Item
            label="Description"
            name="description"
            className="flex justify-start w-full"
            // style={{ flex: 1 , justifyContent:"flex-start" }}
          >
            <TextArea rows={4} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
            className="hidden md:flex"
          >
            <Button type="primary" htmlType="submit" onClick={handleButtonClick}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="md:w-1/2 flex flex-col gap-4">
        <MapContainer
          // style={{ width: "690px", height: "600px" }}
          style={mapContainerStyles}
          center={markerPosition}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={markerPosition}
            draggable={true}
            eventHandlers={{
              dragend: (e) => {
                const { lat, lng } = e.target.getLatLng();
                moveMarkerToLocation(lat, lng);
              },
            }}
          >
            <Popup>Drag me!</Popup>
          </Marker>
        </MapContainer>

        <Button className="md:collapse bg-yellow-400 flex items-center  justify-center m-4" onClick={handleButtonClick}>
          subimit
        </Button>
      </div>
    </div>
  );
}

export default Test;
