import { useState } from "react";
import ShootingStarBorder from "./components/ShootingStarBorder";
import ReviewList from "./components/ReviewList";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [err, setErr] = useState("");
  const [loginCred, setLoginCred] = useState({});
  const [error, setError] = useState("")

  const navigate = useNavigate();

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
      assesseeAddressEmailCommunication: true,
      assesseeAddressEmailVerification: false,
    },
    informationPersonal: {
      assesseeGender: gender,
    },
  };

  const inwardApiCall = async () => {
    // navigate("/assignment")
    // localStorage.setItem("associateId", "623dab305c151e50182f1412");
    // localStorage.setItem("assesseeId", "6481aba19e55a66c6b4fb2bd");
    // return;
    fetch(
      // `${
      //   import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_ENVIRONMENT
      // }/insight-guru/api/assessee`,
      "https://srsj4pnvbh.execute-api.ap-southeast-1.amazonaws.com/stage/insight-guru/api/assessee",
      {
        method: "POST",
        headers: new Headers({
          Authorization:
            "eyJraWQiOiJYdkZEN1wvakVWVktxRWxWblZkc3BZWEhkeWszTzMxQWlJd2FKRHFYNkJGVT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI3Y2JhODBjZi0xYTE0LTQ4ZWMtODk0My0zM2E4NTdhMGNkOGYiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfUTRUak53Ukp6IiwiY2xpZW50X2lkIjoiN3B2ZmQ1djNzNTFwYmZkODNrMzkwZTNqYSIsIm9yaWdpbl9qdGkiOiI3ZTVjZDlkNy1kNWI0LTRjNDQtOWU1MS1iZTgyOGYzODc1ZTAiLCJldmVudF9pZCI6ImRlYzc1MzA1LWNkZjItNDAwZS1hMDY4LTBjNGQ5ZDAyMDk0OSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MDY4NTgwMjYsImV4cCI6MTcwODA4OTk4MSwiaWF0IjoxNzA4MDg2MzgxLCJqdGkiOiIxZGM1N2I5Zi1hNTczLTRlNjUtODE2NC1mOWFlMTBhNDEwNDQiLCJ1c2VybmFtZSI6IjY0ODFhYmExOWU1NWE2NmM2YjRmYjJiZCJ9.QzOezpIw9LAF2fE8SXlHPyko94LCo_-_upOll3T1v98oDUtjUOFB4_jhSHMfQNPTjFQdei4xDOWLiqxNAfNcU64fAf4R52Tcyf-49tAT9x70jgOwYD3nL2al2ThbIomGXRlQmP-88qiLfPG8D6qd2xIX9YgnZ1dT0y7bG1nKU46xNSsw_ZSznt2oChk_Tyu0qe5d9DVyaHymw_8sPIlDgy283QeAmX38yxEMZAqX-sVHIj1y5FgISbMlfPBmdFV8AMyLXiV7OeL4KqjZ0h5Uoah-I1phevzZKQ_z2VCkM57vjVa0pMY6f22iOAmpoo1DuxNDj29MlPLlewDiQqWZlQ",
        }),
        body: JSON.stringify(payload),
      }
    )
      .then(async (data) => {
        // console.log(await data.json());
        const resp = await data.json();
        // console.log(resp);
        if (resp.responseCode !== "000" || resp.responseObject.length === 0) {
          setErr(resp.responseMessage)
          // navigate("/error");
          return;
        }

        const respObj = resp.responseObject[0];

        if (!respObj?.assesseeTag?.assesseeTagPrimary) {
          // navigate("/error");
          setErr(resp.responseMessage)
          return;
        }
        setErr(resp.responseMessage)
        localStorage.setItem(
          "associateId",
          respObj?.associateId || "623dab305c151e50182f1412"
        );
        localStorage.setItem(
          "assesseeId",
          respObj?.assesseeTag?.assesseeTagPrimary
        );
        setLoginCred({
          credential: respObj?.informationSetup?.assesseeSignInCredential,
          password: respObj?.informationSetup?.assesseeSignInPassword,
        });
        // navigate("/assignment");
      })
      .catch((e) => {
        setError(e.message)
        // navigate("/error");
        console.log(e);
      });
  };

  const onSubmit = () => {
    // console.log(
    //   firstName,
    //   lastName,
    //   email,
    //   mobile,
    //   gender,
    //   import.meta.env.VITE_API_BASE_URL
    // );

    if (!firstName || !lastName || !email || !mobile || !gender) {
      setErr("All Fields are Mandatory");
      return;
    }
    inwardApiCall();
  };

  return (
    <>
      <div className="flex justify-center align-middle w-auto h-auto">
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
      <div className="h-8"></div>

      <p>ERR: {error}</p>
      <p>credential: {loginCred.credential}</p>
      <p>PASSWORD: {loginCred.password}</p>
      <Link
        className="text-center my-10 text-red-500 hover:text-orange-600"
        to={"/assignment"}
      >
        <span>Check outwardApi (Assignment) &#128640;</span>
      </Link>
    </>
  );
}

export default App;
