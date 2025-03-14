import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../Components/Header";
import Card_Loader from "../../lib/card_loader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Img from "../../assets/bg.png";
import { http } from "../../http/http";
function page() {
  const [isloading, setLoading] = useState(false);
  const [projects, setProject] = useState("");

  useEffect(() => {
    const Fetch = async () => {
      setLoading(true);
      http.get("shihab/fetch_projects").then((res) => {
        if (res.data.fetch) {
          setLoading(false);
          setProject(res.data.projects);
        } else {
          setLoading(true);
        }
      });
    };
    Fetch();
  }, []);

  return (
    <div className="bg-slate-900  min-h-screen">
      <Header />
      <Helmet>
        <title>Projects</title>
      </Helmet>

      <div className="rounded-lg text-center lg:w-11/12 m-auto border  lg:py-12 border-slate-500  dark:bg-slate-800">
        <div className="filer-box rounded-2xl overflow-hidden">
          <input
            type="search"
            placeholder="Type to filter"
            className="w-11/12 h-12 mt-3 rounded-xl  px-6 border-sky-700 border-2 dark:bg-slate-800"
          />
        </div>
        <div className="grid lg:grid-cols-3 border p-4 rounded-lg gap-3 border-slate-700 w-11/12 m-auto mt-10 sm:grid-cols-1 md:grid-cols-1">
          <div className="flex-col  flex">
            <label htmlfor="" className="text-left my-2 text-2xl">
              Select Language
            </label>
            <select name="" id="" className="dark:bg-slate-700 p-2 rounded-lg">
              <option value="">JavaScript</option>
              <option value="">Php</option>
              <option value="">Python</option>
              <option value="">React</option>
              <option value="">Next</option>
              <option value="">Laravel</option>
              <option value="">Express</option>
            </select>
          </div>

          <div className="flex-col  flex">
            <label htmlfor="" className="text-left my-2 text-2xl">
              Select Style
            </label>
            <select name="" id="" className="dark:bg-slate-700 p-2 rounded-lg">
              <option value="">Tailwind</option>
              <option value="">Bootstrap</option>
              <option value="">CSS</option>
            </select>
          </div>
          <div className="flex-col  flex">
            <label htmlfor="" className="text-left my-2 text-2xl">
              Select Database
            </label>
            <select name="" id="" className="dark:bg-slate-700 p-2 rounded-lg">
              <option value="">MySql</option>
              <option value="">MongDb</option>
              <option value="">Firbase</option>
            </select>
          </div>
        </div>
      </div>
      {/* result projects */}
      <div className="mt-3  ">
        <div>
          {isloading ? (
            <div className="grid gap-4 mt-5 w-[95%] m-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              <Card_Loader />
              <Card_Loader />
              <Card_Loader />
              <Card_Loader />
              <Card_Loader />
              <Card_Loader />
              <Card_Loader />
              <Card_Loader />
            </div>
          ) : (
            Object.values(projects).map((todos) => {
              return (
                <div
                  className="card p-2 overflow-hidden relative rounded-lg bg-slate-700"
                  key={todos._id}
                >
                  <LazyLoadImage effect="blur" src={Img} />

                  <div className="flex justify-between items-center">
                    <div className="text-left">
                      <div className="mt-2 px-2 ">Relesed : 12 AUG</div>
                      <div className="mt-2 px-2 flex items-center">
                        Code : <i className="fa-brands mx-3 fa-github"></i>{" "}
                        Github
                      </div>
                    </div>

                    <button
                      className="px-5 py-1 rounded-lg border hover:bg-sky-900 "
                      onClick={() => {
                        window.open(todos.url);
                      }}
                    >
                      View
                    </button>
                  </div>
                  <p className="text-sm mt-2 px-2 text-gray-400">
                    {todos.lan ? (
                      todos.lan
                    ) : (
                      <idv className="animate-pulse h-2 w-5 bg-slate-500"></idv>
                    )}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default page;
