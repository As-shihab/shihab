import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Select from "react-select";
import { http } from "../../../http/http";
export default function CreateProject() {
  const Database = [
    { value: "MONGODB", label: "MONGODB" },
    { value: "MYSQL", label: "MYSQL" },
    { value: "NOSQL", label: "NOSQL" },
    { value: "POSTSQL", label: "POSTSQL" },
    { value: "ORACLE", label: "ORACLE" },
    { value: "MSS", label: "MSS" },
  ];

  const Style = [
    { value: "CSS", label: "CSS" },
    { value: "TAILWIND", label: "TAILWIND" },
    { value: "BOOTSTRAP", label: "BOOTSTRAP" },
    { value: "METARIAL", label: "METARIAL" },
    { value: "FRAMER", label: "FRAMER" },
  ];

  const Language = [
    { value: "C#", label: "C#" },
    { value: "C++", label: "C++" },
    { value: "C", label: "C" },
    { value: "JAVASCRIPT", label: "JAVASCRIPT" },
    { value: "REACT", label: "REACT" },
    { value: "NODE", label: "NODE" },
    { value: "JAVA", label: "JAVA" },
    { value: "PYTHON", label: "PYTHON" },
    { value: "NEXT.JS", label: "NEXT.JS" },
    { value: "PHP", label: "PHP" },
    { value: "LARAVEL", label: "LARAVEL" },
    { value: "REACTNATIVE", label: "REACTNATIVE" },
    { value: "EXPRESS.JS", label: "EXPRESS.JS" },
    { value: "VUE.JS", label: "VUE.JS" },
    { value: "ANGULAR.JS", label: "ANGULAR.JS" },
  ];

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "transparent" }),
    menuList: (styles) => ({
      ...styles,
      background: "#1e293b",
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isFocused
        ? "transparent"
        : isSelected
        ? "transparent"
        : undefined,
      zIndex: 1,
    }),
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
  };

  // ------------
  const [viewimg, setVimg] = useState(null);
  const [dimg, setDimg] = useState(null);
  const [msg, setMsg] = useState();
  const [loader, setLoader] = useState(false);
  const BlogFile = () => {
    document.querySelector(".blogfile").click();
  };

  if (dimg) {
    for (let i = 0; i < dimg.length; i++) {
      const Reader = new FileReader();
      Reader.readAsDataURL(dimg[0]);

      Reader.onload = (e) => {
        setVimg(e.target.result);
      };
    }
  }
  //  ----------------------------- Projects -----------======

  const [Projects, setProject] = useState({
    photos: dimg,
    title: "",
    language: "",
    style: "",
    database: "",
    github: "",
    bloglink: "",
    live: "",
    desc: "",
  });

  const Deploy = async () => {
    setLoader(true);
    const formdata = new FormData();
    formdata.append("title", Projects.title);
    formdata.append("language", JSON.stringify(Projects.language));
    formdata.append("style", JSON.stringify(Projects.style));
    formdata.append("database", JSON.stringify(Projects.database));
    formdata.append("repolink", Projects.github);
    formdata.append("bloglink", Projects.bloglink);
    formdata.append("livelink", Projects.live);
    formdata.append("desc", Projects.desc);

    for (let i = 0; i < dimg.length; i++) {
      formdata.append("photos", dimg[i]);
    }
    await http
      .post("shihab/project/newproject", formdata)
      .then((res) => {
        setLoader(false);
        setMsg(res.data.msg);
        console.log(res.data);
      })
      .catch((err) => {
        setMsg(err.message);
        setLoader(false);
      });
  };
  return (
    <div className="border border-slate-800 rounded-lg shadow-lg p-2">
      {msg ? <p className="my-3"> {msg && msg}</p> : null}
      <div
        className={`drug-photo bg-slate-900 rounded-lg shadow-lg relative overflow-hidden  ${
          dimg ? `h-[40vh] ` : `h-[20vh] `
        } items-center`}
      >
        <input
          type="file"
          accept="image/*"
          className="blogfile"
          multiple
          onChange={(e) => {
            setDimg(e.target.files);
          }}
          hidden
        />
        {viewimg ? (
          <div className="w-full h-full">
            <LazyLoadImage src={viewimg} />
            <div
              className="absolute bottom-5 right-5 px-8 shadow-lg py-2 rounded-lg cursor-pointer backdrop-blur-lg"
              onClick={BlogFile}
            >
              {dimg.length < 2 ? null : <b>+{dimg.length} Photos</b>}
            </div>
          </div>
        ) : (
          <div className="text-center h-full flex justify-center items-center w-full">
            <FaCloudUploadAlt
              onClick={BlogFile}
              className="  cursor-pointer  text-4xl md:text-6xl lg:text-9xl  font-bold text-gray-100 shadow-sm "
            />
          </div>
        )}
      </div>

      <div className="rounded-lg text-center lg:w-11/12 m-auto   lg:py-12   bg-slate-900">
        <div className="filer-box rounded-2xl overflow-hidden">
          <input
            type="text"
            onChange={(e) => {
              setProject({ ...Projects, title: e.target.value });
            }}
            placeholder="Type write project titile *"
            className="w-11/12 h-12 mt-3 rounded-xl bg-transparent  px-6 border-sky-700 border-2 dark:bg-slate-800"
          />
        </div>
        <div className="grid lg:grid-cols-3 border p-4 rounded-lg gap-3 border-slate-700 w-11/12  m-auto mt-10 sm:grid-cols-1 md:grid-cols-1">
          <div className="flex-col  flex">
            <label htmlfor="" className="text-left my-2 text-2xl">
              Select Language
            </label>
            <Select
              options={Language}
              isMulti={true}
              styles={colourStyles}
              onChange={(e) => {
                setProject({ ...Projects, language: e });
              }}
            />
          </div>

          <div className="flex-col  flex">
            <label htmlfor="" className="text-left my-2 text-2xl">
              Select Style
            </label>

            <Select
              options={Style}
              isMulti={true}
              styles={colourStyles}
              onChange={(e) => {
                setProject({ ...Projects, style: e });
              }}
            />
          </div>
          <div className="flex-col  flex">
            <label htmlfor="" className="text-left my-2 text-2xl">
              Select Database
            </label>
            <Select
              options={Database}
              isMulti={true}
              styles={colourStyles}
              onChange={(e) => {
                setProject({ ...Projects, database: e });
              }}
            />
          </div>
        </div>

        {/* links */}

        <div className="grid lg:grid-cols-3 border p-4 rounded-lg gap-3 border-slate-700 w-11/12  m-auto mt-10 sm:grid-cols-1 md:grid-cols-1">
          <div className="flex-col  flex">
            <label htmlfor="" className="text-left my-2 text-2xl">
              Repo Link
            </label>
            <input
              type="text"
              onChange={(e) => {
                setProject({ ...Projects, github: e.target.value });
              }}
              placeholder="Type to git repo"
              className="bg-transparent px-4 py-2 rounded-lg w-full border border-slate-800 shadow-lg file:"
            />
          </div>

          <div className="flex-col  flex">
            <label htmlfor="" className="text-left my-2 text-2xl">
              Live Link
            </label>
            <input
              type="text"
              onChange={(e) => {
                setProject({ ...Projects, live: e.target.value });
              }}
              placeholder="Type to Live Link"
              className="bg-transparent px-4 py-2 rounded-lg w-full border border-slate-800 shadow-lg file:"
            />
          </div>
          <div className="flex-col  flex">
            <label htmlfor="" className="text-left my-2 text-2xl">
              Blog Link
            </label>
            <input
              type="text"
              onChange={(e) => {
                setProject({ ...Projects, bloglink: e.target.value });
              }}
              placeholder="Type to Blog Link (optional)"
              className="bg-transparent px-4 py-2 rounded-lg w-full border border-slate-800 shadow-lg file:"
            />
          </div>
        </div>

        <div className="mt-4">
          <div className="text-left   w-11/12 m-auto ">
            <label htmlFor="" className="text-xl  font-bold ">
              Description
            </label>
            <br />
            <textarea
              onChange={(e) => {
                setProject({ ...Projects, desc: e.target.value });
              }}
              className="w-full mt-3 p-3 bg-transparent border border-slate-800 rounded-lg shadow-lg"
              placeholder="Type to description.."
            ></textarea>
          </div>
        </div>
      </div>
      <div className="text-right w-full mb-8 mr-6">
        <button
          onClick={Deploy}
          type="button"
          className="py-1 px-3 bg-sky-500 text-white rounded-lg shadow-lg"
          disabled={loader ? true : false}
        >
          {loader ? "Creating..." : "Create"}
        </button>
      </div>
    </div>
  );
}
