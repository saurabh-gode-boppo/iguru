import { useState } from "react";
import ShootingStarBorder from "./components/ShootingStarBorder";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [err, setErr] = useState("");

  const payload = {
    associateId: "623dab305c151e50182f1412",
    informationBasic: {
      assesseeNamePrefix: "",
      assesseeNameFirst: firstName,
      assesseeNameOther: "",
      assesseeNameLast: lastName,
      assesseeNameVerification: false,
      assesseeAlias: "",
      assesseePicture: "",
      assesseePictureVerification: false,
    },
    assesseeAddressEmailPrimary: {
      assesseeAddressEmail: email,
      assesseeAddressEmailCommunication: false,
      assesseeAddressEmailVerification: false,
    },
    informationPersonal: {
      assesseeGender: gender,
    },
  };

  const inwardApiCall = async () => {

    fetch(`${import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_ENVIRONMENT}/insight-guru/api/assessee`, {
      method: "POST",
      headers: new Headers({
        Authorization:
          "eyJraWQiOiJYdkZEN1wvakVWVktxRWxWblZkc3BZWEhkeWszTzMxQWlJd2FKRHFYNkJGVT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI3Y2JhODBjZi0xYTE0LTQ4ZWMtODk0My0zM2E4NTdhMGNkOGYiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfUTRUak53Ukp6IiwiY2xpZW50X2lkIjoiN3B2ZmQ1djNzNTFwYmZkODNrMzkwZTNqYSIsIm9yaWdpbl9qdGkiOiI3ZTVjZDlkNy1kNWI0LTRjNDQtOWU1MS1iZTgyOGYzODc1ZTAiLCJldmVudF9pZCI6ImRlYzc1MzA1LWNkZjItNDAwZS1hMDY4LTBjNGQ5ZDAyMDk0OSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MDY4NTgwMjYsImV4cCI6MTcwNzczNzM3NiwiaWF0IjoxNzA3NzMzNzc2LCJqdGkiOiI0MzhhM2EzMy04ZDNkLTQwNzUtYTJhZS1kY2NlYWM3NjAwYzEiLCJ1c2VybmFtZSI6IjY0ODFhYmExOWU1NWE2NmM2YjRmYjJiZCJ9.vIOxA1_uxUD5K9Mo2oF0MurVswN0SvP-tIfu1DGCZQSn7pDOO0xaNnrxsD_cPBmEEjHckjPAdUneoCS5jtNCpMAShyN-ZFQ5GnJaVPTn-0cgA6gcbRDD5QR1Dd0m6CBJBJVHaQ1kljXlrItIL1crPjC1HMz1_WvBmkMOj-oY6s7uk7ishqsPT-TPJEF_vMv-iHA5t04P-4PU3Nhdo2HGCezVrqxDONituU7y_ZNi5kEFF5ee7dSUg0wypRPcndaTxAFB8_emmPQRNphbQgtytnp4ynZumRhFl0pqgdIJkwTpOzQH7qlAOxBNAKsW804becrcgnZM1XT3sLIqk7ULIA",
      }),
      body: JSON.stringify(payload),
    })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onSubmit = () => {
    console.log(firstName, lastName, email, mobile, gender, import.meta.env.VITE_API_BASE_URL);

    if (!firstName || !lastName || !email || !mobile || !gender) {
      setErr("All Fields are Mandatory");
      return;
    }
    inwardApiCall();
  };

  return (
    <div className="flex justify-center align-middle w-auto h-80">
      <div className="">
        <h1 className="text-xl font-semibold my-2 capitalize">
          assessee register
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nulla
          harum accusamus incidunt.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div className="flex justify-between align-middle my-6 ">
            <div className="flex flex-col">
              <label className="w-48">First Name</label>
              <input
                className="rounded-md p-3 w-80"
                type="text"
                value={firstName}
                onChange={(e) => {
                  setErr("");
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col">
              <label className="w-48">Last Name</label>
              <input
                className="rounded-md p-3 w-80"
                type="text"
                value={lastName}
                onChange={(e) => {
                  setErr("");
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col my-6">
            <label>Email Address</label>
            <input
              className="rounded-md p-3"
              type="email"
              value={email}
              onChange={(e) => {
                setErr("");
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-between align-middle my-6">
            <div className="flex flex-col">
              <label className="w-48">Phone Number</label>
              <input
                className="rounded-md p-3 w-80"
                type="tel"
                value={mobile}
                onChange={(e) => {
                  setErr("");
                  setMobile(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col">
              <label className="w-48">Gender</label>
              {/* <input className="rounded-md p-3 w-80" type="text" /> */}
              <select
                className="rounded-md p-3 w-80"
                name="gender"
                id="gender-select"
                value={gender}
                onChange={(e) => {
                  setErr("");
                  setGender(e.target.value);
                }}
              >
                <option value="">Please choose an option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="text-lg text-[#ff5a00] h-4 block">{err}</div>
          <div className="flex flex-col w-full justify-start mt-6">
            {/* <button className="bg-[#ff5a00] px-3 py-2 w-32 rounded-md before:left-5 top-0 duration" type="submit">Register</button> */}
            <ShootingStarBorder onSubmit={onSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
