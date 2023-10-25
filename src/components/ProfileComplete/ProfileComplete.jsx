import { useEffect, useState } from "react";
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
import { addOffice } from "../../services/officeService";
const { TextArea } = Input;

const ProfileComplete = () => {

  const [markerPosition, setMarkerPosition] = useState([9.005401, 38.763611]);
  const [city,setCity] = useState("");
  const [subCity,setSubCity] = useState("")
  const [phoneNumber,setPhoneNumber]= useState("")
  const [email,setEmail] = useState("");
  const [woreda,setWoreda] = useState("");
  const [kebele,setKebele] = useState("");
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
    addOffice({city,email,subCity,
      description,phoneNumber,woreda,kebele,lat:markerPosition[0],long:markerPosition[1]
    }).then((res)=>{
      console.log("res",res)
    })
   // console.log("Success:", email,city,subCity,description,phoneNumber,woreda,kebeble,markerPosition[0],"long",markerPosition[1]);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [form] = Form.useForm(); // Create a form instance


  // Media query for larger screens
  if (window.innerWidth >= 768) {
    mapContainerStyles.height = "620px"; // Adjust height for larger screens
  }

  const handleButtonClick = () => {
    console.log("tage")
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
    <div className=" w-full h-full flex md:flex-row flex-col">
      <div className="w-full md:w-1/2 bg-gray-200   p-5 flex flex-col items-center gap-10">
        <div className="p-2  shadow-md flex flex-col items-center">

        <h1 className="text-3xl font-bold">Head Office</h1>
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
            className="hidden md:flex justify-end"
          >
            <Button type="primary" htmlType="submit" className="bg-black mr-12" onClick={handleButtonClick}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
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

        <Button className="md:collapse bg-black flex items-center  justify-center m-4 text-white" onClick={onFinish}>
          subimit
        </Button>
      </div>
    </div>
  );
}

export default ProfileComplete