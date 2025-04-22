import React, { useState } from "react";
import Input from "./Input";
import RichTextEditor from "./RichTextEditor";

const Contact = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 text-white p-6 space-y-6"
      >
        {/* Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-2xl font-semibold">Add Direct Client</h2>
          <div className="flex gap-2">
            <button className="bg-gray-600 px-4 py-2 rounded flex items-center gap-1">
              Back{" "}
              <span className="block bg-white pl-1 rounded-full pr-2">
                <i className="fas fa-backward text-black"></i>
              </span>
            </button>
            <button className="bg-red-600 px-4 py-2 rounded">Submit</button>
          </div>
        </div>
        {/* Contact Information */}
        <section className="flex flex-wrap gap-4 mt-2">
          <Input
            label="Contact Information"
            value="B2C"
            disabled
            className="w-full sm:w-1/2 lg:w-[15.6%]"
          />
        </section>
        {/* Personal Info */}
        <div className="relative border border-gray-600 rounded-md p-4">
          <span className="absolute -top-3 left-4 bg-gray-900 px-2 text-sm text-gray-300">
            Personal Information
          </span>
          <section className="flex flex-wrap gap-4 mt-2">
            <Input
              label="Nationality"
              className="w-full sm:w-1/2 lg:w-[15.6%]"
            />
            <Input
              label="Currency"
              value="INR"
              className="w-full sm:w-1/2 lg:w-[15.6%]"
            />

            <div className={`flex flex-col w-full sm:w-1/2 lg:w-[15.6%]`}>
              <label className="mb-1 text-sm">Title</label>
              <select
                value="select"
                className="bg-gray-800 border border-gray-600 px-3 py-2 rounded text-white"
              >
                <option value="">Select</option>
                <option value="">Select Title1</option>
                <option value="">Select Title2</option>
              </select>
            </div>

            <Input
              label="First Name"
              className="w-full sm:w-1/2 lg:w-[15.6%]"
            />
            <Input
              label="Middle Name"
              className="w-full sm:w-1/2 lg:w-[15.6%]"
            />
            <Input label="last Name" className="w-full sm:w-1/2 lg:w-[15.6%]" />
            <div className={`flex flex-col w-full sm:w-1/2 lg:w-[15.6%]`}>
              <label className="mb-1 text-sm">Gender</label>
              <select
                value="select"
                className="bg-gray-800 border border-gray-600 px-3 py-2 rounded text-white"
              >
                <option value="">Select</option>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>
            <Input
              label="DOB"
              type="date"
              className="w-full sm:w-1/2 lg:w-[15.6%]"
            />
            <Input
              label="Anniversary Date"
              type="date"
              className="w-full sm:w-1/2 lg:w-[15.6%]"
            />
          </section>
        </div>
        {/* Contact Info */}
        <div className="relative border border-gray-600 rounded-md p-4">
          <span className="absolute -top-3 left-4 bg-gray-900 px-2 text-sm text-gray-300">
            Contact Information
          </span>
          <section className="flex flex-wrap gap-4 mt-2">
            <div className={`flex flex-col w-full sm:w-1/2 lg:w-[15.6%]`}>
              <label className="mb-1 text-sm">Mobile</label>
              <select
                value="select"
                className="bg-gray-800 border border-gray-600 px-3 py-2 rounded text-white"
              >
                <option value="">Select</option>
                <option value="">Select Mobile 1</option>
                <option value="">Select Mobile 2</option>
              </select>
            </div>
            <Input
              type="tel"
              label="Mobile"
              className="w-full sm:w-1/2 lg:w-[15.6%]"
            />
            <div className={`flex flex-col w-full sm:w-1/2 lg:w-[15.6%]`}>
              <label className="mb-1 text-sm">Email Type</label>
              <select
                value="select"
                className="bg-gray-800 border border-gray-600 px-3 py-2 rounded text-white"
              >
                <option value="">Select</option>
                <option value="">Email 1</option>
                <option value="">Email 2</option>
              </select>
            </div>
            <Input label="Email" className="w-full sm:w-1/2 lg:w-[15.6%]" />
            <Input label="Country" className="w-full sm:w-1/2 lg:w-[15.6%]" />
            <Input label="Pin/Zip" className="w-full sm:w-1/2 lg:w-[15.6%]" />
          </section>
        </div>

        {/* Address Information */}
        <div className="relative border border-gray-600 rounded-md p-4">
          <span className="absolute -top-3 left-4 bg-gray-900 px-2 text-sm text-gray-300">
            Address Information
          </span>
          <section className="flex flex-wrap gap-4 mt-2">
            <div className={`flex flex-col w-full sm:w-1/2 lg:w-[15.6%]`}>
              <label className="mb-1 text-sm">Country</label>
              <select
                value="select"
                className="bg-gray-800 border border-gray-600 px-3 py-2 rounded text-white"
              >
                <option value="">Select</option>
                <option value="">India</option>
                <option value="">USA</option>
              </select>
            </div>
            <div className={`flex flex-col w-full sm:w-1/2 lg:w-[15.6%]`}>
              <label className="mb-1 text-sm">State</label>
              <select
                value="select"
                className="bg-gray-800 border border-gray-600 px-3 py-2 rounded text-white"
              >
                <option value="">Select</option>
                <option value="">Goa</option>
                <option value="">Uttar Pradesh</option>
              </select>
            </div>
            <div className={`flex flex-col w-full sm:w-1/2 lg:w-[15.6%]`}>
              <label className="mb-1 text-sm">City</label>
              <select
                value="select"
                className="bg-gray-800 border border-gray-600 px-3 py-2 rounded text-white"
              >
                <option value="">Select</option>
                <option value="">City 1</option>
                <option value="">City 2</option>
              </select>
            </div>
            <Input label="Pin/Zip" className="w-full sm:w-1/2 lg:w-[15.6%]" />
            <Input label="Address" className="w-full sm:w-1/2 lg:w-[15.6%]" />
          </section>
        </div>
        {/* Documentation */}
        <div className="relative border border-gray-600 rounded-md p-4">
          <span className="absolute -top-3 left-4 bg-gray-900 px-2 text-sm text-gray-300">
            Documentation
          </span>
          <section className="flex flex-wrap gap-4 mt-2">
            <div className={`flex flex-col w-full sm:w-1/2 lg:w-[15.6%]`}>
              <label className="mb-1 text-sm">Document Type</label>
              <select
                value="select"
                className="bg-gray-800 border border-gray-600 px-3 py-2 rounded text-white"
              >
                <option value="">Select</option>
                <option value="">Aadhar</option>
                <option value="">PAN</option>
              </select>
            </div>
            <div className={`flex flex-col w-full sm:w-1/2 lg:w-[15.6%]`}>
              <label className="mb-1 text-sm">Required</label>
              <select
                value="select"
                className="bg-gray-800 border border-gray-600 px-3 py-2 rounded text-white"
              >
                <option value="">Select</option>
                <option value="">Required</option>
                <option value="">Not Required</option>
              </select>
            </div>
            <Input
              label="Document Type"
              className="w-full sm:w-1/2 lg:w-[15.6%]"
            />
            <Input
              label="Document Number"
              className="w-full sm:w-1/2 lg:w-[15.6%]"
            />
            <Input
              label="Issue Date"
              type="date"
              className="w-full sm:w-1/2 lg:w-[15.6%]"
            />
            <Input
              label="Expire Date"
              type="date"
              className="w-full sm:w-1/2 lg:w-[15.6%]"
            />
            <div className={`flex flex-col w-full sm:w-1/2 lg:w-[15.6%]`}>
              <label className="mb-1 text-sm">Issue Country</label>
              <select
                value="select"
                className="bg-gray-800 border border-gray-600 px-3 py-2 rounded text-white"
              >
                <option value="">Both</option>
                <option value="">Required</option>
                <option value="">Not Required</option>
              </select>
            </div>
            <div className={`flex flex-col w-full sm:w-1/2 lg:w-[15.6%]`}>
              <label className="mb-1 text-sm">Issue Country</label>
              <select
                value="select"
                className="bg-gray-800 border border-gray-600 px-3 py-2 rounded text-white"
              >
                <option value="">Select</option>
                <option value="">Required</option>
                <option value="">Not Required</option>
              </select>
            </div>
            <Input
              label="Document Logo"
              type="file"
              className="w-full sm:w-1/2 lg:w-[15.6%]"
            />
          </section>
        </div>

        {/* Social Media */}
        <div className="relative border border-gray-600 rounded-md p-4">
          <span className="absolute -top-3 left-4 bg-gray-900 px-2 text-sm text-gray-300">
            Social Media
          </span>
          <section className="flex flex-wrap gap-4 mt-2">
            <Input
              label="Facebook Profile"
              className="w-full sm:w-1/2 lg:w-[15.6%]"
              placeholder={""}
            />
            <Input
              label="Twitter Profile"
              className="w-full sm:w-1/2 lg:w-[15.6%]"
              placeholder={""}
            />
            <Input
              label="LinkedIn Profile"
              className="w-full sm:w-1/2 lg:w-[15.6%]"
              placeholder={""}
            />
            <Input
              label="Instagram Profile"
              className="w-full sm:w-1/2 lg:w-[15.6%]"
              placeholder={""}
            />
            <Input
              label="Skype Id"
              className="w-full sm:w-1/2 lg:w-[15.6%]"
              placeholder={""}
            />
            <Input
              label="MSN Id"
              className="w-full sm:w-1/2 lg:w-[15.6%]"
              placeholder={""}
            />
          </section>
        </div>
        <div className="bg-gray-900 text-white space-y-6">
          <div
            className="bg-red-600 text-white px-4 py-2 cursor-pointer rounded w-max"
            onClick={() => setShowMoreInfo(!showMoreInfo)}
          >
            Add More Information {showMoreInfo ? "▲" : "▼"}
            {/* <i class="fas fa-sort-up"></i> */}
            {/* <i class="fas fa-sort-down"></i> */}
          </div>

          {showMoreInfo && (
            <div className="">
              <section className="flex flex-wrap gap-4 mt-2 mb-5">
                <Input
                  label="Sales Person"
                  className="w-full sm:w-1/2 lg:w-[15.6%]"
                  placeholder={""}
                />
                <div className={`flex flex-col w-full sm:w-1/2 lg:w-[15.6%]`}>
                  <label className="mb-1 text-sm">Status</label>
                  <select
                    value="select"
                    className="bg-gray-800 border border-gray-600 px-3 py-2 rounded text-white"
                  >
                    <option value="">Select</option>
                    <option value="">Status 1</option>
                    <option value="">Status 2</option>
                  </select>
                </div>
              </section>
              {/* Family Information */}
              <div className="relative border border-gray-600 rounded-md p-4 mb-5">
                <span className="absolute -top-3 left-4 bg-gray-900 px-2 text-sm text-gray-300">
                  Family Information
                </span>
                <section className="flex flex-wrap gap-4 mt-2">
                  <Input
                    label="Family Code"
                    className="w-full sm:w-1/2 lg:w-[15.6%]"
                    placeholder={""}
                  />
                  <div className={`flex flex-col w-full sm:w-1/2 lg:w-[15.6%]`}>
                    <label className="mb-1 text-sm">Family Realtion</label>
                    <select
                      value="select"
                      className="bg-gray-800 border border-gray-600 px-3 py-2 rounded text-white"
                    >
                      <option value="">Select</option>
                      <option value="">Father</option>
                      <option value="">Mother</option>
                    </select>
                  </div>
                </section>
              </div>

              <div className="relative border border-gray-600 rounded-md p-4 mb-5">
                <span className="absolute -top-3 left-4 bg-gray-900 px-2 text-sm text-gray-300">
                  Preference
                </span>
                <section className="flex flex-wrap gap-4">
                  <Input
                    label="Meal Preference"
                    className="w-full sm:w-1/2 lg:w-[15.6%]"
                  />
                  <Input
                    label="Special Assistance"
                    className="w-full sm:w-1/2 lg:w-[15.6%]"
                  />
                  <Input
                    label="Seat Preference"
                    className="w-full sm:w-1/2 lg:w-[15.6%]"
                  />
                  <Input
                    label="Accommodation Pref"
                    className="w-full sm:w-1/2 lg:w-[15.6%]"
                  />
                </section>
              </div>

              <div className="relative border border-gray-600 rounded-md p-4 mb-5">
                <span className="absolute -top-3 left-4 bg-gray-900 px-2 text-sm text-gray-300">
                  Other
                </span>
                <section className="flex flex-wrap gap-4">
                  <Input
                    label="Market Type"
                    value="General"
                    className="w-full sm:w-1/2 lg:w-[15.6%]"
                  />
                  <Input
                    label="Holiday Preference"
                    className="w-full sm:w-1/2 lg:w-[15.6%]"
                  />
                  <Input
                    label="Covid Vaccinated"
                    value="Yes"
                    className="w-full sm:w-1/2 lg:w-[15.6%]"
                  />
                  <Input
                    label="Relation"
                    value="Yes"
                    className="w-full sm:w-1/2 lg:w-[15.6%]"
                  />
                </section>
              </div>

              {/* Remarks Section */}
              <section className="flex flex-wrap justify-center gap-4">
                <RichTextEditor
                  className="w-full md:w-[48%] lg:w-[32%]"
                  label="Remarks 1"
                />
                <RichTextEditor
                  className="w-full md:w-[48%] lg:w-[32%]"
                  label="Remarks 2"
                />
                <RichTextEditor
                  className="w-full md:w-[48%] lg:w-[32%]"
                  label="Remarks 3"
                />
              </section>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
